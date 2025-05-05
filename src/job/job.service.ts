import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PostJobDto } from './dto/job.dto';

@Injectable()
export class JobService {
  constructor(private readonly prisma: PrismaService) {}
  async createJob(postJobDto: PostJobDto, userId: string) {
    const {
      title,
      description,
      requirements,
      location,
      salary,
      jobType,
      experienceLevel,
      positionType,
      companyId,
    } = postJobDto;

    const job = await this.prisma.job.create({
      data: {
        title,
        description,
        requirements,
        location,
        salary,
        jobType,
        experienceLevel,
        positionType,
        companyId,
        createdById: userId,
      },
    });

    if (!job) {
      throw new BadRequestException('Failed to create job');
    }

    return job;
  }

  async getAllJobs(query: any) {
    const { keyword, location, salary, jobType } = query;

    const salaryRange = salary?.split('-') ?? [];
    let jobs: any[];

    if (keyword || location || salary || jobType) {
      jobs = await this.prisma.job.findMany({
        where: {
          ...(keyword && {
            OR: [
              { title: { contains: keyword, mode: 'insensitive' } },
              { description: { contains: keyword, mode: 'insensitive' } },
            ],
          }),
          ...(location && {
            location: { contains: location, mode: 'insensitive' },
          }),
          ...(salaryRange.length === 2 && {
            salary: {
              gte: parseInt(salaryRange[0], 10),
              lte: parseInt(salaryRange[1], 10),
            },
          }),
          ...(jobType && {
            jobType: { equals: jobType },
          }),
        },
        orderBy: {
          createdAt: 'desc',
        },
        include: {
          company: true,
          // user: true,
        },
      });
    } else {
      jobs = await this.prisma.job.findMany({
        skip: 0,
        take: 6,
      });
    }

    if (!jobs || jobs.length === 0) {
      throw new NotFoundException('Job not found');
    }

    return jobs;
  }

  async singleJob(jobId: string) {
    const job = await this.prisma.job.findFirst({
      where: { id: jobId },
      include: {
        company: true,
      },
    });

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    return job;
  }

  async favoriteJob(jobId: string, userId: string) {
    const job = await this.prisma.favorite.findFirst({
      where: { jobId, userId },
    });

    if (job) {
      throw new BadRequestException('this job is already favorited');
    }

    const favorite = await this.prisma.favorite.create({
      data: {
        userId,
        jobId,
      },
    });
    if (!favorite) {
      throw new BadRequestException('Failed to favorite job');
    }

    return favorite;
  }

  async getfavoritesJob(userId: string) {
    const jobs = await this.prisma.favorite.findMany({
      where: { userId },
      include: {
        job: {
          include: {
            company: true,
          },
        },
      },
    });

    if (!jobs || jobs.length === 0) {
      throw new NotFoundException('No favorites found');
    }

    return jobs;
  }

    async getJobsByUserId(userId: string) {
        const jobs = await this.prisma.job.findMany({
        where: { createdById: userId },
        include: {
            company: true,
        },
        orderBy: {
            createdAt: 'desc',
        },
        });
    
        if (!jobs || jobs.length === 0) {
        throw new NotFoundException('No jobs found for this user');
        }
    
        return jobs;
    }
}

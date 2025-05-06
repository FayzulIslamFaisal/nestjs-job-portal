import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UpdateStatusDto } from './dto/application.dto';

@Injectable()
export class ApplicationService {
    constructor(private readonly prisma: PrismaService) { }

    async applyJob(userId: string, jobId: string) {
        if (!jobId) {
            throw new NotFoundException("Job Id Required")
        }
        const existApplicant = await this.prisma.application.findFirst({
            where: {
                jobId, applicantId: userId
            }
        })
        if (existApplicant) {
            throw new BadRequestException("You Have already Applied for this Job")
        }

        const job = await this.prisma.job.findUnique({
            where: {
                id: jobId
            }
        })

        if (!job) {
            throw new BadRequestException("Job Not Found")
        }

        const newApplication = await this.prisma.application.create({
            data: {
                jobId,
                applicantId: userId
            }
        })
        return newApplication

    }

    async getAppliedJob(userId: string) {
        const applicants = await this.prisma.application.findMany({
            where: { applicantId: userId },
            orderBy: {
                createdAt: "desc"
            },
            include: {
                job: { include: { company: true } }
            }
        })

        if (!applicants || applicants?.length === 0) {
            throw new NotFoundException();
        }
        return applicants;
    }

    async getApplicants(jobId: string) {
        const job = await this.prisma.job.findUnique({
            where: {
                id: jobId
            },
            include: {
                applications: {
                    orderBy: { createdAt: "desc" },
                    include: {
                        applicant: true
                    }
                }
            }
        });
        if (!job) {
            throw new NotFoundException();
        }
        return job;
    }

    async updatedStatus(id:string, updateStatusDto:UpdateStatusDto) {
        const {status} = updateStatusDto;
        const application = await this.prisma.application.findUnique({
            where: {
                id
            }
        });

        if (!application) {
            throw new NotFoundException();
        }
        const updateapplication = await this.prisma.application.update({
            where: {
                id
            },
            data: {
                status:status
            }
        });
        return updateapplication;
    }



}

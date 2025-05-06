import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JobService } from './job.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PostJobDto } from './dto/job.dto';
import { Request } from 'express';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async postJob(@Body() postJobDto: PostJobDto, @Req() req: any) {
    const userId = req.user.id;

    const job = await this.jobService.createJob(postJobDto, userId);

    return {
      statusCode: 201,
      status: 'success',
      message: 'Job created successfully',
      result: job,
    };
  }

  @Get('/all')
  async getAllJobs(@Query() query: string) {
    const jobs = await this.jobService.getAllJobs(query);

    return {
      statusCode: 200,
      status: 'success',
      message: 'Jobs fetched successfully',
      results: jobs,
    };
  }

  @Get('/single/:id')
  async getSingleJob(@Param('id') jobId: string) {
    const job = await this.jobService.singleJob(jobId);
    return {
      statusCode: 200,
      status: 'success',
      message: 'Job fetched successfully',
      result: job,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Post('/favorite/:id')
  async favoriteJobByUserId(@Param('id') jobId: string, @Req() req: any) {
    const userId = req.user.id;
    const job = await this.jobService.favoriteJob(jobId, userId);
    return {
      statusCode: 200,
      status: 'success',
      message: 'Job favorited successfully',
      result: job,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('/favorites')
  async getFavorites(@Req() req: any) {
    const userId = req.user.id;
    const jobs = await this.jobService.getfavoritesJob(userId);
    return {
      statusCode: 200,
      status: 'success',
      message: 'Favorites fetched successfully',
      results: jobs,
    };
  }

    @UseGuards(JwtAuthGuard)
    @Post("/admin")
    async getJobsByUserId(@Req() req: any) {
        const userId = req.user.id;
        const jobs = await this.jobService.getJobsByUserId(userId);
        return {
            statusCode: 200,
            status: "success",
            message: "Jobs fetched successfully",
            results: jobs,
        };
    }

}

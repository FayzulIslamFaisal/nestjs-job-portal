import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ApplicationService } from './application.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApplyJobDto, UpdateStatusDto } from './dto/application.dto';

@Controller('application')
export class ApplicationController {
    constructor(private readonly applicationService:ApplicationService){}

    @UseGuards(JwtAuthGuard)
    @Post(":id")
    async applyJob(@Req() req:any, @Param('id') jobId:string){
        const userId = req.user.id;
        const application = await this.applicationService.applyJob(userId, jobId);
        return {
            statusCode:201,
            success:true,
            message:"Job Application Succesfully!!",
            application
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAppliedJob(@Req() req:any){
        const userId = req.user.id;
        const applications = await this.applicationService.getAppliedJob(userId);
        return {
            statusCode:200,
            success:true,
            message:"Job Applications Fetched Succesfully!!",
            applications
        }
    }
    @Get(":id")
    async getApplicants(@Param("id") jobId: string) {
        const job = await this.applicationService.getApplicants(jobId);
        return {
            statusCode:200,
            success:true,
            message:"Job Applications Fetched Succesfully!!",
            result:job,
        }
    }

    @UseGuards(JwtAuthGuard)
    @Put("status-update/:id")
    async updatedStatus(@Param("id") id: string, @Body() updateStatusDto:UpdateStatusDto) {
        const updateApplicant = await this.applicationService.updatedStatus(id, updateStatusDto);
        return {
            statusCode:200,
            success:true,
            message:"Status Updated Succesfully!!",
            result:updateApplicant,
        }
    }


}

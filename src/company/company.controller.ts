import { CompanyService } from './company.service';
import { Controller, Post, Body, UseGuards, Req, Get, Param, Delete } from '@nestjs/common';
import { RegisterCompanyDto } from './dto/company.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('company')
export class CompanyController {
    constructor( private readonly companyService: CompanyService) {}
    @UseGuards(JwtAuthGuard)
    @Post("/register")
    async registerCompany(@Req() req:any, @Body() registerCompanyDto: RegisterCompanyDto) {
        const userId = req.user.id;
        const result= await this.companyService.register(userId, registerCompanyDto);
        return {
            success: true,
            message: "Company registered successfully",
            data: result,
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get("/allCompany")
    async getAllCompany(@Req() req:any) {
        const userId =req.user.id;
        const result= await this.companyService.getCompany(userId);
        return {
            statusCode: 200,
            success: true,
            message: "Company retrieved successfully",
            total: result.count,
            results: result.data,
        }
    }

    @UseGuards(JwtAuthGuard)
    @Get("/:id")
    async getCompanyById(@Param('id') companyId: string) {
        const result = await this.companyService.getCompanyById(companyId);
        return {
            statusCode: 200,
            success: true,
            message: "Company retrieved successfully",
            result: result,
        };
    }

    @UseGuards(JwtAuthGuard)
    @Delete("/delete/:id")
    async deleteCompany(@Param('id') companyId: string) {
        const result = await this.companyService.deleteCompany(companyId);
        return {
            statusCode: 200,
            success: true,
            message: "Company deleted successfully",
            result: result,
        };
    }
}

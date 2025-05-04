import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { RegisterCompanyDto } from './dto/company.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CompanyService {
    constructor(private readonly prisma:PrismaService) {}
    async register(userId:string,registerCompanyDto:RegisterCompanyDto) {
        const { name, description, website, location, logo } = registerCompanyDto;

        const existingCompany = await this.prisma.company.findFirst({
            where: { userId }
        });

        if (!existingCompany) {
            throw new BadRequestException("Company can only be registered once");
        }

        const newCompany = await this.prisma.company.create({
            data: {
                name, description, website, location, logo, userId,
            },
            select: { 
                id: true,
                name: true,
                description: true,
                website: true,
                location: true,
                logo: true,
            },
        });

        return newCompany;
    }

    async getCompany(userId:string) {
        const companies = await this.prisma.company.findMany({
            where: { userId },
            select: {
                id: true,
                name: true,
                description: true,
                website: true,
                location: true,
                logo: true,
            },
        });

        if (!companies || companies.length === 0) {
            throw new NotFoundException("Company not found");
        }

        return {
            data:companies,
            count: companies.length,
        };
    }

    async getCompanyById(companyId:string) {
        const company = await this.prisma.company.findFirst({
            where: { id: companyId },
            select: {
                id: true,
                name: true,
                description: true,  
                website: true,
                location: true,
                logo: true,
            },
        });

        if (!company) {
            throw new NotFoundException("Company not found");
        }

        return company;
    }

    async deleteCompany(companyId:string) {
        const company = await this.prisma.company.findFirst({
            where: { id: companyId },
        });

        if (!company) {
            throw new NotFoundException("Company not found");
        }

        const deleteCompany = await this.prisma.company.delete({
            where: { id: companyId },
            select: {
                id: true,
                name: true,
                description: true,
                website: true,
                location: true,
                logo: true,
            },
        });
        return deleteCompany;
    }
     
}

import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PostJobDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsArray()
  requirements: string[];

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @IsNotEmpty()
  @IsString()
  jobType: string;

  @IsNotEmpty()
  @IsString()
  experienceLevel: string;

  @IsNotEmpty()
  @IsNumber()
  positionType: number;

  @IsNotEmpty()
  @IsString()
  companyId: string;

  // @IsNotEmpty()
  // @IsString()
  // createdById: string;
}

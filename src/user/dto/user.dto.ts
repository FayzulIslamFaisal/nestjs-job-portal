import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Please provide a valid email address' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6, { message: 'Password is too short. Minimum length is 6 characters.' })
  password: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  profileBio?: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  profileSkills: string[];

  @IsOptional()
  @IsUrl()
  profileResume?: string;

  @IsOptional()
  @IsString()
  profileResumeOriginalName?: string;

  @IsOptional()
  @IsString()
  profilePhoto?: string;

  @IsOptional()
  @IsString()
  role?: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  profileBio?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  profileSkills: string[];

  @IsOptional()
  @IsUrl()
  profileResume?: string;

  @IsOptional()
  @IsString()
  profileResumeOriginalName?: string;

  @IsOptional()
  @IsString()
  profilePhoto?: string;

  @IsOptional()
  @IsString()
  role?: string;
}

export class UserResponseDto {
  id: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  profileBio?: string;
  profileSkills: string[];
  profileResume?: string;
  profileResumeOriginalName?: string;
  profileCompanyId?: string;
  profilePhoto?: string;
  role?: string;
  createdAt: Date;
  updatedAt: Date;
}

import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  async register(registerUserDto: RegisterUserDto) {
    const {
      email,
      password,
      fullName,
      phoneNumber,
      profileBio,
      profileSkills,
      profilePhoto,
      profileResume,
      profileResumeOriginalName,
      role,
    } = registerUserDto;
    if (!email || !password || !fullName || !phoneNumber) {
      throw new BadRequestException('All fields are required');
    }
    // Check if the user already exists
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    console.log(existingUser);

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    // Create a new user
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password,
        fullName,
        phoneNumber,
        profileBio,
        profileSkills,
        profilePhoto,
        profileResume,
        profileResumeOriginalName,
      },
    });

    return newUser;
  }
}

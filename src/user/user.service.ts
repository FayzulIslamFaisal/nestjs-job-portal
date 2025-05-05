import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
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

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        phoneNumber,
        profileBio,
        profileSkills,
        profilePhoto,
        profileResume,
        profileResumeOriginalName,
      },
      select: {
        id: true,
        email: true,
        password: true,
        fullName: true,
        phoneNumber: true,
        profileBio: true,
        profileSkills: true,
        profilePhoto: true,
      },
    });

    if (!newUser) {
      throw new BadRequestException('Failed to create user');
    }
    return {
      success: true,
      message: 'User registered successfully',
      user: newUser,
    };
  }

  async login(body: any) {
    const { email, password, role } = body;

    if (!email || !password || !role) {
      throw new BadRequestException('All fields are required');
    }

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        fullName: true,
        phoneNumber: true,
        role: true,
        password: true,
      },
    });

    if (!existingUser) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException('Invalid password');
    }

    if (role !== existingUser.role) {
      throw new BadRequestException('Invalid role');
    }

    const token = this.jwtService.sign(
      { id: existingUser.id },
      { secret: process.env.JWT_SECRET_KEY, expiresIn: '1d' },
    );

    const { password: _, ...userWithoutPassword } = existingUser;

    return {
      token,
      user: userWithoutPassword,
    };
  }

  async logout(): Promise<{ message: string; success: boolean }> {
    return {
      message: 'Logout successful',
      success: true,
    };
  }

  async updateProfile(userId: string, updateUserDto: UpdateUserDto) {
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
    } = updateUserDto;

    const updateData: any = {
      fullName,
      phoneNumber,
      profileBio,
      profileSkills,
      profilePhoto,
      profileResume,
      profileResumeOriginalName,
      role,
    };

    // Check for unique email
    if (email) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email },
      });
      if (existingUser && existingUser.id !== userId) {
        throw new BadRequestException('Email is already taken');
      }
      updateData.email = email;
    }

    // Hash password if provided
    if (password) {
      const salt = await bcrypt.genSalt();
      updateData.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        email: true,
        fullName: true,
        phoneNumber: true,
        profileBio: true,
        profileSkills: true,
        profilePhoto: true,
      },
    });
    return updatedUser;
  }
}

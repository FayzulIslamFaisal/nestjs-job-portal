import { Response } from 'express';
import { RegisterUserDto, UpdateUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { BadRequestException, Body, Controller, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    return await this.userService.register(registerUserDto);
  }
  @Post('/login')
  async loginUser(@Body() body, @Res({ passthrough: true }) res: Response) {
    const result = await this.userService.login(body);

    res.cookie('token', result.token, {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // ১ দিন
      sameSite: "strict",
    });

    return {
      statusCode: 200,
      success: true,
      message: 'Login successful',
      token: result.token,
      user: result.user,
      
    };
  }

  @Get('/logout')
  async userLogout(@Res({ passthrough: true }) res: Response) {
    try {
      const result = await this.userService.logout();
      res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      });
      return {
        statusCode: 200,
        result,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        success: false,
        message: 'Logout failed',
      };
      
    }
  }

  @UseGuards(JwtAuthGuard)
  @Put("/update")
  async updateUser(@Body() updateUserDto: UpdateUserDto, @Req() req: any) {
    try {
      const userId = req.user.id;
      const updatedUser = await this.userService.updateProfile(userId, updateUserDto);
      return {
        statusCode: 200,
        success: true,
        message: 'User updated successfully',
        user: updatedUser,
      };
    } catch (error) {
      console.error(error);
      throw new BadRequestException('User update failed');
    }
  }

}

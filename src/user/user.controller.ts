import { RegisterUserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    this.userService.register(registerUserDto);
  }
}

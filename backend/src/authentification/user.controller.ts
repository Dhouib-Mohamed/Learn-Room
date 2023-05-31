import {Body, Controller, Post} from '@nestjs/common';
import {SignInDto} from "./dto/sign-in.dto";
import {SignUpDto} from "./dto/sign-up.dto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Post("signin")
  signin(@Body() SignInDto: SignInDto) {
    return this.userService.signIn(SignInDto);
  }

  @Post("signup")
  signup(@Body() SignUpDto: SignUpDto) {
    return this.userService.signup(SignUpDto);
  }
}

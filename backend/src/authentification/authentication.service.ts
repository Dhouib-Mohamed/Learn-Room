import {Injectable, NotFoundException} from '@nestjs/common';
import {SignUpDto} from "./dto/sign-up.dto";
import {SignInDto} from "./dto/sign-in.dto";

@Injectable()
export class AuthenticationService<User> {
  constructor(
      private userRepository,
  ) {
  }

  async signIn(SignInDto: SignInDto) {
    const user = await this.userRepository.findOne({where: {email: SignInDto.email}})
    if (!user) {
      throw new NotFoundException("Email Not Found")
    }
    if (user.password !== SignInDto.password) {
      throw new NotFoundException("Password Not Found")
    }
    user.password = user.password.length
    return user
  }

  signup(SignUpDto: SignUpDto) {
    const user = this.userRepository.save(SignUpDto)
    if (!user) {
      throw new NotFoundException()
    }
    user.password = user.password.length
    return user
  }

}

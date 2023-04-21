import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserFacade {
  constructor(private readonly userService: UserService) {}

  findUser(id: string) {
    return this.userService.findUserById(id);
  }
}

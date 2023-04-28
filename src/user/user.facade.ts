import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';

@Injectable()
export class UserFacade {
  constructor(private readonly userService: UserService) {}

  findUserById(id: string) {
    return this.userService.findUserById(id);
  }

  findUser(query: object) {
    return this.userService.findUser(query);
  }
}

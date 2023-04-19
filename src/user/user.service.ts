import { Injectable } from '@nestjs/common';
import { IUser } from './interface/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async findAll(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async findUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }
}

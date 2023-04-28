import { Injectable } from '@nestjs/common';
import { IUser } from './interface/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async findAll(): Promise<IUser[]> {
    return this.userModel.find();
  }

  async findUser(query: object): Promise<IUser> {
    return this.userModel.findOne(query);
  }

  async findUserById(id: string): Promise<IUser> {
    return this.userModel.findById(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}

import { Injectable } from '@nestjs/common';
import { IPost } from './interface/post.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UserFacade } from '@user/user.facade';

@Injectable()
export class PostService {
  constructor(
    @InjectModel('Post') private postModel: Model<IPost>,
    private readonly userFacade: UserFacade,
  ) {}

  async findAll(): Promise<IPost[]> {
    return this.postModel.find();
  }

  async findPostById(id: string): Promise<IPost> {
    return this.postModel.findById(id);
  }

  async createPost(createPostDto: CreatePostDto): Promise<IPost> {
    const { message, authorId } = createPostDto;

    const author = await this.userFacade.findUser(authorId);
    const newPost = new this.postModel({ message, author });

    return newPost.save();
  }

  async deletePost(id: string): Promise<IPost> {
    return this.postModel.findByIdAndDelete(id);
  }
}

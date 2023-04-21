import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComment } from './interface/comment.interface';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(@InjectModel('Comment') private commentModel: Model<IComment>) {}

  findAll() {
    return this.commentModel.find();
  }

  findCommentById(id: string) {
    return this.commentModel.findById(id);
  }

  createComment(createCommentDto: CreateCommentDto) {
    return this.commentModel.create(createCommentDto);
  }

  deleteComment(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComment } from './interface/comment.interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostFacade } from 'src/post/post.facade';
import { UserFacade } from 'src/user/user.facade';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private commentModel: Model<IComment>,
    private readonly userFacade: UserFacade,
    private readonly postFacade: PostFacade,
  ) {}

  findAll() {
    return this.commentModel.find();
  }

  findCommentById(id: string) {
    return this.commentModel.findById(id);
  }

  async createComment(createCommentDto: CreateCommentDto) {
    const { authorId, postId, message } = createCommentDto;

    const author = await this.userFacade.findUser(authorId);
    const post = await this.postFacade.findPost(postId);

    const comment = new this.commentModel({
      message,
      post,
      author,
    });
    return comment.save();
  }

  deleteComment(id: string) {
    return this.commentModel.findByIdAndDelete(id);
  }
}

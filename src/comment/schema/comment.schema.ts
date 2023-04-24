import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Post } from '@post/schema/post.schema';
import { User } from '@user/schema/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Comment {
  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  post: Post;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@user/schema/user.schema';
import mongoose from 'mongoose';

@Schema({
  timestamps: true,
})
export class Post {
  @Prop()
  message: string;

  @Prop()
  likes: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;
}
export const PostSchema = SchemaFactory.createForClass(Post);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/schema/user.schema';

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

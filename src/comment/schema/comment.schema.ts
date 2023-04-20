import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Comment {
  @Prop()
  message: string;

  @Prop()
  post: string; //TODO: relationship

  @Prop()
  authorId: string;

  @Prop()
  publishDate: Date;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Post {
  @Prop()
  message: string;

  @Prop([String]) //TODO: Later change to relation
  comments: string[];

  @Prop()
  authorId: string;

  @Prop()
  publishDate: Date;
}
export const PostSchema = SchemaFactory.createForClass(Post);

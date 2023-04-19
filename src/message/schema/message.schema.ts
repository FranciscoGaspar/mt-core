import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Message {
  @Prop()
  message: string;

  @Prop([String]) //TODO: Later change to relation
  comments: string[];

  @Prop()
  authorId: string;

  @Prop()
  publishDate: Date;
}
export const MessageSchema = SchemaFactory.createForClass(Message);

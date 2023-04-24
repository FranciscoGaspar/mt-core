import { Post } from '@post/schema/post.schema';
import Document from 'mongoose';

export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly country: string;
  readonly role: string;
  readonly posts: Post[];
}

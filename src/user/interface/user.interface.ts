import Document from 'mongoose';
import { Post } from 'src/post/schema/post.schema';

export interface IUser extends Document {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly country: string;
  readonly role: string;
  readonly posts: Post[];
}

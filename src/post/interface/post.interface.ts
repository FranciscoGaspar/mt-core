import { User } from '@user/schema/user.schema';

export interface IPost extends Document {
  readonly message: string;
  readonly likes: number;
  readonly author: User;
  readonly comments: Comment[];
}

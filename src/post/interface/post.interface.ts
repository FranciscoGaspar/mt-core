import { Comment } from 'src/comment/schema/comment.schema';
import { User } from 'src/user/schema/user.schema';

export interface IPost extends Document {
  readonly message: string;
  readonly likes: number;
  readonly publishDate: Date;
  readonly author: User;
  readonly comments: Comment[];
}

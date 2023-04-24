import { Post } from 'src/post/schema/post.schema';
import { User } from 'src/user/schema/user.schema';

export interface IComment extends Document {
  readonly message: string;
  readonly post: Post;
  readonly author: User;
}

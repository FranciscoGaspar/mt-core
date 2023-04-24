import { Post } from '@post/schema/post.schema';
import { User } from '@user/schema/user.schema';

export interface IComment extends Document {
  readonly message: string;
  readonly post: Post;
  readonly author: User;
}

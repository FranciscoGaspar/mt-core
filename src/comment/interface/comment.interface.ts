export interface IComment extends Document {
  readonly message: string;
  readonly post: string; //TODO: relations
  readonly authorId: string;
  readonly publishDate: Date;
}

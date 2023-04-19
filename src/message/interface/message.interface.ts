export interface IMessage extends Document {
  readonly message: string;
  readonly comments: string[];
  readonly authorId: string;
  readonly publishDate: Date;
}

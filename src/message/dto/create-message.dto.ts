import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  readonly message: string;

  @IsNotEmpty()
  @IsString()
  readonly authorId: string;
}

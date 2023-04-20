import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: PostSchema }]),
  ],
  providers: [PostService],
  controllers: [PostController],
})
export class MessageModule {}

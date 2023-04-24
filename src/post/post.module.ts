import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '@user/user.module';
import { PostController } from './post.controller';
import { PostFacade } from './post.facade';
import { PostService } from './post.service';
import { PostSchema } from './schema/post.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
    UserModule,
  ],
  providers: [PostService, PostFacade],
  controllers: [PostController],
  exports: [PostFacade],
})
export class PostModule {}

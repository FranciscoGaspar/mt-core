import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schema/post.schema';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { UserModule } from 'src/user/user.module';
import { PostFacade } from './post.facade';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]), UserModule],
  providers: [PostService, PostFacade],
  controllers: [PostController],
  exports: [PostFacade]
})
export class PostModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', { dbName: 'nest' }),
    PostModule,
    UserModule,
    CommentModule,
    AuthModule,
  ],
})
export class AppModule {}

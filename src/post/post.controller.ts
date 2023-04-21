import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    async findAll() {
        return this.postService.findAll();
    }

    @Get('/:id')
    async findPostById(@Param('id') id: string) {
        return this.postService.findPostById(id);
    }

    @Post()
    async createPost(@Body() createPostDto: CreatePostDto) {
        return await this.postService.createPost(createPostDto);
    }

    @Delete('/:id')
    async deletePost(@Param('id') id: string) {
        return await this.postService.deletePost(id);
    }
}

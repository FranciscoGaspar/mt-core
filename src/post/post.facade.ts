import { Injectable } from "@nestjs/common";
import { PostService } from "./post.service";

@Injectable()
export class PostFacade {
    constructor(private readonly  postService: PostService) {}

    findPost(id: string) {
        return this.postService.findPostById(id);
    }
}
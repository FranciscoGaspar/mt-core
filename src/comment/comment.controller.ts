import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('comment')
@ApiTags('Comment')
export class CommentController {}

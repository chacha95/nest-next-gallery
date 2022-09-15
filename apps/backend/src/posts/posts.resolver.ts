import { Resolver, Query } from '@nestjs/graphql';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query('posts')
  async findAll() {
    return this.postsService.findAll();
  }
}

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatePostInput } from './dto/create-post.input';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation('createPost')
  async create(@Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postsService.create(createPostInput);
  }

  @Query('posts')
  async findAll() {
    return this.postsService.findAll();
  }
}

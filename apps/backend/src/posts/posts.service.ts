import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { PostEntity } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
  ) {}

  async create(createPostInput: CreatePostInput) {
    const post = this.postRepository.create({
      ...createPostInput,
    });
    return await this.postRepository.save(post);
  }

  async findAll() {
    return await this.postRepository.find();
  }
}

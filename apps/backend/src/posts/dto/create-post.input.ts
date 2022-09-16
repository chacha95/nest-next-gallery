import { IsString } from 'class-validator';

export class CreatePostInput {
  @IsString()
  readonly url: string;

  @IsString()
  readonly author: string;
}

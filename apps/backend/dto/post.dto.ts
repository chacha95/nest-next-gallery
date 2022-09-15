import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class PostDto {
  @IsString()
  @ApiProperty({ description: 'post name' })
  readonly url: string;

  @IsString()
  @ApiProperty({ description: 'post name' })
  readonly author: string;
}

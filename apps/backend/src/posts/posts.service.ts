import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PostDto } from '../../dto/post.dto';

@Injectable()
export class PostsService {
  async findAll(): Promise<PostDto[]> {
    const posts: PostDto[] = [
      plainToInstance(PostDto, {
        id: '1',
        url: 'https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg',
        author: 'jhcha',
      }),
      plainToInstance(PostDto, {
        id: '2',
        url: 'https://nikonrumors.com/wp-content/uploads/2014/03/Nikon-1-V3-sample-photo.jpg',
        author: 'jhcha',
      }),
      plainToInstance(PostDto, {
        id: '3',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKsbWF957nFBequN7kIiv4igICd5bNHQiqg&usqp=CAU',
        author: 'jhcha',
      }),
      plainToInstance(PostDto, {
        id: '4',
        url: 'http://www.bbangyanews.com/news/thumbnail/201912/255_512_4029_v150.jpg',
        author: 'jhcha',
      }),
    ];
    return posts;
  }
}

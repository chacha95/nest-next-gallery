import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ulid } from 'ulid';

@Entity({ name: 'posts' })
export class PostEntity {
  @PrimaryColumn({ type: 'varchar', nullable: false })
  id: string = ulid();

  @Column({ type: 'text', nullable: true })
  url: string;

  @Column({ type: 'text', nullable: true })
  author: string;
}

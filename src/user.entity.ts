import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  @Index()
  id: number;
  @Column({ default: 'default name' })
  userName: string;
  @Column({ default: 'password' })
  password: string;
}

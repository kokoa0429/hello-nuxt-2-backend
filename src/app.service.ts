import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  addUser(userName: string, password: string): void {
    this.userRepository.insert({ userName, password });
  }

  getUser(id: string): Promise<User | null> {
    return this.userRepository.findOne({ id: Number(id) });
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/addUser')
  addUser(@Body() b): void {
    return this.appService.addUser(b.userName, b.password);
  }

  @Get('/user/:id')
  async getUserInfo(@Param() p): Promise<User | string> {
    const user = await this.appService.getUser(p.id);
    return user ? user : 'user not found';
  }
}

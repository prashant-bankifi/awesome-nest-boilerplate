import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PageDto } from '../../common/dto/page.dto';
import { RoleType } from '../../constants';
import { ApiPageResponse, Auth } from '../../decorators';

const delay = (m: number) => new Promise((resolve) => setTimeout(resolve, m));

@Controller('users')
@ApiTags('users')
export class UserController {
  @Get('admin')
  @HttpCode(HttpStatus.OK)
  async admin() {
    await delay(1);

    return {
      text: `Prashant`,
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiPageResponse({
    description: 'Get users list',
    type: PageDto,
  })
  async getUsers(): Promise<string> {
    await delay(1);

    return 'string';
  }

  @Get(':id')
  @Auth([RoleType.USER])
  @HttpCode(HttpStatus.OK)
  async getUser(): Promise<string> {
    await delay(1);

    return 'string1';
  }
}

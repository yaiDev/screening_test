import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { Members } from './schemas/member.schema';
import { CurrentUser } from '../auth/decorator/current-user.decorator';
import { User } from '../auth/schemas/user.schema';
import { MemberDto } from './dto/member.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberSrv: MemberService) {}

  @Get()
  async GetMembers(): Promise<Members[]> {
    return this.memberSrv.getMembers();
  }

  @Get('membercard')
  async GetMemberCard(@CurrentUser() user: User): Promise<Members> {
    return this.memberSrv.getMemberByUser(user);
  }

  @Post()
  async CreateMember(@Body() memberDto: MemberDto): Promise<Members> {
    return this.memberSrv.createMember(memberDto);
  }
}

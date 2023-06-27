import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Members } from './schemas/member.schema';
import { Model } from 'mongoose';
import { User } from '../auth/schemas/user.schema';
import { MemberDto } from './dto/member.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(Members.name) private readonly memberModel: Model<Members>,
  ) {}

  async getMembers(): Promise<Members[]> {
    return await this.memberModel.find({});
  }

  async getMemberByUser(user: User): Promise<Members> {
    const member = await this.memberModel.findOne({ owner: user });
    return member;
  }

  async createMember(memberDto: MemberDto): Promise<Members> {
    return await this.memberModel.create(memberDto);
  }
}

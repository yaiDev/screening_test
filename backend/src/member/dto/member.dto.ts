import { IsString } from 'class-validator';

export class MemberDto {
  @IsString()
  memberCard: string;

  @IsString()
  owner: string;
}

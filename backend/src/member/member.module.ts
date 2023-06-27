import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MemberSchema } from './schemas/member.schema';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'Members', schema: MemberSchema }]),
  ],
  controllers: [MemberController],
  providers: [MemberService],
  exports: [MemberService],
})
export class MemberModule {}

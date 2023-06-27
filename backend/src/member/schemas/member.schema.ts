import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../auth/schemas/user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Members extends Document {
  @Prop()
  memberCard: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;
}

export const MemberSchema = SchemaFactory.createForClass(Members);

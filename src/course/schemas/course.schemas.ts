
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/user/user.types';

export type CourseDocument = HydratedDocument<Course>;

@Schema()
export class Course{
  @Prop({required:true})
  name: string;

  @Prop({required:true})
  description: string;

  @Prop({required:true })
  level: string;

  @Prop({required:true})
  price: number;

  // @Prop({default:Role.Student})
  // role?:string
}

export const CourseSchema = SchemaFactory.createForClass(Course);

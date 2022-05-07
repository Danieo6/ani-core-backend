import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenreDocument = Genre & Document;

@Schema({ collection: 'Genres' })
export class Genre {
  @Prop()
  _id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  slug: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);

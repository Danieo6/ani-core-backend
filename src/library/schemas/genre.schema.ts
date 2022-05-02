import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GenreDocument = Genre & Document;

@Schema({ collection: 'Genres' })
export class Genre {
  @Prop({ required: true })
  name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);

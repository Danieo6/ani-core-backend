import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Genre } from './genre.schema';

export type SeriesDocument = Series & Document;

@Schema({ collection: 'Series' })
export class Series {
  @Prop()
  _id: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  releaseYear: number;

  @Prop()
  releaseSeason: string;

  @Prop([String])
  genre: string[];

  @Prop([String])
  otherNames: string[];

  @Prop()
  coverImage: string;
}

export const SeriesSchema = SchemaFactory.createForClass(Series);

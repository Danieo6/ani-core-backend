import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EpisodeDocument = Episode & Document;

@Schema({ collection: 'Episodes' })
export class Episode {
  @Prop({ required: true })
  number: number;

  @Prop([String])
  sources: string[];
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);

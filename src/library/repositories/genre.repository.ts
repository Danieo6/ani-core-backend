import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Genre as GenreModel, GenreDocument } from '../schemas/genre.schema';
import { Genre } from '../entities/genre.entity';
import { GenreFactory } from '../factories/genre.factory';

@Injectable()
export class GenreRepository {
  constructor(
    @InjectModel(GenreModel.name)
    private readonly genreModel: Model<GenreDocument>,
    private readonly genreFactory: GenreFactory,
  ) {}

  async persist(genre: Genre): Promise<Genre> {
    const { slug, ...data } = genre.snapshot();

    const result = await this.genreModel.findOne({ slug });

    if (!result) {
      const genreEntity = new this.genreModel({ slug, ...data });
      await genreEntity.save();
      return this.genreFactory.fromDocument(genreEntity);
    }

    return this.genreFactory.fromDocument(result);
  }
}

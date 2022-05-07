import { Injectable } from '@nestjs/common';
import { Genre } from '../entities/genre.entity';
import { GenreFactory } from '../factories/genre.factory';
import { GenreRepository } from '../repositories/genre.repository';

@Injectable()
export class GenreService {
  constructor(
    private readonly genreFactory: GenreFactory,
    private readonly genreRepository: GenreRepository,
  ) {}

  async createFromList(list: string[]): Promise<Genre[]> {
    const genreList = this.genreFactory.fromList(list);
    return Promise.all(
      genreList.map(async (genre) => await this.genreRepository.persist(genre)),
    );
  }
}

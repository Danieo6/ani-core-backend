import { Injectable } from '@nestjs/common';
import { Genre } from '../entities/genre.entity';
import { GenreDocument } from '../schemas/genre.schema';

@Injectable()
export class GenreFactory {
  fromList(list: string[]): Genre[] {
    return list.map((name) => {
      return new Genre({ name, slug: this.generateSlug(name) });
    });
  }

  fromDocument(document: GenreDocument): Genre {
    return new Genre(document);
  }

  private generateSlug(name: string): string {
    //     .-""-.
    //     ;  .-. ;      oo
    // _.('.__.' :-..__//
    // i".._'-.__.'_.._.-"
    // slug slug slug
    return name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-');
  }
}

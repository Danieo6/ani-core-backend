import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';
import { Genre } from './genre.entity';

type SeriesProps = {
  _id?: string;
  title: string;
  description: string;
  releaseYear: number;
  releaseSeason: string;
  // genre: Genre[];
  otherNames: string[];
};

export class Series extends AggregateRoot {
  private readonly id: string;
  private readonly title: string;
  private readonly description: string;
  private readonly releaseYear: number;
  private readonly releaseSeason: string;
  // private readonly genre: Genre[];
  private readonly otherNames: string[];

  constructor(props: SeriesProps) {
    super();

    this.id = props._id || uuidv4();
    this.title = props.title;
    this.description = props.description;
    this.releaseYear = props.releaseYear;
    this.releaseSeason = props.releaseSeason;
    // this.genre = props.genre;
    this.otherNames = props.otherNames;
  }

  snapshot(): SeriesProps {
    return {
      _id: this.id,
      title: this.title,
      description: this.description,
      releaseYear: this.releaseYear,
      releaseSeason: this.releaseSeason,
      otherNames: this.otherNames,
    };
  }
}

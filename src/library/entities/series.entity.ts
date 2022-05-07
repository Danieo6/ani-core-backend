import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

type SeriesProps = {
  _id?: string;
  title: string;
  description: string;
  releaseYear: number;
  releaseSeason: string;
  genre: string[];
  otherNames: string[];
  coverImage: string;
};

export class Series extends AggregateRoot {
  private readonly id: string;
  private readonly title: string;
  private readonly description: string;
  private readonly releaseYear: number;
  private readonly releaseSeason: string;
  private readonly genre: string[];
  private readonly otherNames: string[];
  private readonly coverImage: string;

  constructor(props: SeriesProps) {
    super();

    this.id = props._id || uuidv4();
    this.title = props.title;
    this.description = props.description;
    this.releaseYear = props.releaseYear;
    this.releaseSeason = props.releaseSeason;
    this.genre = props.genre;
    this.otherNames = props.otherNames;
    this.coverImage = props.coverImage;
  }

  snapshot(): SeriesProps {
    return {
      _id: this.id,
      title: this.title,
      description: this.description,
      releaseYear: this.releaseYear,
      releaseSeason: this.releaseSeason,
      genre: this.genre,
      otherNames: this.otherNames,
      coverImage: this.coverImage,
    };
  }
}

import { AggregateRoot } from '@nestjs/cqrs';
import { v4 as uuidv4 } from 'uuid';

type GenreProps = {
  _id?: string;
  name: string;
  slug: string;
};

export class Genre extends AggregateRoot {
  private readonly id: string;
  private readonly name: string;
  private readonly slug: string;

  constructor(props: GenreProps) {
    super();

    this.id = props._id || uuidv4();
    this.name = props.name;
    this.slug = props.slug;
  }

  snapshot() {
    return {
      _id: this.id,
      name: this.name,
      slug: this.slug,
    };
  }
}

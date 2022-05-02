import { AggregateRoot } from '@nestjs/cqrs';

export class Genre extends AggregateRoot {
  constructor(private readonly name: string) {
    super();
  }
}

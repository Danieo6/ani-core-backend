import { AggregateRoot } from '@nestjs/cqrs';

export class Episode extends AggregateRoot {
  constructor(
    private readonly _id: string,
    private readonly number: number,
    private readonly sources: string[],
  ) {
    super();
  }
}

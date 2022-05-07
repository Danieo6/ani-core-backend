import { Series } from 'src/library/entities/series.entity';

export class SeriesCreatedEvent {
  constructor(public readonly series: Series) {}
}

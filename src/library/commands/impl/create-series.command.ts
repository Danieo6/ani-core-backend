import { CreateSeriesDto } from 'src/library/dtos/create-series.dto';

export class CreateSeriesCommand {
  constructor(public readonly createSeriesDto: CreateSeriesDto) {}
}

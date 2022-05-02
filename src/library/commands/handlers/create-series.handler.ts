import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SeriesFactory } from 'src/library/factories/series.factory';
import { SeriesRepository } from 'src/library/repositories/series.repository';
import { CreateSeriesCommand } from '../impl/create-series.command';

@CommandHandler(CreateSeriesCommand)
export class CreateSeriesHandler
  implements ICommandHandler<CreateSeriesCommand>
{
  constructor(
    private readonly seriesRepository: SeriesRepository,
    private readonly seriesFactory: SeriesFactory,
  ) {}

  async execute(command: CreateSeriesCommand): Promise<any> {
    const series = this.seriesFactory.fromDto(command.createSeriesDto);
    await this.seriesRepository.persist(series);
  }
}

import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { SeriesCreatedEvent } from 'src/library/events/impl/series-created.event';
import { SeriesFactory } from 'src/library/factories/series.factory';
import { SeriesRepository } from 'src/library/repositories/series.repository';
import { GenreService } from 'src/library/services/genre.service';
import { CreateSeriesCommand } from '../impl/create-series.command';

@CommandHandler(CreateSeriesCommand)
export class CreateSeriesHandler
  implements ICommandHandler<CreateSeriesCommand>
{
  constructor(
    private readonly seriesRepository: SeriesRepository,
    private readonly seriesFactory: SeriesFactory,
    private readonly genreService: GenreService,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateSeriesCommand): Promise<any> {
    const genreList = await this.genreService.createFromList(
      command.createSeriesDto.genre,
    );

    command.createSeriesDto.genre = genreList.map(
      (genre) => genre.snapshot()._id,
    );

    const series = this.seriesFactory.fromDto(command.createSeriesDto);
    await this.seriesRepository.persist(series);

    this.eventBus.publish(new SeriesCreatedEvent(series));
  }
}

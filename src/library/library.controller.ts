import { Controller, Get } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateSeriesCommand } from './commands/impl/create-series.command';

@Controller('library')
export class LibraryController {
  constructor(private readonly commandBus: CommandBus) {}

  @Get()
  async test() {
    return this.commandBus.execute(
      new CreateSeriesCommand({
        title: 'Naruto3',
        description: 'testowy opis',
        releaseYear: 2022,
        releaseSeason: 'spring',
        // genre: [],
        otherNames: [],
      }),
    );
  }
}

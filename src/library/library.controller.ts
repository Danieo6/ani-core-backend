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
        title: 'Steins;Gate',
        description:
          'The story of Steins;Gate takes place in Akihabara and is about a group of friends who have managed to customize their microwave into a device that can send text messages to the past. As they perform different experiments, an organization named SERN who has been doing their own research on time travel tracks them down and now the characters have to find a way to avoid being captured by them.',
        releaseYear: 2011,
        releaseSeason: 'n/a',
        genre: ['Sci-Fi', 'Thriller'],
        otherNames: ['シュタインズ・ゲート'],
        coverImage: 'https://gogocdn.net/images/anime/S/Steins-Gate.jpg',
      }),
    );
  }
}

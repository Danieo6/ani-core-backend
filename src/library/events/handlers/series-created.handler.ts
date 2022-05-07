import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { SeriesCreatedEvent } from '../impl/series-created.event';

@EventsHandler(SeriesCreatedEvent)
export class SeriesCreatedHandler implements IEventHandler<SeriesCreatedEvent> {
  handle(event: SeriesCreatedEvent) {
    console.dir(`New series created: ${event.series.snapshot().title}`);
  }
}

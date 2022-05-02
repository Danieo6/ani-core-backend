import { Injectable } from '@nestjs/common';
import { CreateSeriesDto } from '../dtos/create-series.dto';
import { Series } from '../entities/series.entity';
import { SeriesDocument } from '../schemas/series.schema';

@Injectable()
export class SeriesFactory {
  fromDocument(document: SeriesDocument): Series {
    return new Series(document.toObject());
  }

  fromDto(dto: CreateSeriesDto): Series {
    return new Series(dto);
  }
}

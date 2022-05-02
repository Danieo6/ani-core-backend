import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Series as SeriesModel,
  SeriesDocument,
} from '../schemas/series.schema';
import { Series } from '../entities/series.entity';
import { SeriesFactory } from '../factories/series.factory';

@Injectable()
export class SeriesRepository {
  constructor(
    @InjectModel(SeriesModel.name)
    private readonly seriesModel: Model<SeriesDocument>,
    private readonly seriesFactory: SeriesFactory,
  ) {}

  async findOneById(id: string): Promise<Series> {
    const foundSeries = await this.seriesModel.findById(id).exec();
    return this.seriesFactory.fromDocument(foundSeries);
  }

  async persist(series: Series): Promise<void> {
    const { _id, ...data } = series.snapshot();
    await this.seriesModel
      .updateOne({ _id }, data, {
        upsert: true,
      })
      .exec();
  }
}

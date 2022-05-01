import * as mongoose from 'mongoose';
import Config from '../../config';

export const DatabaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: (): Promise<typeof mongoose> =>
    mongoose.connect(Config.app.databaseUrl),
};

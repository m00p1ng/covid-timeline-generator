import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

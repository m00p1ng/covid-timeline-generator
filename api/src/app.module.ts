import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from './database/database.module';
import { PatientModule } from './patients/patient.module';
import { EntityModule } from './entries/entry.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
      isGlobal: true,
    }),
    DatabaseModule,
    PatientModule,
    EntityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

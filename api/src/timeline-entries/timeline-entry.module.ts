import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TimelineEntry } from './timeline-entry.entity';
import { TimelineEntryController } from './timeline-entry.controller';
import { TimelineEntryService } from './timeline-entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([TimelineEntry])],
  providers: [TimelineEntryService],
  controllers: [TimelineEntryController],
})
export class TimelineEntryModule {}

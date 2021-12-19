import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TimelineEntry } from './timeline-entry.entity';

@Injectable()
export class TimelineEntryService {
  constructor(
    @InjectRepository(TimelineEntry)
    private readonly timelinentryRepository: Repository<TimelineEntry>,
  ) {}
}

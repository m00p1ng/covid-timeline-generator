import { Controller } from '@nestjs/common';

import { TimelineEntryService } from './timeline-entry.service';

@Controller('timeline-entries')
export class TimelineEntryController {
  constructor(private readonly timelineEntryService: TimelineEntryService) {}
}

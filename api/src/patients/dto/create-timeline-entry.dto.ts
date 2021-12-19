import { IsDateString, IsEnum, IsString, ValidateIf } from 'class-validator';

import { LocationType } from '../../commons/enums/location-type.enum';

export class CreateTimelineEntryDto {
  @IsDateString()
  timeFrom: Date;

  @IsDateString()
  timeTo: Date;

  @IsString()
  detail: string;

  @IsEnum(LocationType)
  locationType: LocationType;

  @ValidateIf((o) =>
    [LocationType.INDOOR, LocationType.OUTDOOR].includes(o.locationType),
  )
  @IsString()
  location: string;
}

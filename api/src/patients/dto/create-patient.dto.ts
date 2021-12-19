import { IsEnum, IsInt, IsString } from 'class-validator';

import { Gender } from '../../commons/enums/gender.enum';

export class CreatePatientDto {
  @IsEnum(Gender)
  gender: Gender;

  @IsInt()
  age: number;

  @IsString()
  occupation: string;
}

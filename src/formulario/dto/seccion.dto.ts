import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CampoDto } from './campo.dto';

export class CampoPropsDto {
  @IsNumber()
  index: number;

  @IsNumber()
  idCampo: number;

  @IsBoolean()
  obligatorio: boolean;
}

export class SeccionDto {
  @IsNumber()
  idSeccion: number;

  @IsString()
  nombreSeccion: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CampoDto)
  campos: CampoDto[];

  @IsArray()
  @ValidateNested()
  @Type(() => CampoPropsDto)
  camposProps: CampoPropsDto[];
}

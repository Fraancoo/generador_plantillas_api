import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';

import { SeccionDto } from './seccion.dto';

export class PlantillaDto {
  @IsNumber()
  idPlantilla: number;

  @IsString()
  nombrePlantilla: string;

  @IsString()
  version: string;

  @IsBoolean()
  imprimible: boolean;

  @IsArray()
  @ValidateNested()
  @Type(() => SeccionDto)
  secciones: SeccionDto[];
}

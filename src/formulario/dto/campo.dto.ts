import { Type } from 'class-transformer';
import { IsBoolean, IsNumber, IsObject, IsString } from 'class-validator';

export class TipoResultadoDto {
  @IsString()
  idTipoResultado: string;

  @IsString()
  nombreTipoResultado: string;
}

export class CampoDto {
  @IsNumber()
  idCampo: number;

  @IsString()
  nombreCampo: string;

  @IsObject()
  @Type(() => TipoResultadoDto)
  tipoResultado: TipoResultadoDto;
}

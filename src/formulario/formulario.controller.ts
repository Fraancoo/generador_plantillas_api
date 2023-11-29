import { Body, Controller, Post } from '@nestjs/common';

import { FormularioService } from './formulario.service';

import PlantillaI from 'interfaces/plantilla.interface';

@Controller('api/formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Post()
  generateFormulario(@Body() dto: PlantillaI) {
    const data = this.formularioService.generateFormulario(dto);

    return {
      statusCode: 200,
      message: data,
    };
  }
}

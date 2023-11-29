import { Body, Controller, Get, Post } from '@nestjs/common';

import { FormularioService } from './formulario.service';

import { PlantillaDto } from './dto/plantilla.dto';

@Controller('api/formulario')
export class FormularioController {
  constructor(private readonly formularioService: FormularioService) {}

  @Get('/')
  getFormulario() {
    return {
      statusCode: 200,
      message: 'API para generar un formulario',
    };
  }

  @Post('/')
  generateFormulario(@Body() dto: PlantillaDto) {
    const data = this.formularioService.generateFormulario(dto);

    return {
      statusCode: 200,
      data,
    };
  }
}

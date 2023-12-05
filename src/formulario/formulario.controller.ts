import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

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

  @Get('/script')
  async getFormularioScript(@Res() res: Response) {
    const filePath = join(__dirname, 'public', 'formulario.js');

    if (!existsSync(filePath)) {
      res.status(404).send({
        statusCode: 404,
        message: 'No se encontró el script',
      });
      return;
    }

    res.setHeader('Content-Type', 'application/javascript');

    const file = createReadStream(filePath);
    file.pipe(res);
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

import { Injectable } from '@nestjs/common';

import PlantillaI from 'interfaces/plantilla.interface';

@Injectable()
export class FormularioService {
  generateFormulario(plantillas: PlantillaI) {
    var res = '<div>';

    Object.keys(plantillas).map((p) => {
      
    })

    res += '</div>';
    return 'Formulario generado!';
  }
}

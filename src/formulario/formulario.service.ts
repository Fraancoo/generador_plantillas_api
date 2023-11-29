import { Injectable } from '@nestjs/common';

import { CampoDto } from './dto/campo.dto';
import { PlantillaDto } from './dto/plantilla.dto';

@Injectable()
export class FormularioService {
  generateFormulario(plantilla: PlantillaDto) {
    var res = '';

    plantilla.secciones.map((s, i_secc) => {
      res += `<div class='div_seccion'>`;
      res += `<h2>${s.nombreSeccion}</h2>`;
      res += `<div class='div_campos'>`;
      res += this.genearteCampo(s.campos, i_secc);
      res += `</div></div>`;
    });

    return res;
  }

  genearteCampo(campos: CampoDto[], i_secc: number) {
    var res = '';

    campos.map((c, i_camp) => {
      var id = 'secc_' + i_secc + '_camp_' + i_camp;
      res += `<div class='div_campo'>`;

      switch (c.tipoResultado.idTipoResultado) {
        case 'num':
          res += `<label for='${id}' class='label_line'>${c.nombreCampo}</label>`;
          res += `<input type='number' id='${id}' name='${c.idCampo}' class='input'/>`;
          break;

        case 'log':
          res += `<label class='label_block' for='${id}'>`;
          res += `<span>${c.nombreCampo}</span>`;
          res += `<input type='radio' class='radio' id='${id}_pos' name='${c.idCampo}'/>`;
          res += `<input type='radio' class='radio' id='${id}_neg' name='${c.idCampo}'/>`;
          res += '</label>';
          break;

        case 'text':
          res += `<label for='${id}' class='label_block'>${c.nombreCampo}</label>`;
          res += `<input type='text' id='${id}' name='${c.idCampo}' class='input'/>`;
          break;

        case 'rich_text':
          res += `<label for='${id}' class='label_block'>${c.nombreCampo}</label>`;
          res += `<textarea type='text' id='${id}' name='${c.idCampo}' class='textarea'></textarea>`;
          break;

        default:
          res += '<p>Tipo de campo desconocido</p>';
          break;
      }

      res += `</div>`;
    });

    return res;
  }
}

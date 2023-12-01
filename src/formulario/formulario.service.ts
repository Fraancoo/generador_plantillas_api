import { Injectable } from '@nestjs/common';

import { CampoDto } from './dto/campo.dto';
import { PlantillaDto } from './dto/plantilla.dto';
import { CampoPropsDto } from './dto/seccion.dto';

@Injectable()
export class FormularioService {
  generateFormulario(plantilla: PlantillaDto) {
    var res = `<div class='form_div_secciones'>`;

    plantilla.secciones.map((s, i_secc) => {
      res += `<div class='form_div_seccion'>`;
      res += `<h2 class='form_seccion_title'>${s.nombreSeccion}</h2>`;
      res += `<div class='form_div_campos'>`;
      res += this.generateCampos(s.campos, s.camposProps, i_secc);
      res += `</div></div>`;
    });

    res += '</div>';
    return res;
  }

  generateCampos(
    campos: CampoDto[],
    camposProps: CampoPropsDto[],
    i_secc: number,
  ) {
    var res = '';

    campos.map((c, i_camp) => {
      var id = 'secc_' + i_secc + '_camp_' + i_camp,
        obl = '';
      const campoProps = camposProps.find((cp) => cp.idCampo === c.idCampo);

      if (campoProps.obligatorio)
        obl = "<span class='form_obligatorio'>*</span>";

      switch (c.tipoResultado.idTipoResultado) {
        case 'num':
          res += `<div class='form_div_campo_line'>`;
          res += `<label for='${id}' class='form_label'>${obl + ' ' + c.nombreCampo}: </label>`;
          res += `<input type='number' id='${id}' name='${c.idCampo}' class='form_input'/>`;
          break;

        case 'log':
          res += `<div class='form_div_campo_line'>`;
          res += `<label for='${id}' class='form_label'>${obl + ' ' + c.nombreCampo}: </label>`;
          res += `<label for='${id}_pos' class='form_radio'>`;
          res += '<span>positivo</span>';
          res += `<input type='radio' id='${id}_pos' name='${c.idCampo}'/>`;
          res += '</label>';
          res += `<label for='${id}_neg' class='form_radio'>`;
          res += '<span>negativo</span>';
          res += `<input type='radio' id='${id}_neg' name='${c.idCampo}'/>`;
          res += '</label>';
          break;

        case 'text':
          res += `<div class='form_div_campo'>`;
          res += `<label for='${id}' class='form_label'>${obl + ' ' + c.nombreCampo}:</label>`;
          res += `<input type='text' id='${id}' name='${c.idCampo}' class='form_input'/>`;
          break;

        case 'rich_text':
          res += `<div class='form_div_campo'>`;
          res += `<label for='${id}' class='form_label'>${obl + ' ' + c.nombreCampo}:</label>`;
          res += `<textarea type='text' id='${id}' name='${c.idCampo}' class='form_textarea'></textarea>`;
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

export default interface PlantillaI {
  idPlantilla: number;
  nombrePlantilla: string;
  version: string;
  imprimible: boolean;
  secciones: SeccionI[];
}

export interface SeccionI {
  idSeccion: number;
  nombreSeccion: string;
  campos: number[];
  camposProps: CampoPropsI[];
}

export interface CampoPropsI {
  index: number;
  idCampo: number;
  obligatorio: boolean;
}

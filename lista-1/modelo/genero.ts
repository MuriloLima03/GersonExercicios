export enum GeneroEnum {
    MASCULINO = "Masculino",
    FEMININO = "Feminino",
    OUTRO = "Outro",
  }
  
  export default class Genero {
    private genero: GeneroEnum;
  
    constructor(genero: GeneroEnum) {
      this.genero = genero;
    }
  
    public getGenero(): GeneroEnum {
      return this.genero;
    }
  }
  
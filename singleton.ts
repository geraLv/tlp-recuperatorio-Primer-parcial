class Configuracion {
  private static instancia: Configuracion;
  private configuracion: string;
  private valor: string;
  private constructor(configuracion: string, valor: string) {
    this.configuracion = configuracion;
    this.valor = valor;
  }

  static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion("", "");
    }
    return Configuracion.instancia;
  }
  set(clave: string, valor: string): void {
    this.configuracion = clave;
    this.valor = valor;
  }

  get(conf: string): string {
    return this.configuracion === conf ? this.valor : "No encontrado";
  }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "producción");
console.log(conf2.get("modo"));

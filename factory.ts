interface Producto {
  operacion(): string;
  detalles(): string;
}

class NoteBook implements Producto {
  operacion(): string {
    return "ConcreteProductoA";
  }
  detalles(): string {
    return "NoteBook: Operación realizada.";
  }
}

class Desktop implements Producto {
  operacion(): string {
    return "ConcreteProductoB";
  }
  detalles(): string {
    return "Desktop: Operación realizada.";
  }
}

class Servidor {
  nombre: string;
  memoriaRam: string;
  procesador: string;
  constructor(nombre: string, memoriaRam: string, procesador: string) {
    this.nombre = nombre;
    this.memoriaRam = memoriaRam;
    this.procesador = procesador;
  }
  detalles(): string {
    return `Servidor Nombre: ${this.nombre}, Memoria RAM: ${this.memoriaRam}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  crearProducto(
    tipo: string,
    nombre?: string,
    memoriaRam?: string,
    procesador?: string
  ): Producto | Servidor {
    if (tipo === "A") return new NoteBook();
    if (tipo === "B") return new Desktop();
    if (tipo === "C")
      return new Servidor(nombre || "", memoriaRam || "", procesador || "");
    throw new Error("Tipo no reconocido");
  }
}

const factory = new EquipoFactory();
const server = factory.crearProducto("C", "Servidor", "16GB", "xeon");
console.log(server.detalles());

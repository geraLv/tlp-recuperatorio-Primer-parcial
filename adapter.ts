interface InventarioNuevo {
  añadirItem(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): string[];
}

class InventarioViejo {
  items: string[] = [];

  addItem(nombre: string): void {
    this.items.push(nombre);
  }
}

class AdaptadorInventario implements InventarioNuevo {
  constructor(private inventarioViejo: InventarioViejo) {}
  añadirItem(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.addItem(nombre, tipo, estado);
  }

  listarEquipos(): string[] {
    return this.inventarioViejo.items;
  }
}

const InvenViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(InvenViejo);
adaptador.añadirItem("router", "red", "disponible");

// adaptador.listarEquipos();
console.log(adaptador.listarEquipos());

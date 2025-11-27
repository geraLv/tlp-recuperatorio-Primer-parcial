interface Observador {
  actualizar(subject: Equipo): void;
}

class Soporte implements Observador {
  actualizar(subject: Equipo): void {
    console.log(`ConcreteObserver notificado`);
  }
}

class Equipo {
  private observadores: Observador[] = [];
  nombre: string;
  tipo: string;
  estado: string;
  constructor(nombre?: string, tipo?: string, estado?: string) {
    this.nombre = nombre || "Router";
    this.tipo = tipo || "Red";
    this.estado = estado || "Disponible";
  }

  agregarObservador(obs: Observador): void {
    this.observadores.push(obs);
  }

  eliminarObservador(obs: Observador): void {
    this.observadores = this.observadores.filter((o) => o !== obs);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificar();
  }

  notificar(): void {
    this.observadores.forEach((o) => o.actualizar(this));
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Router", "Red", "Disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("En Mantenimiento");

const Tarea = require("./tarea.js");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  mostrarTarea() {
    console.log(this._listado);
  }
}

module.exports = Tareas;

const Tarea = require("./tarea.js");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

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

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => (this._listado[tarea.id] = tarea));
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      const idx = `${index + 1}. `.green;
      const { descripcion, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;

      console.log(`${idx} ${descripcion} :: ${estado}`);
    });
  }

  listarPendientesCompletadas(completadas) {
    let estructura = "";
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { descripcion, completadoEn } = tarea;
      const estado = completadoEn ? "Completada".green : "Pendiente".red;
      if (completadas) {
        if (completadoEn) {
          contador += 1;
          estructura += `${
            (contador + ".").green
          } ${descripcion} :: ${completadoEn} \n`;
        }
      } else {
        if (!completadoEn) {
          contador += 1;
          estructura += `${
            (contador + ".").green
          } ${descripcion} :: ${estado} \n`;
        }
      }
    });
    return estructura;
  }
}

module.exports = Tareas;

const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer.js");
const Tareas = require("./models/tareas.js");

const main = async () => {
  try {
    let opt = "";
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if (tareasDB) tareas.cargarTareasFromArray(tareasDB);

    do {
      opt = await inquirerMenu();

      switch (opt) {
        case "1":
          const desc = await leerInput("Descripcion:");
          tareas.crearTarea(desc);
          break;

        case "2":
          tareas.listadoCompleto();
          break;

        case "3":
          console.log(tareas.listarPendientesCompletadas(true));
          break;

        case "4":
          console.log(tareas.listarPendientesCompletadas(false));
          break;

        case "5":
          const ids = await mostrarListadoCheckList(tareas.listadoArr);
          tareas.toggleCompletadas(ids);
          break;

        case "6":
          const id = await listadoTareasBorrar(tareas.listadoArr);
          if (id == "0") {
            break;
          }

          const confirmar_res = await confirmar(
            "¿Estas seguro de borar la tarea?"
          );
          if (confirmar_res) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada exitosamente.");
          }
          break;
      }
      guardarDB(tareas.listadoArr);
      await pausa();
    } while (opt !== "0");
  } catch (error) {
    console.log(error);
  }
};

main();

const { guardarDB, leerDB } = require("./helpers/guardarArchivo.js");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer.js");
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
      }
      guardarDB(tareas.listadoArr);
      await pausa();
    } while (opt !== "0");
  } catch (error) {
    console.log(error);
  }
};

main();

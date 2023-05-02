const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer.js");
const Tareas = require("./models/tareas.js");

const main = async () => {
  try {
    let opt = "";
    const tareas = new Tareas();

    do {
      opt = await inquirerMenu();

      switch (opt) {
        case "1":
          const desc = await leerInput("Descripcion:");
          tareas.crearTarea(desc);
          break;
        case "2":
          tareas.mostrarTarea();
          break;
      }
      await pausa();
    } while (opt !== "0");
  } catch (error) {
    console.log(error);
  }
};

main();

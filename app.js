require("colors");

const { mostrarMenu, pausa } = require("./helpers/mensajes.js");

console.clear();

const main = async () => {
  try {
    let opt = "";
    do {
      opt = await mostrarMenu();
      if (opt !== "0") await pausa();
    } while (opt !== "0");
  } catch (error) {
    console.log(error);
  }

  //   console.log(opcion);
  //   console.log(opcion);
  //   do {
  // opcion = mostrarMenu();
  //   } while (opcion != 0);
  //   pausa();
};

main();

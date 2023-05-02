const { inquirerMenu, pausa } = require("./helpers/inquirer.js");
console.clear();

const main = async () => {
  try {
    let opt = "";
    do {
      opt = await inquirerMenu();
      console.log(opt);
      if (opt == "0") await pausa();
    } while (opt !== "0");
  } catch (error) {
    console.log(error);
  }
};

main();

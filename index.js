var term = require("terminal-kit").terminal;

//the bellow three lines enables keypress events to be executed in the console
const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let guide = {
  u: "move the cursor upwards 1 block",
  d: "move the cursor downwards 1 block",
  l: "move the cursor left 1 block",
  r: "move the cursor right 1 block",
  p: "print the cursor path",
  e: "exit the application",
};

let x = 0;
let y = 0;
//keypress event
process.stdin.on("keypress", (str, key) => {
  switch (key.name) {
    case "r":
      if (x < 10) {
        term.right(1);
        x++;
      }
      break;
    case "l":
      if (x > 0) {
        term.left(1);
        x--;
      }

      break;
    case "u":
      if (y > 0) {
        term.up(1);
        y--;
      }

      break;

    case "d":
      if (y < 10) {
        term.down(1);
        y++;
      }
      break;

    case "e":
      process.exit();

    case "p":
      console.log(__dirname);
      break;

    default:
      console.log(
        "\x1b[31m\x1b[1mUnknown Command! :(\x1b[0m \n ",
        " please use these buttons: \n ",
        guide
      );
      break;
  }
});
console.log("Press any key...");

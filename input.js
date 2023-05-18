const { keyObj } = require("./constants.js");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  return stdin;
};

let interval;

const handleUserInput = (key) => {
  const move = function (key) {
    clearInterval(interval);
    interval = setInterval(() => {
      connection.write(key);
    }, 100);
  };
  if (key === "\u0003") {
    process.stdout.write("Disconnecting...\n");
    process.exit();
  }
  if (keyObj.hasOwnProperty(key)) {
    key === "w" || key === "s" || key === "a" || key === "d"
      ? move(keyObj[key])
      : connection.write(keyObj[key]);
  }
};

module.exports = { setupInput };

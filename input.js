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

const handleUserInput = (key) => {
  // movement("connect", (connect) => {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 100);
  // });
  if (key === "\u0003") {
    process.stdout.write("Disconnecting...\n");
    process.exit();
  }
  if (keyObj.hasOwnProperty(key)) {
    connection.write(keyObj[key]);
  }
};

module.exports = { setupInput };

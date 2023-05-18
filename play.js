const { connect } = require("./client");

const setupInput = function (connection) {
  conn = connection;
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
  if (key === "\u0003") {
    process.stdout.write("Disconnecting...\n");
    process.exit();
  }
};

setupInput(connect);

console.log("Connecting ...");

const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (connect) => {
    console.log("Connected to Snek");
    conn.write("Name: WIL");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
module.exports = { connect };

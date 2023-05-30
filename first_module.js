const Lionel = "Lionel";
const Messi = "Messi";

const sayHello = (name) => {
  console.log("hello " + name + " " + Messi);
};

module.exports = { Lionel, Messi, sayHello };

const os = require("os");
user = os.userInfo();
console.log(user);
console.log(os.uptime());

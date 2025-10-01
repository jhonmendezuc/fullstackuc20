const { suma, resta } = require("./calculadora");
const User = require("./User");
console.log(suma(5, 3)); // 8
console.log(resta(5, 3)); // 2

const user1 = new User("Alice", "alice@gmail.com", "123");
console.log(user1);
console.log(user1.greet());

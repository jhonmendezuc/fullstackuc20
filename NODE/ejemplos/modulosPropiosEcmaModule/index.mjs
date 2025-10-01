import { suma, resta } from "./calculadora.mjs";
import User from "./User.mjs";
console.log(suma(2, 3));
console.log(resta(5, 3));

const user1 = new User("Jhon", "jhon@gmail.com", "12345678");
console.log(user1.email);

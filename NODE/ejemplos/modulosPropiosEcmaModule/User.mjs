class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

export default User;

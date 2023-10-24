const person = {
  name: "John",
  sayHello: () => {
    console.log(this);
  },
};

name = "usman";
person.sayHello(); // Outputs 'true'

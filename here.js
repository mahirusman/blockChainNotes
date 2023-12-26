const person = {
  name: "John",
  sayHello: () => {
    console.log(this);
  },
};

name = "usman";
person.sayHello(); // Outputs 'true'

// this refer to the object that is function has property of
//the scope of this keyword is determined at run time which is a dynamic scope

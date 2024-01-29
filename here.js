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

setTimeout(() => {
  console.log("hi");
}, 0);

setImmediate(() => {
  console.log("how");
}, 0);

setTimeout(() => {
  console.log("are");
});

// setImmediate(() => {
//   console.log("how");
// }, 0);

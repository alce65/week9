"use strict";

// Patrones de ejecución

function foo(a, b) {
    console.log(this);
}

// Patron Function
foo();

// patron Method
const obj = {
    name: "Pepe",
    method: foo,
};

obj.method();

// Patron Constructor

new foo();

// Patron Apply

const obj2 = { name: "Ernesto" };

foo.apply(obj2, [2, 7]);
foo.call(obj2, 2, 7);
foo.bind(obj2)();

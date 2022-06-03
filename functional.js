// Funcines PURAS
// - sin efectos secundarios: no cambia nada fuera de la función
// - no utiliza información externa al margen de sus parámetros
// -> consecuencia: es equipotente

///
function suma(a, b) {
    return a + b;
}
suma(3, 4);

let x = 23;
///
function add(a) {
    return a + x;
}

add(2);

function sumayMas(a, b) {
    x = 45;
    return a + b;
}

sumayMas(1, 1);

// En JS Funciones = objetos de primer orden

function foo() {
    const x = {};
    const y = () => {
        console.log(foo.user);
        z();
    };

    const z = () => {
        console.log("Soy interna a foo");
    };

    return y;
}

const arrowFoo = () => {};
const obj = {};

obj.user = "Pepe";
foo.user = "Luisa";

console.log(obj);
console.log(foo);

setTimeout(foo, 2000);

foo()();

Function.prototype.bind();

function foo() {
    let x = 23;
    const bar = () => {
        console.log(x);
    };

    return bar;
}

const ext = foo();
ext();

function count(x = 0) {
    let y = 2;
    const bar = () => {
        y;
        console.log(++x);
    };

    return bar;
}

const counter = count();
counter();
counter();
counter();
counter();
const counter2 = count(10);
counter2();
counter2();
counter2();
counter2();
counter();
counter();
counter();
counter();

function suma(a, b) {
    return a + b;
}

setInterval(() => {
    let x = 23,
        y = 34;
    console.log(suma(x, y));
    console.log(++x);
}, 1000);

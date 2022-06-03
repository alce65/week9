const obj = {
    name: "Luisa",
    foo: function () {
        console.log(this);
    },
    arrowfoo: () => {
        console.log(this);
    },
};

obj.foo();

setTimeout(obj.foo, 900);
setTimeout(obj.foo.bind(obj), 1000);
setTimeout(() => {
    obj.foo();
}, 1100);
setTimeout(obj.arrowfoo, 1200);

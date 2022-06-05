function foo() {
    const result = Math.random();
    if (result > 0.5) {
        return 200;
    } else {
        throw new Error("Error");
    }
}

try {
    console.log(foo());
} catch (error) {
    console.log(error.message);
}

// ES2017
async function afoo() {
    const result = Math.random();
    if (result > 0.5) {
        return 200;
    } else {
        throw new Error("Error");
    }
}

afoo()
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error.message));

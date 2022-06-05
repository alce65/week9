function makeAsync(time, callback) {
  data = 200;
  setTimeout(callback, time);
}

const foo = () => {
  console.log("Datos recibidos", data);
};
makeAsync(2000, foo);

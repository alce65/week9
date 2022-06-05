function makeAsync(time) {
  data = 200;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random();
      if (result > 0.5) {
        resolve(data);
      } else {
        reject(new Error("Error número " + result));
      }
    }, time);
  });
}

makeAsync(2000)
  .then((response) => console.log("Data " + response))
  .catch((error) => console.log(error.message));

// Promise.all().then
// Promise.allSettled()
// Promise.race()

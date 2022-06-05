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

try {
  const result = await makeAsync(2000);
  console.log(result);
} catch (error) {
  console.log(error.message);
}

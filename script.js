window.promises = [];

function getRandomTime() {
  return Math.floor(Math.random() * 5) + 1;
}

const promises = Array.from({ length: 5 }, () => {
  return new Promise((resolve) => {
    const time = getRandomTime();
    setTimeout(() => {
      resolve(time);
    }, time * 1000);
  });
});

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById("output");
    outputDiv.innerText = `The first promise to resolve had a value of ${result}.`;
  })
  .catch((error) => {
    console.error(error);
  });

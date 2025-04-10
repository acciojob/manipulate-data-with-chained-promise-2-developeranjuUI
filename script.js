//your JS code here. If required.

const outputDiv = document.getElementById("output");

function getArray() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4]);
    }, 3000);
  });
}

function filterEvenNumbers(arr) {
  return new Promise(resolve => {
    setTimeout(() => {
      const even = arr.filter(num => num % 2 === 0);
      outputDiv.textContent = even.join(',');
      resolve(even);
    }, 1000);
  });
}

function multiplyByTwo(arr) {
  return new Promise(resolve => {
    setTimeout(() => {
      const multiplied = arr.map(num => num * 2);
      outputDiv.textContent = multiplied.join(',');
      resolve(multiplied);
    }, 2000);
  });
}

getArray()
  .then(filterEvenNumbers)
  .then(multiplyByTwo)
  .catch(error => console.error("Error:", error));
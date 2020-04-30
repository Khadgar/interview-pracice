const fetch = require('node-fetch');

const promise1 = new Promise((resolve, reject) => {
  const isSuccess = Math.floor(Math.random() * 2);
  setTimeout(() => {
    if (isSuccess % 2 === 0) {
      resolve('promise1');
    } else {
      reject('promise1 was unsuccessfull');
    }
  }, 900);
});

const promise2 = new Promise((resolve, reject) => {
  const isSuccess = Math.floor(Math.random() * 2);
  setTimeout(() => {
    if (isSuccess % 2 === 0) {
      resolve('promise2');
    } else {
      reject('promise2 was unsuccessfull');
    }
  }, 300);
});

const promise3 = new Promise((resolve, reject) => {
  const isSuccess = Math.floor(Math.random() * 2);
  setTimeout(() => {
    if (isSuccess % 2 === 0) {
      resolve('promise3');
    } else {
      reject('promise3 was unsuccessfull');
    }
  }, 300);
});

promise1
  .then(value => {
    console.log(value);
  })
  .catch(err => console.log(err));

const fetchPromise = new Promise((resolve, reject) => {
  return resolve(fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()));
});
const fetchPromise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
const fetchPromise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

async function getResult() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  let data = await response.json();
  return data;
}
let alma = '';
getResult().then(value => console.log(value));
console.log(alma);
///getResult().then(res => console.log(res));
Promise.allSettled([promise1, promise2, promise3]).then(results => results.forEach(result => console.log(result)));

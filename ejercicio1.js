let count = 10;

let n = -5;
let m = 2;

let min = Math.min(n, m);
let max = Math.max(n, m);

const num = 7;
let array = [];

// let resultArray = [7,7,7,7,7,7,7,7,7,7]
for(let i = 1; i <= 10; ++i){
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    array.push(randomNumber);
}

console.log(array);

// let range = max - min;


// for (let i = Math.floor(Math.random() * (max - min) + min); i <= count; ++i) {
//   array.push(i);
// }

// for (
//   let i = Math.floor(Math.random() * (max - min + 1) + min);
//   i <= count;
//   ++i
// ) {
//   array.push(i);
// }

// for (let i = Math.floor(Math.random() * range * 2 + 1); i >= count; ++i) {
//   array.push(i);
// }

// for (let i = Math.floor(Math.random() * range * 2 + 1); i >= count; ++i) {
//   array.push(i);
// }

// console.log((Math.random() * (max - min) + min).toFixed(count).split(""));

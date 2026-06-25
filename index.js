// import * as math from "./math.js";
// const a = 8;
// const b = 9;

// console.log(`
//    ${a} + ${b} = ${math.add(a, b)}
//    ${a} - ${b} = ${math.minus(a, b)}
//    ${a} * ${b} = ${math.multiply(a, b)}
//    ${a} / ${b} = ${math.divide(a, b)}
//    ${a} % ${b} = ${math.modulus(a, b)}
//  `);

// console.log(`${a} + ${b} = ${math.add(a, b)}`)
// console.log(`${a} - ${b} = ${math.minus(a, b)}`)
// console.log(`${a} * ${b} = ${math.multiply(a, b)}`)
// console.log(`${a} / ${b} = ${math.divide(a, b)}`)
// console.log(`${a} % ${b} = ${math.persen(a, b)}`)


// ติดตั้ง npm install dotenv
import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);


/**
 * note using nodejs
 */
import { readFileSync } from "fs";
const payment = (weight, value) => {
  if (weight < 0 || weight > 10000 || value < 0 || value > 5000000)
    return "Invalid";
  if (weight < 1500) return 15000;
  if (weight < 1800) return 18500;
  if (weight < 2000) return 21500;
  return 21500 + Math.ceil((weight - 2000) / 1000) * 2800;
};
/* Inside test case
    weight\nvalue. Exp: 1\n2
*/
const testFuncton = () => {
  const arr = new Array(5);
  arr.fill(0);
  try {
    arr.forEach((value, index) => {
      const data = readFileSync(`./testcases/${index + 1}.txt`, "utf-8")
        .trim()
        .split(/[\r\n]+/);
      if (data) {
        const weight = parseFloat(data[0]);
        const value = parseFloat(data[1]);
        console.log(payment(weight, value));
      }
    });
  } catch (error) {
    console.log(error);
  }
};

testFuncton();

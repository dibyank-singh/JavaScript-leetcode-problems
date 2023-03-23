

console.log("Its working")

let array = [1,2,3,4,5,6] 
// Array [1,1,2,6,24,120]

                              
// Out Put Array [1,1,2,6,24,120]

const input = [1, 2, 3, 4, 5, 6]; 

const output = [];

let productSoFar = 1;
for (let i = 0; i < input.length; i++) {
  output[i] = productSoFar;
  // debugger
  productSoFar *= input[i];
}
console.log(output)




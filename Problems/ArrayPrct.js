// This is another file for Practice problem questions based on Array only.

// 1. Write a JavaScript program to count the number of arrays inside a given array

// Input= [2,8,[6],3,3,5,3,4,[5,4]]
// output=2

 let Input= [2,8,[6],3,3,5,3,4,[5,4]]

 function findnumofarry(Input){
   
    return Input.filter((elm)=> Array.isArray(elm)).length
 }
 console.log(`Num of array present in this Array ${findnumofarry(Input)}`)

//  2. Write a JavaScript program to check if an array is a factor chain or not ?

// Input= ([2, 4, 8, 16, 32]) -> true

let input2=[2, 4, 8, 16, 32]
function checkFact(nums){

    for(var i=0; i<nums.length-1;i++){
       
        if(nums[i+1]% nums[i] !=0){
            return false
        }
    }
    return true;
}
console.log(checkFact(input2))

// 3. Write a JavaScript function to filter false, null, 0 and blank values from an array
// input=[58, '', 'abcd', true, null, false, 0]
// output=[58, "abcd", true]

function filter_array_values(arr) {
    arr = arr.filter(isEligible);
    return arr;
  }
  
  function isEligible(value) {
    if(value !== false || value !== null || value !== 0 || value !== "") {
      return value;
    }
  }
  
  console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));

//   4. Convert a given number into exact decimal points to rigt side ?

const num= 2345.3424222
const resnum= num.toFixed(3)
console.log(resnum)  

// 5. Find the most frequent element in an array ?

// input=[2,3,4,2,3,5,5,5,5]
// output=5

let input3=[2,3,4,2,3,5,5,5,5]
function maxtimenum(arr){
    let freq = arr.reduce((acc, val) => {
        acc[val] = acc[val] ? acc[val] + 1 : 1;
        return acc; 
      }, {});
//  return freq

  let mostFreq = 0;
  let result = null;

  for (let elem in freq) {
    if (freq[elem] > mostFreq) {
      mostFreq = freq[elem];
      result = elem;
      debugger 
    }
  }

  return result;
}    
console.log(maxtimenum(input3))

//6. Write a function that takes in a string and returns the longest word in the string.

// let inputstr='hello divyank kumar singh"
// output= "divyank" - Cuz it's longest words in this given string.

let inputstr='hello divyank kumar singh'
   function findLongWord(str){
       let words= str.split(" ")
         
       let longestword=""
       for( var i=0; i<words.length;i++){


        if(words[i].length>longestword.length){
            longestword=words[i]
        }
       }
       
       return longestword
   }
   console.log(findLongWord(inputstr))

//    7.Write a function that takes in an array of objects and returns
//    a new array containing only the objects that have a property called "name".  ?

function filterObjectsWithNames(arr) {
    return arr.filter(obj => obj.hasOwnProperty('name'));
  }

// 8. Write a function that takes in two arrays and returns 
// a new array containing only the elements that are common between the two arrays. ?
 
  let Arrinput=[2,3,5,5,6,4,2,3]
  let Arrinput2=[4,2,4,5,6,7,2,2]

// To retun value in Boolean only.

//   function SingleComArr(arr, arr2){
//        let resultdata=[]
//    arr.some((elm)=> {
//     if(arr2.includes(elm)){
//       resultdata.push(elm)
//     }
//   } )
// return resultdata
        
//   }
//   console.log(SingleComArr(Arrinput,Arrinput2))

// 2nd approch

function getCommonElements(arr1, arr2) {
    const commonElements = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        commonElements.push(arr1[i]);
      }
    }
    return commonElements;
  }

console.log( getCommonElements(Arrinput, Arrinput2))

// 9.Write a function that takes in an array of integers and returns the sum of all the even numbers.?

//   Let input=[2,4,5,6,7,8,4,3,7,9,24,54,33] 

let input4=[2,4,5,6,7,8,4,3,7,9,24,54,33] 

  function findeven(arr){
    let sum=0
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            sum+=arr[i]
        }
    }
    return sum 
 
  }
  console.log(findeven(input4))

  // 1st with map- Add odd number
  
  function findevenmap(arr){

    let sum=0
    arr.map((elm)=> {
        if(elm%2!==0){
            sum+=elm
        }
    } )
     return sum
  }
  console.log(findevenmap(input4))

//   10. Write a function that takes in a number and returns true if the number is prime, false otherwise.


function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
   
  console.log(isPrime(13))

//   11. Write a function to convert a string to a number in JavaScript. ?

function stringToNumber(str) {
    return +str;
  }

//   12. Write a function to sort an array of numbers in ascending or descending order in JavaScript.

function sortArray(arr, order = "desc") {
    if (order === "asc") {
      return arr.sort((a, b) => a - b);
    } else if (order === "desc") {
      return arr.sort((a, b) => b - a);
    } else {
      throw new Error("Invalid order");
    }
  }
  
  // Example usage
  const arr = [2, 4, 1, 7, 5];
  console.log(sortArray(arr)); // Output: [1, 2, 4, 5]



//   Medium level Problems-------------------------------------------------



// 1. Write a function to find the first non-repeating character in a string in JavaScript. ?

// Let's solve it by 2Step-    
// 1. Add/Check charector count
// 2. check how much time it appears.

let strname="divyanksinghji"

function NonRepeatChar(str){
let charcount={}
// 1st step- update char counter
for( var i=0; i<str.length; i++){
      let char= str.charAt(i)
      charcount[char]= charcount[char] ? charcount[char]+1:1
} 

// 2nd step-  check with num count.
for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (charcount[char] === 1) {
      return char;
    }
  }

return null

}
console.log(NonRepeatChar(strname))


//2 For find firstrepeating char

function findFirstRepeatingCharacter(str) {
    // create an empty object to store character counts
    const charCounts = {};
  
    // loop through the string and count occurrences of each character
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      charCounts[char] = charCounts[char] ? charCounts[char] + 1 : 1;
    }
  
    // loop through the string again and return the first character with a count greater than 1
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (charCounts[char] > 1) {
        return char;
      } 
    }
  
    // if no repeating character is found, return null
    return null;
  }

  console.log(findFirstRepeatingCharacter(strname))


// 3. input is [2,5,6,-4] and output is [7,4,3,13] , solve it using javascript, 
// in details- add all other index value except the current index value for each time

function getarr(num){
  let output=[]
   for( var i=0; i<num.length; i++){
     let sum=0
     for(var j=0; j<num.length; j++){
       if (j !== i) {
         sum += num[j];
       }
     }
  output.push(sum)
   }
   return output
 }
 console.log(getarr([2,5,6,-4]))


//4. Find the second largest number in an array

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

// Example usage:
findSecondLargest([1, 2, 3, 4, 5]); // Output: 4

// Or

// using sort method 

function findSecondLargest(arr) {
  
  const res=arr.sort((a,b)=>{
     return (b-a)
   })
   return res[1]
}
// Example usage:
console.log(findSecondLargest([1, 2, 3, 4, 5])); // Output: 4

// 5.  Write a function that takes an array of strings and returns 
// a new array containing only the strings that have a length of at least 5 characters.

    // Using Reduce Method

    
function filterByLength(arr) {
  return arr.reduce((acc, curr) => {
    if (curr.length >= 5) {
      acc.push(curr);
    }
    return acc;
  }, []);
}


// Example usage:
const input = ["hello", "world", "how", "are", "you", "doing", "today"];
const output = filterByLength(input);
console.log(output); // ["hello", "world", "doing", "today"]


// 6. // Write a function that takes an array of strings
// and returns a new array containing only the strings that contain the substring "apple".

 function filterAppleStrings(arr){
  let newarr=[]
    for( var i=0; i<arr.length; i++){
     
      let str=arr[i]
      if(str.includes("apple")){
        newarr.push(str)
      }
 
    }
return newarr

}

// Example usage:
const input9 = ["apple pie", "banana bread", "apple cider", "pear tart"];
const output2 = filterAppleStrings(input9);
console.log(output); // ["apple pie", "apple cider"]


// 7. Write a function that takes an array of numbers and returns
//  the sum of all the positive numbers in the array.

function sumPositiveNumbers(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > 0) {
      sum += num;
    }
  }

  return sum;
}

// Example usage:
const input10 = [-1, 2, -3, 4, -5, 6];
const output10 = sumPositiveNumbers(input10);
console.log(output10); // 12

// 8. Write a function that takes an array of strings and returns a new array 
// containing only the strings that start with a capital letter.

function filterCapitalStrings(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      result.push(str);
    }
  }

  return result;
}

// Example usage:
const input11 = ["Hello", "world", "How", "are", "you", "doing", "today"];
const output11 = filterCapitalStrings(input11);
console.log(output11); // ["Hello", "How"]


// 9. Write a function that takes an array of strings and returns a new array 
// containing only the strings that end with the letter "s".

function filterStringsEndingWithS(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (str.charAt(str.length - 1) === "s") {
      result.push(str);
    }
  }

  return result;
}

// Example usage:
const input13 = ["apples", "oranges", "pears", "grapes", "bananas"];
const output13 = filterStringsEndingWithS(input13);
console.log(output13); // ["apples", "oranges", "grapes"]


// 10. Write a function that takes an array of strings and returns a new array
// containing only the strings that contain the letter "a".

function filterStringsContainingA(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf("a") !== -1) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Example usage:
const input14 = ["apple", "banana", "cherry", "orange", "pear"];
const output14 = filterStringsContainingA(input14);
console.log(output14); // ["apple", "banana", "orange", "pear"]

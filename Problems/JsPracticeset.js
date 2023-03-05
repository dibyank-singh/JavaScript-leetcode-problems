
//1. Reverse the word in given string.

// Input= "Hello Divyank Singh"
// Output="Singh Divyank Hello"

let str="Hello Divyank Singh"

function reversestr(data){
return data.split(" ").reverse().join(" ")
}
var finalresult= reversestr(str) 
console.log(finalresult)

// 2.how to find unique elements in a given array ?

// Input=[2,3,5,5,3,2,5,7,8]
// Output=[2,3,5,7,8]

let Input=[2,3,5,5,3,2,5,7,8]

 function uniquenum(data){
    let result=new Set(data)
    console.log(result)
  
 }
 uniquenum(Input)

//  3. How to find duplicate element in given array ?

// Input=[2,3,5,5,7,6,8,9,5,3]
// Output=[3,5]

let arr =[2,3,5,5,7,6,8,9,5,3]
function finddublicate(arr){
   
    const dublicatedata=arr.filter((elm, index, Arrs)=> Arrs.indexOf(elm) !== index )
    console.log(dublicatedata)
    
}
finddublicate(arr)

// 4. How to find the count of duplicates in an array.

// Input =[2,3,5,5,2,5,3]
// output=4

let arr2=[2,3,5,5,2,5,3]

function findcountdpl(arr){
 const dplcont=arr.filter((elem,index,arr)=> arr.indexOf(elem) !== index)
 return dplcont.length
}
console.log(findcountdpl(arr2))

// Or we want output like this- [2=2, 3=2, 5=3]

// function findcountforeachelem(arr){
//     const count={}
//     arr.forEach((elem)=>{ count[elem]= (count[elem] || 0) +1}
//     )
//     return count
// }
//  console.log( findcountforeachelem(arr2))

//  Or Using Reduce Method....

function findcountusingReduce(arr){
    const dpldata= arr.reduce((pre, cunt)=>{
    pre[cunt]=(pre[cunt] ||0)+1
    return pre
    },{})
    return dpldata;
}

 console.log( findcountusingReduce(arr2))

//  5. How to find unique value from an array in sorted order ? 

// Input=[2,3,5,6,8,9,23,35,4,6,]
// Output=[2,3,4,5,6,8,9,23,35]

const arr3=[2,3,5,6,8,9,23,35,4,6,]

const sorteduniueval= arr3.filter((elem, index, arr3)=> arr3.indexOf(elem) == index)
   sorteduniueval.sort((a,b)=>{
    return a-b;
   }
   )
   console.log(sorteduniueval)


// 6. How to find maximum value in numbered array ? 

const arr4=[2,3,5,6,8,9,23,35,4,6,]

function findmaximum(arr){
   const maxnum= arr.reduce((pre, curt)=>{
      return pre >curt ? pre : curt
    })
    return maxnum

}

console.log(findmaximum(arr4))

// 7. How to find minimum value in a numbered array ?
const arr5=[2,3,5,6,8,9,23,35,4,6,]

function findminimum(arr){
   const maxnum= arr.reduce((pre, curt)=>{
      return pre <curt ? pre : curt
    })
    return maxnum

}

console.log(findminimum(arr5))

// 8. find average of number in numbered array ?

// Input= [2,3,4,8,4]
// Avg= sum of total num/ number of elem 
// 2+3+4+8+4/5

let arr6=[2,3,4,8,4]
function findAverage(arr){
    let totalval=0
    arr.map((elem)=>{
     totalval= (elem+totalval)
     finalavg=totalval/arr.length
    })
    return finalavg

}
console.log(findAverage(arr6))

// 9. Uppercase the first caracter in a string array ? 

// Input=["divyank"]
// Output=["Divyank"]
let stringdata=["divyank", "preity", "Manju", "divyanshu", "narendra"]

// Using Map 

function firstlatteruppercase(data){
 let findadda=data.map((elm)=> elm.charAt(0).toUpperCase()+elm.substr(1))
 return findadda
}
 console.log(firstlatteruppercase(stringdata))

// Using For Loop.

// function firstlatteruppercase(data){
//      let Alluppercasename=[];
//     for(let name of data){
//        finalname=  name.charAt(0).toUpperCase() + name.substr(1);
//        Alluppercasename.push(finalname)

//     }
//     return Alluppercasename
// }
//  console.log( firstlatteruppercase(stringdata))

//  10. How to make sentence out of a given sting array ?

// input=["Welcome", "to", "the","world", "of","Javascript"]
// Output=["Welcome to the world of Javascript"]

const inputname=["Welcome", "to", "the","world", "of","Javascript"]

  var joinedword=inputname.join(" ")
  console.log(joinedword)

// 11. How to check if an array contains any element of another array ?

// InputA=[2,3,5,2,6]
// InputB=[,2,7,8,4,5]

// Output=[2,5] or True

const num1=[2,3,5,2,6]
const num2=[9,7,8,4,6]

let matchnum=num1.some((elem)=> num2.includes(elem))
console.log(matchnum)

// 12. Check if the strings are Anagram of Each other ?

// input= ACA
// Output=ACA

const string1="caba"
const string2="abca"

// const string1="121"
// const string2="121"

function checkanagram(str1, str2){

    let strA= str1.toLowerCase()
    let strB= str2.toLowerCase()

    strA=strA.split("").sort().join("")
    console.log(strA)
    strB=strB.split("").sort().join("")

    return strA=== strB

}
 console.log( checkanagram(string1,string2))

// 13. How can you extract a few field from the given json object and from a new array ? 

 const inputdata={
    
    employee:[
       {
        name:"Divyank",
        id:1
       },
       {
        name:"Priya",
        id:2
       },
       {
        name:"Preity",
        id:3
       },
       {
        name:"Neha",
        id:4
       },
    ]
 }

 const result= inputdata.employee.map((elem)=>{
    let newstudobj={
            name: elem.name,
            id: elem.id
    }
    return newstudobj
 })
console.log(result)


//14. filter a given object based on certain condition and return the corresponding object ?


const filterobj={

    "student":[
        {
            "firstname":"Divyank",
            "lastname":"Singh",
            "studentId":101        
        },
        {
            "firstname":"gopal",
            "lastname":"Singh",
            "studentId":102        
        },
        {
            "firstname":"Sakshi",
            "lastname":"Singh",
            "studentId":103        
        },

    ]
}

const filterobjres=filterobj.student.filter((elem)=>{
  return elem.studentId > 102 ? elem : ""
//   return elem.firstname == "gopal" ? elem : ""
})
console.log(filterobjres)

// 15. Check if the variable passed is an array or not ?

let arraytestdata=[2,3,4,5,6,7,8,9,10,13]

console.log(Array.isArray(arraytestdata))
 
// How to empty an array ?

// 4ways to empty an array...

let checkamptyArray=[2,3,5,6,3,46]


// 1. Menthod 
// checkamptyArray=[]
// console.log(checkamptyArray)

// 2nd Method 

//  checkamptyArray.length=0
// console.log(checkamptyArray)

// 3rd Method 

// while(checkamptyArray.length >0){
//     checkamptyArray.pop()
// }
// console.log(checkamptyArray)

// 4th Method 

checkamptyArray.splice(0,checkamptyArray.length)
console.log(checkamptyArray)
  

// 16.  write a function to check if a given string is a Palindrome or not ? 

//   Input="level"
// Output="level"

let palInput="level"

function checkPalindrom(plstr){

    let str=plstr.toLowerCase()
    return (str== plstr.split("").reverse().join(""))

}
console.log(checkPalindrom(palInput))


// 17. How can you combine two array into a third array using spread operator ?

let arrayA=[1,2,3,5,6,3]
let arrayB=[8,2,3,3,34,3]

let SingleArray=[...arrayA, ...arrayB]
console.log(SingleArray)


// 17. How do you sort and reverse an array without changing the original array ? 

let inputArray=[2,4,6,7,4,3,26,4,2]

const newinputArray= inputArray.slice().reverse()
console.log(newinputArray)

// 18.  How can we insert an element at a specific index in an array ?

let testarray=[2,4,5,2,4,6,3]

let elem=86
let position=2

testarray.splice(position, 0, elem)
console.log(testarray)

// 19. Detele an element at a specific index in an array ?

let testarray2=[2,3,4,5,2,5,7,4,3,]

let deletepos=3

testarray2.splice(deletepos, 1)
console.log(testarray2)

// 20. Delete a specific element in a array ?

let deletespecArr=[2,4,4,55,46,4,5,3]

let deletelem=55;

let resltarr= deletespecArr.filter((elem)=> elem !== deletelem)
console.log(resltarr)

// 21. Clone an Object

 let student={
    id:1,
    name:"Divyank",
    job:"full stack developer"
 }

// There are mainly 2 ways to clone an object,

// 1st way
 const newStudent= Object.assign({}, student)

 console.log(newStudent)

//  2nd way

const newStudentwithSpreadop= {...student}
console.log(newStudentwithSpreadop)

// 21. Add an element as beginning of array ?

const employee21=[2,3,4,5,6,7,8,8]

const elemtoinsert=65
// using spread operator.
const newempl=[elemtoinsert, ...employee21]
console.log(newempl)

// Using array unshift method- Not good way to deal, cuz it make changes in origin array.

  employee21.unshift(elemtoinsert)
console.log(employee21)

// 22. Delete an element in array at last position ?

let newarr=[3,6,7,4,3,3,6,3,]

// 1st way
//  console.log(newarr.pop())

//  2nd way 
//  console.log(newarr.splice(-1))

// 3rd way 

const newchnarr=newarr.slice(0, -1)
console.log(newchnarr)

//23 Program to find number of occurrences of the charecters in the given array ?

// Input="Divyank Singh" Occurrence of i ?
// output= 2

  let inputstr="Divyank Singh"
  let accrstr="i"

  function checkaccrn(strelm, checkChar){
     let strleng=strelm.length
      
      var counter=0
     for(var i=0; i<strleng; i++){
        if(strelm[i] == checkChar){
      counter++
        }
    }
    return counter
  }
  console.log(checkaccrn(inputstr, accrstr))


//24. Find sum of natural numbers using recursion ? 

  function sumnum(num){
    if(num>0){
        return num + sumnum(num-1)
    } else{
      return num
    }

  }
   console.log(sumnum(5))

// 25 Check the number has same last digit ?

// Input= 2435345 or Input2=2423525
// output= True 

let a=45
let b=55
let c=75

 let resut1= a%10
 let resut2= b%10
 let resut3= c%10

  if(resut1===resut2 && resut1===resut3){
    console.log("All three inputs having same last number")
  }else{
    console.log("Noo, All last three digits  not same..")
  }


  //26. check substring in string?

  // input="hello bro i'm here"
  // substr="bro"

  let inputstr3="hello bro i'm here"
  let substr="bro"
      
  function checksubstr(inputstr, substr){

    var test=inputstr.includes(substr)
    return test

  }
 console.log(checksubstr(inputstr3,substr))

//  27. Print all even number from 0-10 ?

// input= 1,2,3,4,5,6,7,8,9,10
// output=num/2==0 So Ans is 2,4,6,8,10

let lastnode=10

function checkevennum(arr){
  let i 
  console.log("All even numbers from 1 to 10")
  for (i=1;i<=arr;i++)
  {
    if(i%2==0){
      console.log(i)
    }
  } 
}
checkevennum(lastnode)
 
  // 28. Print sum of number within a array ?

  // Input= [2,3,4,5,3,5,3]
  // Output=[2+3+4+5+3+5+3]=25

  let sumwithinArray=[2,3,4,5,3,5,3]
  let resultsofsum =sumwithinArray.reduce((preval, curtval)=> {
    return preval+curtval
  }
  )
  console.log(resultsofsum)
// 29.Create a function that filters out negative numbers ?

// input=[2,3,4,-5,-7,3]
// output=[-5,-7]

let negativearr=[2,3,4,-5,-7,3]
function filternegativeNum(arr){
   
  return arr.filter((elm)=> elm>0 )
}
 console.log( filternegativeNum(negativearr))

//  30. Remove the spaces found in a string ?

// Input="Div   yank"
// output="Divyank"

let Spacestr="Div  yank"

let datares=Spacestr.split(" ").join("")
console.log(datares)






// 31. JavaScript Program to Check Armstrong Number ?
// A positive integer is called an Armstrong number (of order n) if - abcd... = an + bn + cn + dn + ...

// Exmpl- 153 = 1*1*1 + 5*5*5 + 3*3*3

let numberarms=153
let temp=numberarms
let sum=0
while(temp>0){
   let add= temp%10
   console.log(add)
   sum+=add*add*add
   console.log(sum)
   temp=parseInt(temp/10)
   console.log(temp)  
}
if(sum==numberarms){
  console.log("Yes it's armstrong number")
}else{
  console.log("Yes It's not a armstrong number")
}

// 32. Print fictorial of number ?

// Try to solve it using recursion.
// Input=5 1*2*3*4*5

// program to find the factorial of a number
var num=5
function factorial(x) {
  // if number is 0
  if (x == 0) {
      return 1;
  }
  // if number is positive
  else {
      return x * factorial(x - 1);
  }
}
// calling factorial() if num is positiv
  console.log(`The factorial of ${num} is ${factorial(num)}`);

  // 33. JavaScript Program to Print the Fibonacci Sequence ?

  // The Fibonacci sequence is a set of integers (the Fibonacci numbers) that starts with a zero, followed by a one,
  //  then by another one, and then by a series of steadily increasing numbers. The sequence follows the rule that each
  //  number is equal to the sum of the preceding two numbers.

  // Ex- The Fibonacci sequence begins with the following 14 integers:

  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
    
   let A=0
   let B=1
    for( var i=1; i<=10;i++){
      let res=A+B
        A=B
        B=res
       console.log(res)
    }

    // program to display fibonacci sequence using recursion

// In a Simpler way, Fibonacci series using recursion...

 function Fibnew(num){
  if(num < 2) {
    return num;
}
   return Fibnew(num-1)+ Fibnew(num-2) 
   
 }

 const nTerm = 10;

if(nTerm<=0) {
  console.log('Enter a positive integer.');
}

  for( let i=0; i<nTerm; i++){
    Fibnew(i)
  } 

//34. Program to check a string with balanced brackets.

const Isvalid=(str)=>{

let s=str.replace(/\s+/g, '')


}

let strmmm1=("({} [] ({}))")
let strmmm2=("{{")
console.log(Isvalid(strmmm1))



// 35. input = [1,2,3,4,5,6] 
                              
// OutPut Array [1,1,2,6,24,120]

const input = [1, 2, 3, 4, 5, 6]; 

const output = [];

let productSoFar = 1;
for (let i = 0; i < input.length; i++) {
  output[i] = productSoFar;
  // debugger
  productSoFar *= input[i];
}
console.log(output)

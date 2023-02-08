
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

function findcountforeachelem(arr){
 
    const count={}
    arr.forEach((elem)=>{ count[elem]= (count[elem] || 0) +1}
    )
    return count

}
 console.log( findcountforeachelem(arr2))


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

function firstlatteruppercase(data){
     let Alluppercasename=[];
    for(let name of data){
       finalname=  name.charAt(0).toUpperCase() + name.substr(1);
       Alluppercasename.push(finalname)

    }
    return Alluppercasename
}
 console.log( firstlatteruppercase(stringdata))

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


// 16.  write a funcction to check if a given string is a Palindrome or not ? 

//   Input="level"
// Output="level"

let palInput="level"

function checkPalindrom(plstr){

    let str=plstr.toLowerCase()
    return (str== plstr.split("").reverse().join(""))

}
console.log(checkPalindrom(palInput))



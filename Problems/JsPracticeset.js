
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


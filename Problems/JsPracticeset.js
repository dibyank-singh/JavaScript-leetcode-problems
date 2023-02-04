
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
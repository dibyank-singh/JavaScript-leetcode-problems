// Quest-How to check two objects have same data using JavaScript ?

// Let's take an example 
// const obj1 = {
//     name: 'Dibyank',
//     age: 21
// };

// const obj2 = {
//     name: 'Dibyank',
//     age: 22
// };

// We have to compare both keys of object to find the same value...

// Pseudo Code:

// function samedata
// if both objects has same number of keys
// if values of obj1 matches with the value of obj2
// return true
// return false


// Solution
const obj1 = {
    name: 'Dibyank',
    age: 21
};

const obj2 = {
    name: 'Dibyank',
    age: 22
};
console.log(Object.keys(obj1))
function samedata(data, data2){

    const obj1length=Object.keys(data).length
    const obj2length=Object.keys(data2).length

    if(obj1length==obj2length){
      return Object.keys(data).some((elem)=> data2.hasOwnProperty(elem) &&  data[elem]== data2[elem] )
    }
    return false
}
console.log(samedata(obj1,obj2))


// Output based question...
let person = { name: 'Ayush' };
const members = [person];
person = null;

// Output - Null 
console.log(person); 

// output- {name: "ayush"}
console.log(members)

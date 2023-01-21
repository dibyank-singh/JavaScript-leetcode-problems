// Convert Roman number to integer 
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3 // The main problem is let's ex IX=9(I=1,X=10 so it should be 11 ) ,
//  but XI=11 , so we have to simplify it , when whne I comes before X we subs , else add 

var romanToInt = function(s) {
    
    let data={
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000
        
        
    }
  //     Approch , Will check if the previous number is smaller than current one
//    , will substrates, else will add normally 
    
    let result=0;
    for(let i=0 ; i < s.length ; i++){
        
        if (data[s[i]] < data[s[i+1]]) {
              result-=data[s[i]]
          } 
          else {
              result+=data[s[i]]
          }
        
    }
       return result ;
      
      
  };
//   const resp=romanToInt("IV")=4
  const resp=romanToInt("VI") 
  console.log(resp)

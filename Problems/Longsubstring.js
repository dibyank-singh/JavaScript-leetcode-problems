// longest substring without repeating characters
// For ex- Name="Divkvidkk"
// Ans- Divk 


// Qs- Find the length of non-repeated substring 
// Input - abcabcbb
// Output-3
// Note- abc is the longest non-repeated substing 


var longestsubstring= function(s){
    
    // Will use sliding window approch - Complx O(n)
      
    let end=0;
    let start=0;
    let maxlength=0;
    
    const uniquevalue= new Set()

    while(end < s.length){
      if(!uniquevalue.has(s[end])){
          uniquevalue.add(s[end]);
          end++;
          maxlength=Math.max(maxlength, uniquevalue.size)
      }else{
          uniquevalue.delete(s[start])
          start++
      }

    }
    return maxlength;

};

// const result=longestsubstring("abcabcbb")
const result=longestsubstring("abcabcbbashbasffhef ")
console.log(result)

// Output 1- 3"abc" , 2- 5 "hbasf"


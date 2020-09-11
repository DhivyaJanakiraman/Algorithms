// Perform string compression based on counts of repeated characters.
// Eg 'aabcccccaaa' -> 'a2b1c5a3'. If compressed string length is greater than
// original string length, return the input string

function compressString(str) {
  let map = {};
  let result = "";
  map[str[0]] = 1;
  for (let i = 1; i < str.length; i++) {
    if (!map[str[i]]) {
      result = result + (Object.keys(map)[0] + Object.values(map)[0]);
      map = {};
      map[str[i]] = 1;
    } else if (map[str[i]]) {
      map[str[i]] = map[str[i]] + 1;
    }
  }
  result = result + (Object.keys(map)[0] + Object.values(map)[0]);
  return result.length > str.length ? str : result;
}


// method 2 without using map

// function compressString(str) {
//   let resultStr = "";
//   let count = 0;
 
//   for(let i=0; i<str.length; i++){
//     let currChar = str[i]; 
//     let nextChar = str[i+1];
 
//     if(nextChar && (currChar === nextChar)){
//       count += 1;
//     } else {
//       resultStr += (currChar + (count+1));
//       count = 0;
//     } 
//   }
 
//   return resultStr.length > str.length ? str : resultStr;
//  }
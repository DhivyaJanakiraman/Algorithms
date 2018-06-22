// find the first non repeated character in a string/sentence

function nonRepeatedChar(str) {
  if (str.length === 1 || str === null) {
    return str;
  }
  str = str.toLowerCase();
  var map = {};
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] + 1 || 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) {
      return str[i];
    }
  }
  return "Not found";
}

nonRepeatedChar("Aabbcdd");
// Input : "Aabbcdd" output: c

/*
function nonRepeatedChar(str){
  if(str === null || str.length === 1){
    return str;
  }
  str = str.toLowerCase();
  
  for(let i=0; i<str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      return str[i];
    }
  }
  return "Not found";
}
*/

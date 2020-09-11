function longestPalindrominSubstring(str) {
    if(str.length <= 0){
        return null;
    }

    if(str.length === 1){
        return str;
    }

    let longest = str.subString(0,1);
    let tmp;
    for(let i=0; i<str.length; i++){
        tmp = helper(str, i, i);
        if(tmp.length > longest.length){
            longest = tmp;
        }

        tmp = helper(str, i, i+1);
        if(tmp.length > longest.length){
            longest = tmp;
        }
    }
    return longest;
}

function helper(str, begin, end){
    while(begin >=0 && end <= str.length -1 && str[begin] === str[end]){
        begin --;
        end++;
    }
    return str.subString(begin+1, end);
}
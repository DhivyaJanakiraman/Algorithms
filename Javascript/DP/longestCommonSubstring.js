function longestCommonSubstring(a, b) {
    let m = a.length;
    let n = b.length;

    let dp = [];
    let max = 0;

    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++){
            if(a[i] === b[j]){
                if(i === 0 || j === 0){
                    dp[i][j] = 1; //abc c , a zba
                } else {
                    dp[i][j] = 1 + dp[i-1][j-1];
                }

                if(dp[i][j] > max){
                    max = dp[i][j];
                }
            }
        }
    }

    return max;
}
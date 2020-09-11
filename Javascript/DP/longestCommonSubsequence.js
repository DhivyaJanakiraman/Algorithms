function longestCommonSubsequence(a, b){
    let m = a.length;
    let n = b.length;
    let dp = [];

    for(let i=0; i<=m; i++){
        for(let j=0; j<=n; j++){
            if(i===0 || j===0){
                dp[i][j] = 0;
            } else if(a[i-1] === b[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    return dp[m][n];
}
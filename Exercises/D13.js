function isInterleave(s1, s2, s3) {
    const l1 = s1.length;
    const l2 = s2.length;
    const l3 = s3.length;
    if (l3 != l1 + l2) {
        return false;
    }
    const dp = Array.from(Array(l1+1),()=>Array(l2+1).fill(false));
    for (let i = 0; i <= l1; i++) {
        for (let j = 0; j <= l2; j++) {
            if (i == 0 && j == 0) {
                dp[i][j] = true;
            } else if (i == 0) {
                dp[i][j] = dp[i][j-1] && s2[j-1] == s3[i+j-1];
            } else if (j == 0) {
                dp[i][j] = dp[i-1][j] && s1[i-1] == s3[i+j-1];
            } else {
                dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) || (dp[i][j-1] && s2[j-1] == s3[i+j-1]);
            }
        }
    }
    console.log(dp[l1][l2]);
    return dp[l1][l2];
}

isInterleave("aabcc", "dbbca", "aadbbcbcac");

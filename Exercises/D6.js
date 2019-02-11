function lcs(X, Y) {
    const m = X.length;
    const n = Y.length;
    const L = Array.from(Array(m+1),()=>Array(n+1).fill(0));

    // Following steps build L[m+1][n+1] in bottom up fashion. Note 
    // that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1]  
    for (let i=0; i<=m; i++) { 
        for (let j=0; j<=n; j++) { 
            if (i == 0 || j == 0) 
                L[i][j] = 0; 
            else if (X.charAt(i-1) == Y.charAt(j-1)) 
                L[i][j] = L[i-1][j-1] + 1; 
            else
                L[i][j] = Math.max(L[i-1][j], L[i][j-1]); 
        } 
    } 

    console.log(L);

    // Following code is used to print LCS 
    let index = L[m][n]; 
    let temp = index; 

    // Create a character array to store the lcs string 
    const lcs = []; 
    lcs[index] = ''; // Set the terminating character 

    // Start from the right-most-bottom-most corner and 
    // one by one store characters in lcs[] 
    let i = m, j = n; 
    while (i > 0 && j > 0) { 
        // If current character in X[] and Y are same, then 
        // current character is part of LCS 
        if (X.charAt(i-1) == Y.charAt(j-1)) { 
            // Put current character in result 
            lcs[index-1] = X.charAt(i-1);  
              
            // reduce values of i, j and index 
            i--;  
            j--;  
            index--;      
        } 

        // If not same, then find the larger of two and 
        // go in the direction of larger value 
        else if (L[i-1][j] > L[i][j-1]) 
            i--; 
        else
            j--; 
    } 

    console.log("LCS of "+X+" and "+Y+" is "); 
    for(let k=0;k<=temp;k++) {
        console.log(lcs[k]); 
    }
       
} 
  
const X = "AGGTAB"; 
const Y = "GXTXAYB"; 
lcs(X, Y); 

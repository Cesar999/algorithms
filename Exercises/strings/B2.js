//Find the distance between two strings (Levenshtein)

function min(x, y, z) { 
    if (x <= y && x <= z) return x; 
    if (y <= x && y <= z) return y; 
    else return z; 
} 

function editDistDP(str1, str2) { 
    let m = str1.length;
    let n = str2.length;
        // Create a table to store results of subproblems 
    const dp = Array.from(Array(m+1),()=>Array(n+1));
       
        // Fill dp[][] in bottom up manner 
    for (let i=0; i<=m; i++) { 
        for (let j=0; j<=n; j++) {
                if (i==0){
                    dp[i][j] = j;  // Min. operations = j 
                }
                else if (j==0) {
                    dp[i][j] = i; // Min. operations = i 
                }
                // If last characters are same, ignore last char 
                // and recur for remaining string 
                else if (str1.charAt(i-1) == str2.charAt(j-1)){
                    dp[i][j] = dp[i-1][j-1]; 
                } 
                // If the last character is different, consider all 
                // possibilities and find the minimum 
                else{
                    dp[i][j] = 1 + 
                    min(dp[i][j-1],  // Insert 
                        dp[i-1][j],  // Remove 
                        dp[i-1][j-1]); // Replace 
                }
            } 
        } 
        console.log(`Distance: ${dp[m][n]}`);
        return dp; 
    } 

    function min_aux(x, y, z) { 
        if (x <= y && x <= z) return 1; 
        if (y <= x && y <= z) return 2; 
        else return 3; 
    } 

function checkEdit(T, str1, str2){
    console.log(`${str1} to ${str2}`);
    let i = T.length - 1;
    let j = T[0].length - 1;
    let temp = str2;
    while(true) {
        if (i == 0 || j == 0) {
            break;
        }
        if (str1[i-1] == str2[j-1]) {
            i = i-1;
            j = j-1;
        } else if (T[i][j] == T[i-1][j-1] + 1){
            temp = replaceChar(temp,j-1,str1[i-1]);
            console.log(`Edit ${str2[j-1]} to ${str1[i-1]} --> ${temp}`);
            i = i-1;
            j = j-1;
        } else if (T[i][j] == T[i-1][j] + 1) {
            temp = insertChar(temp,j,str1[i-1]);
            console.log(`Insert ${str1[i-1]} --> ${temp}`);
            i = i-1;
        } else if (T[i][j] == T[i][j-1] + 1){
            temp = deleteChar(temp, j-1);
            console.log(`Delete ${str2[j-1]} --> ${temp}`);
            j = j -1;
        } else {
            console.log("");
        }

    }
}

function replaceChar(str2, index, replacemment){
    return str2.substr(0, index) + replacemment + str2.substr(index+1);
}

function insertChar(str2, index, insert){
    return str2.substr(0, index) + insert + str2.substr(index);
}

function deleteChar(str2, index){
    return str2.substr(0, index) + str2.substr(index+1);
}

const str1 = "sundays"; 
const str2 = "saturday"; 
let arr = editDistDP(str1, str2);
checkEdit(arr, str1, str2); 
// "Given a number that can be divided into at least two other integer numbers (eg: 10 = 5+2+2+1), find the largets value that can be obtained from multiplying its parts.
// Example:
// 2 = 1 * 1 = 1
//7 = 3 * 4 = 12"

function power(x, a) { 
        res = 1; 
        while (a>0){ 
            if ((a & 1)>0) 
                res = res * x; 
            x = x * x; 
            a >>= 1; 
        } 
        return res; 
    } 

    // Method returns maximum product obtained by 
    // breaking N 
    function breakInteger(N) { 
        // base case 2 = 1 + 1 
        if (N == 2) {
            return 1; 
        }
            
        // base case 3 = 2 + 1 
        if (N == 3) {
            return 2;
        }
             
        let maxProduct=-1; 
      
        // breaking based on mod with 3 
        switch (N % 3) { 
            // If divides evenly, then break into all 3 
            case 0: 
                maxProduct = power(3, N/3); 
                break; 
      
            // If division gives mod as 1, then break as 
            // 4 + power of 3 for remaining part 
            case 1: 
                maxProduct = 2 * 2 * power(3, (N/3) - 1); 
                break; 
      
            // If division gives mod as 2, then break as 
            // 2 + power of 3 for remaining part 
            case 2: 
                maxProduct = 2 * power(3, N/3); 
                break; 
        } 
        return maxProduct; 
    } 
      
    let maxProduct = breakInteger(10); 
    console.log(maxProduct); 

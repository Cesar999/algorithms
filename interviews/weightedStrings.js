// Weighted Strings
// In Hacker Land every Character has a weight. The weight of an English uppercase alphabet is given below:
// A = 1
// B = 2*A + 2
// C = 3*B + 3
// D = 4*C + 4
// .
// .
// .
// Y = 25*X + 25
// Z = 26*Y + 26

// The weight of any string made up these characters is the summation of weights of each character. Given a total string weight, determine shortest string of that given weight. If there is more than one solution, return the lexicographically smallest of them. For example, given  weight = 25, and the weights of the first few characters of the alphabet are A = 1, B = 4, C = 15, D = 64 it is certain that no letter larger than C is required. Some of the strings with a total weight equal to the target are ABBBBBB, AABBC, and AAAAABBBBB. The shortest of these is AABBC. While any permutation of these characters will have the same weight, this is the lexicographically smallest of them.

// Function Description
// Complete the function smallestString in the editor below. The function must return the shortest string of the target weight. If there are multiple answers, return the lexicographically smallest of them.

// smallestString has the following parameter(s):
// weight: a long integer that denotes the target weight

// Constrains
// 1 ≤ weight ≤ 106


function smallestString(weight){
    const charsArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    const charsValues = [1];
    for(let i=1; i<charsArr.length; i++){
        charsValues.push((i+1)*charsValues[i-1]+(i+1));
    }

    let idx = 0;
    for(let i=0; charsValues[i]<weight; i++){
        idx = i;
    }

    console.log(charsValues[idx]);

    let str = '';
    let acc = 0;

    while(weight !== acc){
        if(acc+charsValues[idx]>weight){
            idx--;
        } else {
            acc += charsValues[idx];
            str = charsArr[idx] + str;
        }
    }
    
    return str;
}

console.log(smallestString(25));
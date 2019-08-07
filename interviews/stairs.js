
function stairs(num){
    let char = '#';
    let output = '';
    for(let i=1; i<=num; i++){
        output += char;
        console.log(output);
    }
}

stairs(5);
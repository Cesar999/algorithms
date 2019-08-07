function pyramidByHeight(n){
    let char = '#';
    let fill = ' ';
    let floor = '';
    let items = 1;
    let spaces = n - 1;
    for(let i=1; i<=n; i++){
        floor = fill.repeat(spaces) + char.repeat(items) + fill.repeat(spaces);
        items += 2;
        spaces -=1;
        console.log(floor);
    }
}

pyramidByHeight(5);

//-------------------------------
function parenthesis(num, arr=[], pos=0, open=0, close=0){
    if(close===num){
        let temp = '';
        for(let item of arr){
            temp+=item;
        }
        console.log(temp);
        return;
    } else {
        if(open>close){
            arr[pos] = '}';
            parenthesis(num, arr, pos+1, open, close+1);
        }
        if(open<num){
            arr[pos] = '{';
            parenthesis(num, arr, pos+1, open+1, close);
        }
    }
}

parenthesis(3);
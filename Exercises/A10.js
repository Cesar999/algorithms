function shuffleArray(arr){
    for (let i = arr.length-1; i >=0; i--) {
        
        let randomIndex = Math.floor(Math.random()*(i+1)); 
        let itemAtIndex = arr[randomIndex]; 
         
        arr[randomIndex] = arr[i]; 
        arr[i] = itemAtIndex;
    }
    console.log(arr);
}

let arr = [1,2,3,4,5,6,7,8,9];
shuffleArray(arr);
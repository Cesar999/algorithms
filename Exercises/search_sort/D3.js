//Find the 2nd largest number in a stream.

function get_1st_2nd(){
    let largest = 0;
    let second = 0;
    for(let i=0; i<arr.length; i++){
        if(largest<arr[i]){
            second = largest;
            largest = arr[i];
        } else if(second<arr[i] && arr[i]!==largest){
            second = arr[i];
        }
    }
    return [largest, second];
}

class SecondLargest{
     constructor(arr){
        this.items = arr;
        this.largest = get_1st_2nd(this.items)[0];
        this.second = get_1st_2nd(this.items)[1];
     }

     newNum(newNum){
        if(this.largest<newNum){
            this.second = this.largest;
            this.largest = newNum;
        } else if(this.second<newNum && newNum!==this.largest){
            this.second = newNum;
        }
        console.log(this.second);
     }
}
const arr = [20,7,19,3,9,10,2,11,1,12,7,13,6,14,8,15,5,16,17,4,18];
const sl = new SecondLargest(arr);
sl.newNum(19.5);
sl.newNum(19.2);
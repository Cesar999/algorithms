//Implement merge sort for linked lists

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    traverse(){
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }

    getMiddle(h){ 
        //Base case 
        if (h == null) {
            return h; 
        }
            
        let fast = h.next; 
        let slow = h; 
          
        // Move fast by two and slow by one 
        // Finally slow will point to middle node 
        while (fast != null) { 
            fast = fast.next; 
            if(fast!=null) { 
                slow = slow.next; 
                fast = fast.next; 
            } 
        } 
        return slow; 
    } 

    mergeSort(h){ 
        // Base case : if head is null 
        if (h == null || h.next == null) { 
            return h; 
        } 
  
        // get the middle of the list 
        let middle = this.getMiddle(h); 
        let nextofmiddle = middle.next; 
  
        // set the next of middle node to null 
        middle.next = null; 
  
        // Apply mergeSort on left list 
        let left = this.mergeSort(h); 
  
        // Apply mergeSort on right list 
        let right = this.mergeSort(nextofmiddle); 

        // Merge the left and right lists 
        let sortedlist = this.sortedMerge(left, right); 
        return sortedlist; 
    } 

    sortedMerge(a, b)  { 
        let temp_a;
        let temp_b;
        if(a===null){
           temp_a = null;
        } else {
            temp_a = a.val;
        }

        if(b===null){
            temp_b = null;
        } else {
            temp_b = b.val;
        }
        console.log(`${temp_a} ${temp_b}  --- Sorted`);

        let result = null; 
        /* Base cases */
        if (a == null) {
            return b;
        }
        if (b == null) {
            return a; 
        }

        /* Pick either a or b, and recur */
        if (a.val <= b.val) { 
            this.head=this.head.val<=a.val?this.head:a;
            this.tail=this.tail.val>=b.val?this.tail:b;
            result = a; 
            result.next = this.sortedMerge(a.next, b); 
        }  
        else { 
            this.head=this.head.val<=b.val?this.head:b;
            this.tail=this.tail.val>=a.val?this.tail:a;
            result = b; 
            result.next = this.sortedMerge(a, b.next); 
        } 
        console.log(result, 'Result');
        return result; 
    }

}

let sl = new SinglyLinkedList();
sl.push('F');
sl.push('E');
sl.push('C');
sl.push('B');
sl.push('D');
sl.push('A');
sl.traverse();
sl.mergeSort(sl.head);
console.log('-------');
sl.traverse();
console.log(sl.head.val, sl.tail.val);

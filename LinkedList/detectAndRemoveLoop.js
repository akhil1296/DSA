class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LoopInLL {

    detectAndRemoveLoop(head) {
        let set = new Set();
        let current = head ; 
        let prev = null;
        while(current !== null){
            if(set.has(current)){
                console.log("yes loop is detected, now removing it");
                prev.next = null;
                break ;
            }else{
                set.add(current);
                prev = current ;
                current = current.next ;
            }
        }
    }

    printLinkedList(head) {
        let current = head;
        while (current !== null) {
            console.log(current.data, '->');
            current = current.next;
        }
    }
}

const obj = new LoopInLL();
let arr = [0, 1, 2, 3, 4, 5];
let head = null;

head = new Node(arr[0]) ;
head.next = new Node(9) ;
head.next.next = new Node(arr[1]) ;
head.next.next.next = new Node(arr[2]) ;
head.next.next.next.next = new Node(arr[3]) ;
head.next.next.next.next.next = new Node(arr[4]) ;
head.next.next.next.next.next.next = new Node(arr[5]) ;
head.next.next.next.next.next.next.next = head.next.next.next ;

console.log("Printing the nodes after adding at head  : ");
// obj.printLinkedList(head);

// get the middle element of linked list
let ans = obj.detectAndRemoveLoop(head);
console.log(" ans ", ans);
console.log( "After removing loop in LL : ");
obj.printLinkedList(head);


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Kreverse {

    insertAtHead(head, data) {
        if (head === null) {
            head = new Node(data);
            return head;
        }
        let newNode = new Node(data);
        newNode.next = head;
        head = newNode;
        return head;
    }

    k_reverse(head, k) {
       if(head === null){
           return head ;
       }
       let prev = null ;
       let current = head ;
       let temp;
       let count = 1 ;
       
       while(current !== null && count <= k){
           temp = current.next ;
           current.next = prev ;
           prev = current ;
           current = temp ;
           count ++;
       }
       if( temp !== null ){
           head.next = this.k_reverse(temp, k);
       }
       return prev;
    }

  
    printLinkedList(head) {
        let current = head;
        while (current !== null) {
            console.log(current.data, '->');
            current = current.next;
        }
    }
}

const obj = new Kreverse();
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let head = null;
for (let i = 0; i < arr.length; i++) {
    head = obj.insertAtHead(head, arr[i]);
}
console.log("Printing the nodes after adding at head  : ");
obj.printLinkedList(head);

// Reversing the linked list for k
let k = 3 ;
head = obj.k_reverse(head, k);
console.log("Printing the reverse linked list from recursion : ");
obj.printLinkedList(head);


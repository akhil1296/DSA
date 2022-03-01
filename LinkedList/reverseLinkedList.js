class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

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

    revRec(head){
        if(head === null || head.next === null){
            return head;
        }
        let smallHead = this.revRec(head.next);
        head.next.next = head ;
        head.next = null ;

        return smallHead;
    }

    revIter(head){
        if(head === null || head.next === null){
            return head;
        }
        let current = head ;
        let prev = null ;
        let temp ;
        while(current !== null){
            temp = current.next ;
            current.next = prev ;
            prev = current ;
            current = temp ;
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

const obj = new LinkedList();
let arr = [4, 3, 2, 1, 0];
let head = null;
for (let i = 0; i < arr.length; i++) {
    head = obj.insertAtHead(head, arr[i]);
}
console.log("Printing the nodes after adding at head  : ");
obj.printLinkedList(head);

// Reversing the linked list by recursive way
head = obj.revRec(head);
console.log("Printing the reverse linked list from recursion : ");
obj.printLinkedList(head);

// Reversing the linked list by iterationn way
head = obj.revIter(head);
console.log("Printing the reverse linked list from iteration : ");
obj.printLinkedList(head);

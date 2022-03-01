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

    insertInMiddle(head, pos, data) {
        // position can be 0 , mid, last
        if (pos === 0) {
            // insert at head
            let newNode = new Node(data);
            newNode.next = head;
            head = newNode;
            return head;
        }
        // if position is in the middle
        let current = head;
        let count = 0;
        while (current !== null && count < pos - 1) {
            count++;;
            current = current.next;
        }
        let newNode = new Node(data);
        newNode.next = current.next;
        current.next = newNode;
        return head;
    }

    insertInTheEnd(head, data) {
        if (head === null) {
            let newNode = new Node(data);
            head = newNode ;
            return head;
        }
        let current = head ;
        while(current.next !== null){
            current = current.next ;
        }

        let newNode = new Node(data);
        current.next = newNode ;
        current = newNode ;

        return head;
    }

    deleteFromHead(head){
        if(head === null){
            return head ;
        }
        let newNode = head.next ;
        head = newNode ;
        return head ;
    }

    deleteFromMiddle(head, pos){
        if( head === null ){
            return null ;
        }
        let count = 0 ; let current = head ;
        while(current !== null && count < pos-1){
            // 0 1 2 3 4
            current = current.next;
            count++;
        }
        current.next = current.next.next ;
        console.log(current);
        return head ;
    }

    deleteFromEnd(head){
        if(head === null){
            return head ;
        }
        let current = head ;
        while(current.next.next !== null){
            current = current.next ;
        }
        current.next = null;
        return head;
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
let arr = [4, 3, 2];
let head = null;
for (let i = 0; i < arr.length; i++) {
    head = obj.insertAtHead(head, arr[i]);
}
console.log("Printing the nodes after adding at head  : ");
obj.printLinkedList(head);

head = obj.insertInMiddle(head, 0, 0); // head, pos, data
console.log("Printing after inserting at 0th position ");

obj.printLinkedList(head);

head = obj.insertInMiddle(head, 1, 1); // head, pos, data
console.log("Printing after inserting at 1st positon ");

head = obj.insertInMiddle(head, 5, 5); // head, pos, data
console.log("Printing after inserting at last positon ");

obj.printLinkedList(head);

head = obj.insertInTheEnd(head, 6);
console.log("Printing after inserting in the end");

obj.printLinkedList(head);

head = obj.deleteFromHead(head); 
console.log("Printing after deleting from the head");

obj.printLinkedList(head);

head = obj.insertAtHead(head, 0);
head = obj.deleteFromMiddle(head, 3); 
console.log("Printing after deleting from the position 3");

obj.printLinkedList(head);

head = obj.insertInMiddle(head, 3, 3);
head = obj.deleteFromMiddle(head, 6); 
console.log("Printing after deleting from last position");

obj.printLinkedList(head);

head = obj.deleteFromEnd(head); 
console.log("Printing after deleting from last position");

obj.printLinkedList(head);

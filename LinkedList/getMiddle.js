class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MiddleElement {

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

    getMiddle(head) {
       let slow = head ;
       let fast = head ;
    //    while(fast !== null && fast.next !== null){
    //        fast = fast.next.next ;
    //        slow = slow.next ;
    //    }
    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next ;
        slow = slow.next ;
    }
       return slow;
    }

  
    printLinkedList(head) {
        let current = head;
        while (current !== null) {
            console.log(current.data, '->');
            current = current.next;
        }
    }
}

const obj = new MiddleElement();
let arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let head = null;
for (let i = 0; i < arr.length; i++) {
    head = obj.insertAtHead(head, arr[i]);
}
console.log("Printing the nodes after adding at head  : ");
obj.printLinkedList(head);

// get the middle element of linked list
let middle = obj.getMiddle(head);
console.log(" middle element is : ", middle.data);


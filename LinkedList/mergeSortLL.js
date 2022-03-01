class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class MergeSortLinkedList {

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
       let fast = head.next ;
       while(fast !== null && fast.next !== null){
           fast = fast.next.next ;
           slow = slow.next ;
       }
       return slow;
    }

    merge(head){
        if(head === null || head.next === null){
            return head ;
        }
        let mid = this.getMiddle(head);
        let nextOfMiddle = mid.next ;
        mid.next = null ;
        let a = this.merge(head);
        let b = this.merge(nextOfMiddle);

        return this.mergeSortLL(a, b) ;
    }
  
    mergeSortLL(a, b){
        if(a === null){
            return b ;
        }
        if( b === null){
            return a ;
        }
        let c ;
        if(a.data < b.data){
            c = a ;
            c.next = this.mergeSortLL(a.next, b) ;
        }else{
            c = b ;
            c.next = this.mergeSortLL(a, b.next) ;
        }
        return c ;
    }
    printLinkedList(head) {
        let current = head;
        while (current !== null) {
            console.log(current.data, '->');
            current = current.next;
        }
    }
}

const obj = new MergeSortLinkedList();
let arr = [9, 6, 5, 8, 7, 1, 0, 4, 3, 2];
let head = null;
for (let i = 0; i < arr.length; i++) {
    head = obj.insertAtHead(head, arr[i]);
}
console.log("Printing the nodes after adding at head  : ");
obj.printLinkedList(head);

// get the middle element of linked list
head = obj.merge(head);
console.log("Printing the nodes after merge sort  : ");
obj.printLinkedList(head);


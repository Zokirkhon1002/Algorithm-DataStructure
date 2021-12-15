/*
Linked Lists
*/

class Node{
    /**
     * constructor(Node maker)
     * @data => yangi tugun kiriting.
     */
    constructor(data){
        this.data = data,
        this.next = null;
    }
}

/**
 * LinkedList Class
 */
class Linked_list{
    constructor() {
        this.head = null;
    }

    /**
     * console ga natijalarni chiqarish
     */
    printList() {
        let temp = this.head
        while (temp){
            console.log(temp['data'])
            temp = temp.next;
        }
    }

}


//  Linked list obyekt yaratib olamiz
const Llist = new Linked_list();



// Uchta node (tugun) yaratamiz
Llist.head = new Node("Dushanba")
const tuesday = new Node("Seshanba")
const wednesday = new Node("Chorshanba")





// Tugunlarni bog'laymiz
Llist.head.next = tuesday
tuesday.next = wednesday





// Linked Listni konsolga chiqaramiz
Llist.printList()
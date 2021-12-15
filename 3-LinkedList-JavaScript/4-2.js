/*
Linked Lists
*/

class Node{
    /**
     * constructor(Node maker)
     * @param data => yangi tugun kiriting.
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
    
    /**
     * 
     * @param new_data Listning boshiga tugun qo'shish
     */
    prepend(new_data){
        // yangi node(tugun) yaratamiz
        let new_node = new Node(new_data);
        // List boshini keyingi o'ringa suramiz
        new_node.next = this.head;
        // Yangi node(tugun)ni list boshiga qo'yamiz
        this.head = new_node;
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
// Llist.printList()





// List boshiga yangi tugun qo'shamiz
Llist.prepend('Yakshanba')
Llist.printList()
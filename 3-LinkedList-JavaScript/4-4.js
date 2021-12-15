/*
Linked Lists
*/

class Node{
    /**
     * constructor(Node maker)
     * Tugun (node) obyekti, ya'ni boshqa ma'lumotgan yo'naltirib turadi
     * @param data  yangi tugun kiriting.
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
    /**
     * Biror element dan keyin yangi element ni qo'shish
     * List o'rtasiga element qo'shamiz
     * 
     * @param  prev_node Linked listdagi elementi kiriting
     * @param  new_data Yangi elementi kiriting
     */
    insertAfter(prev_node,new_data){
        // prev_node ni tekshirib ko'ramiz, tugun bor yoki yo'qligini
        if(prev_node === null){
            console.log("Tugun mavjud emas!")
            return;
        }
        // Yangi tugun qo'shamiz
        let new_node = new Node(new_data)
        // Yangi node(tugun)ni keying node(tugun)ga bog'laymiz
        new_node.next = prev_node.next;
        // Avvalgi node(tugun)ni yangi node(tugun)ga bog'laymiz
        prev_node.next = new_node;
    }

    /**
     * List oxiriga yangi element qo'shish
     * 
     * @param  new_data Yangi elementi kiriting
     */
    append(new_data){
        // Yangi tugun qo'shamiz
        let new_node = new Node(new_data)
        // List bo'sh emasligini tekshiramiz
        if (this.head == null){
            // Bo'sh bo'lsa yangi tugun list boshiga tushadi
            this.head = new_node
            return;
        }
        // Aks holda List oxiriga boramiz
        let last = this.head;
        while (last.next){
            last = last.next
        }
        // List oxiriga qo'shamiz
        last.next = new_node;
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
// Llist.printList()



// List o'rtasiga element qo'shamiz
Llist.insertAfter(Llist.head.next.next.next,"Payshanba")
// Llist.printList()



// List oxiriga tugun qo'shamiz
Llist.append("Juma")
Llist.append("Shanba")
Llist.printList()

"""
Linked lists
"""

class Node:
    """Tugun (node) obyekti, ya'ni boshqa ma'lumotgan yo'naltirib turadi"""
    def __init__(self,data):
        self.data = data
        self.next = None

class LinkedList:
    """Linked List obyekti"""
    def __init__(self):
        self.head = None
    
    def printList(self):
        """Console ga chiqarish"""
        temp = self.head;
        while temp:
            print(temp.data)
            temp = temp.next
    
    def unshift(self, new_data):
        """List boshiga tugun qo'shish"""
        # yangi node(tugun) yaratamiz
        new_node = Node(new_data)
        # List boshini keyingi o'ringa suramiz
        new_node.next = self.head;
        # Yangi nodeni list boshiga qo'yamiz
        self.head = new_node;
    
    def insertAfter(self, prev_node, new_data):
        """Biror element dan keyin yangi element ni qo'shish"""
        # prev_node ni tekshirib ko'ramiz, tugun bor yoki yo'qligini
        if prev_node == None:
            print("Tugun mavjud emas!")
            return;
        # Yangi tugun qo'shamiz
        new_node = Node(new_data)
        # Yangi tugunni keyingi tugunga bog'laymiz
        new_node.next = prev_node.next
        # Avvalgi tugunni yangi tugunga bog'laymiz
        prev_node.next = new_node;
    





### Linked list obyekt yaratib olamiz
Llist = LinkedList();


### Uchta node (tugun) yaratamiz
Llist.head = Node("Dushanba")
tuesday = Node("Seshanba")
wednesday = Node("Chorshanba")



### Tugunlarni bog'laymiz
Llist.head.next = tuesday
tuesday.next = wednesday


### Linked Listni konsolga chiqaramiz
# Llist.printList()



print("\n")
### List boshiga yangi tugun qo'shamiz
Llist.unshift('Yakshanba')
# Llist.printList()




# List o'rtasiga element qo'shamiz

Llist.insertAfter(Llist.head.next.next.next,"Payshanba")
Llist.printList()
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
        temp = self.head;
        while temp:
            print(temp.data)
            temp = temp.next





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
Llist.printList()
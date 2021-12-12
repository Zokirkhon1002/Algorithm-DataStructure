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


### Linked list obyekt yozamiz
Llist = LinkedList();


### Uchta node (tugun) yaratamiz
Llist.head = Node("Dushanba")
tuesday = Node("Seshanba")
wednesday = Node("Chorshanba")



print(Llist.head.data) # Dushanba
print(Llist.head.next) # None, tugunlarni bog'lashimiz kerak


print(tuesday.data) # Seshanba
print(wednesday.data+'\n') # Chorshanba





### Tugunlarni bog'laymiz
Llist.head.next = tuesday
tuesday.next = wednesday

print(Llist.head.data) # Dushanba
print(Llist.head.next.data) # None ning o'rniga obyekt chiqishi kerak, Seshanba
print(Llist.head.next.next.data) # Chorshanba

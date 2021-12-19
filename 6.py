# theme: Stack Data Structure
class Stack:
    """Stack Obyekti"""
    def __init__(self):
        self.stack = []
    
    def isEmpty(self):
        """Ro'yxat bo'sh ekanligini tekshirish"""
        return len(self.stack) == 0;
    
    def push(self,newData):
        """Element qo'shish"""
        self.stack.append(newData)
        return True;
    
    def pop(self):
        """Element sug'urib olish"""
        if self.isEmpty():
            return "Stack is empty"
        else:
            return self.stack.pop()
    
    def peek(self):
        """Eng ustki elementni ko'rish"""
        if self.isEmpty():
            return "Stack is empty"
        else:
            return self.stack[-1]


if __name__=='__main__':
    stack = Stack()
    stack.push(5)
    stack.push(6)
    stack.push(7)
    print("Top element: ", stack.peek())
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
# graph ma'lumotlar tuzilmasi va breadth first search algoritm
from collections import deque;

graph = {
    'zokirkhon': ['ali', 'vali', 'tohir'],
    'ali': ['aziza', 'olim'],
    'vali': ['botir', 'ziyoda'],
    'tohir': ['elon musk', 'mohir'],
    'olim': [],
    'aziza': [],
    'botir': [],
    'ziyoda': ['aziza'],
    'elon musk': [],
    'mohir': []
}



def search(startNode,target):
    searchQueue = deque();
    searchQueue += graph[startNode]
    searched = set()
    
    while searchQueue:
        print(searchQueue)
        person = searchQueue.popleft();
        if person not in searched:
            if person == target:
                print(f"{target}ni topdik!")
                print(searched)
                return True;
            else:
                searchQueue += graph[person]
                searched.add(person)
    return False;


search('zokirkhon','botir')
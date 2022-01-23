# Dijsktra algoritim
graph={
    'A':{'B':2, 'C':6},
    'B':{'C':3, 'D':4},
    'C':{'D':5, 'E':6},
    'D':{'F':5},
    'E':{'F':0},
    'F':{}
}
narxlar = {
    'B': 2,
    'C': 6,
    'D': float('inf'),
    'E': float('inf'),
    'F': float('inf')
}
otalar = {
    'B': 'A',
    'C': 'A',
    'D': None,
    'E': None,
    'F': None,    
}
ishlandi = []

# 1. Eng arzon tugun topish uchun funksiya

def eng_arzon_tugun_top(narxlar):
    eng_arzon = float('inf')
    eng_arzon_tugun = None
    for tugun in narxlar:
        narx = narxlar[tugun]
        if narx < eng_arzon and tugun not in ishlandi:
            eng_arzon = narx
            eng_arzon_tugun = tugun
    return eng_arzon_tugun

print(narxlar)
tugun = eng_arzon_tugun_top(narxlar)
print(f"Eng arzon tugun: {tugun}")


# 2. Dijkstra Algoritmi kodi

while tugun is not None:
    qoshnilar = graph[tugun] # Eng yaqin tugunning qo'shnilarini topamiz
    narx = narxlar[tugun] # Ularning narxini olamiz
    for qoshni in qoshnilar.keys(): # Har bir qo'shni uchun...
        yangi_narx = narx + qoshnilar[qoshni] # shu qo'shniga borish narxini hisoblaymiz
        if narxlar[qoshni]>yangi_narx: # agar bu tugunga borish avvalgidan arzonroq bo'lsa:
            narxlar[qoshni] = yangi_narx # shu tugunga borish narxini yangilaymiz
            otalar[qoshni] = tugun # va bu tugun otasini ham yangilaymiz.
    ishlandi.append(tugun) # tugunn ishlov berilgan tugunlar qatoriga qo'shamiz
    tugun = eng_arzon_tugun_top(narxlar) 
print(narxlar)
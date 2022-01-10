# hash jadvali
mevalar = {
    "hurmo":50_000,
    "tarvuz":12_000,
    "anor":20_000,
    "limon":12_000,
    "nok":10_000,
    "banan":25_000,
    "apple":11_000
}
# fruitName = input("Meva nomini kiriting: ")

# if(mevalar.get(fruitName.lower()) == None):
#     print("Siz kiritgan meva nomi yo'q")
# else:
#     print(f"{fruitName}: {mevalar[fruitName.lower()]}")



# 3-HASH FUNKSIYA. TUB SONLAR VA BO'LINMA
alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
primeNumbers = [
  '2',   '3',  '5',  '7',  '11',
  '13',  '17', '19', '23', '29',
  '31',  '37', '41', '43', '47',
  '53',  '59', '61', '67', '71',
  '73',  '79', '83', '89', '97',
  '101'
]
def hashFunctionWithTubSon(search):
    search = search.lower()
    result = 0;
    for t in search:
        result += int(primeNumbers[alphabet.index(t)])
    return result%10
print(hashFunctionWithTubSon('apple'))
print(hashFunctionWithTubSon('darslik'))
print(hashFunctionWithTubSon('Dorixona'))
print(hashFunctionWithTubSon('mohirdev'))
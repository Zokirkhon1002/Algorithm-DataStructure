# from random import sample

# hududlar = set(range(1, 31))
# # print(hududlar)

# binolar = {
#     'B01': set(sample(hududlar, 3)),
#     'B02': set(sample(hududlar, 4)),
#     'B03': set(sample(hududlar, 4)),
#     'B04': set(sample(hududlar, 5)),
#     'B05': set(sample(hududlar, 5)),
#     'B06': set(sample(hududlar, 3)),
#     'B07': set(sample(hududlar, 2)),
#     'B08': set(sample(hududlar, 5)),
#     'B09': set(sample(hududlar, 4)),
#     'B10': set(sample(hududlar, 3)),
#     'B11': set(sample(hududlar, 5)),
#     'B12': set(sample(hududlar, 2)),
#     'B13': set(sample(hududlar, 3)),
#     'B14': set(sample(hududlar, 5))
# }
# # print(binolar)
# x = []
# for bino in binolar.values():
#     for value in bino:
#         x.append(value)

# x = set(x)
# # print(x)

# binolar['B15'] = hududlar - x

hududlar = set(range(1, 31))
binolar2 = {
    'B01': {9, 28, 29},
    'B02': {2, 26, 14, 22},
    'B03': {17, 3, 12, 15},
    'B04': {11, 12, 16, 18, 25},
    'B05': {9, 11, 15, 25, 29},
    'B06': {6, 22, 23},
    'B07': {4, 5},
    'B08': {8, 15, 16, 17, 30},
    'B09': {1, 10, 27, 13},
    'B10': {3, 29, 7},
    'B11': {3, 6, 14, 15, 23},
    'B12': {4, 6},
    'B13': {16, 9, 21},
    'B14': {4, 10, 14, 16, 22},
    'B15': {24, 19, 20}
}

# print(hududlar)
# print(binolar2)


# Greedy algorithms
# ochko'z algoritmlar

x=0;
y=0;

yakuniy_binolar = set();
while hududlar:
    x+=1;
    bestBino = None;
    qamralganHududlar = set();
    for bino, binoQamrovi in binolar2.items():
        y+=1;
        qamrov = hududlar & binoQamrovi; # & == and
        print(f"{bino}: {qamrov}")
        if len(qamrov)>len(qamralganHududlar):
            bestBino = bino;
            qamralganHududlar = qamrov;
    hududlar -= qamralganHududlar;
    yakuniy_binolar.add(bestBino);
    print(f"Tanlangan bino: {bestBino}")
    print(f"Qolgan hududlar: {hududlar}")
    print(f"Tanlangan binolar: {yakuniy_binolar}")
    input("Davom etish uchun ENTER tugmasini bosing...")

print(f"Tashqi loop: {x}")
print(f"Ichki loop: {y}")


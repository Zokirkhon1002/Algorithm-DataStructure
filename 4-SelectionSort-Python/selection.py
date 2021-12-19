aralash = [
  1, 9, 2, 0, 3, 5, 0, 6, 5, 7, 4, 3, 2, 0, 1, 2, 3, 4, 76, 435, 234, 23, 43,
  54, 65, 67, 123, 324, 123, 213, 234, 345, 432, 43, 654, 109,
];
# Array ichidan maksimum qiymatning indeksini topish uchun funksiya
def findMaxIndex(arr):
    max = arr[0];
    maxIndex = 0;
    for n in range(1,len(arr)):
        if arr[n] > max:
            max = arr[n]
            maxIndex = n;
    return maxIndex;


def selectSort(arr):
    newArr = []
    for n in range(len(arr)):
        maxIndex = findMaxIndex(arr)
        newArr.append(arr.pop(maxIndex))
    return newArr;


print(selectSort(aralash))
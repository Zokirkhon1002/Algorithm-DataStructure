# # // // Yekvlid algoritmi. Ayirish usuli
# def gcd(a,b):    
#     if a==0:
#         return b
#     if a>b:
#         a,b=b,a    
#     return gcd(b-a,a)

# # // // Yekvlid algoritmi. Qoldiq usuli
# def gcd(a, b):
#     if a == 0 :
#         return b      
#     return gcd(b%a, a)




# def summary(arr):
#     if arr == []:
#         return 0;
#     return arr[0]+summary(arr[1:])

# array = [5,8,12,22]
# print(summary(array))




# 2-Amaliyot
# x=0
# def showOnConsole(arr):
#     global x;
#     x+=1;
#     if(len(arr) == 1):
#         print(arr[0])
#         return print(f"Array elementlar soni: {x} ta")
#     else:
#         el = arr.pop(0)
#         print(el)
#         return showOnConsole(arr)

# array = [5,8,12,22]
# showOnConsole(array)



# # 3-Amaliyot
# def findMax(arr,length):
#     # length means length of arr
#     if(length == 1):
#         return arr[0]
#     return max(arr[length-1],findMax(arr,length-1))

# ar = [23,34,45,56,67,78,89,90,91,21,23,32,14]
# l = len(ar)
# print(findMax(ar,l))





# # 4-Amaliyot
# def binarySearch(arr,val,start=0,end=None):
#     if end is None:
#         end = len(arr)-1
#     if(start>end):
#         return None
    
#     mid = (start+end)//2
#     if arr[mid]==val:
#         return mid;
#     elif arr[mid]>val:
#         return binarySearch(arr,val,start,mid-1)
#     else:
#         return binarySearch(arr,val,mid+1,end)

# ar = [23,34,45,56,67,78,89,90,91]


# print(binarySearch(ar,23))
# print(binarySearch(ar,91))





# # 5-Amaliyot
from random import randrange

def qsort(arr):
    if len(arr) < 2:
        return arr;
    else:
        pivot = arr.pop(randrange(len(arr)))
        kichik = [i for i in arr if i<=pivot]
        katta = [i for i in arr if i>pivot]
        print(f"random: {randrange(len(arr))}")
        print(f"{kichik}+ [{pivot}] + {katta}")
        return qsort(kichik) + [pivot] + qsort(katta)

ar = [23,34,45,89,90,91,89,56,67,78,20,123,234,345,43,12,22,31,51,19]


print(qsort(ar))
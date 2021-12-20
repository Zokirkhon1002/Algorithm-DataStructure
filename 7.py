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


x=0
def showOnConsole(arr):
    global x;
    x+=1;
    if(len(arr) == 1):
        print(arr[0])
        return print(f"Array elementlar soni: {x} ta")
    else:
        el = arr.pop(0)
        print(el)
        return showOnConsole(arr)

array = [5,8,12,22]
showOnConsole(array)
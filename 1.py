# #  1-algoritm
# #  ikki sonni yi'gindisi
# n1 = int(input("1-sonni kiriting: "))
# n2 = int(input("2-sonni kiriting: "))
# sum = n1+n2;
# print(sum)


# # 2-algoritm
# # uchta sondan eng kattasini topish
# def getMax(a,b,c):
#    if(a>b and a>c):return a;
#    if(b>a and b>c): return b;
#    return c;


# n1 = int(input("1-sonni kiriting: "))
# n2 = int(input("2-sonni kiriting: "))
# n3 = int(input("3-sonni kiriting: "))
# print(getMax(n1,n2,n3))


# # 3-algoritm
# # n factorialni hisoblash algoritmi
def nFactorial(n):
    i, factorialResult = 1, 1
    while i <= n:
        factorialResult *= i
        i += 1
    return factorialResult;


num = int(input("son kiriting: "))
print(nFactorial(num))

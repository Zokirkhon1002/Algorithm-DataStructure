# def numbers(n):
#     print(n);
#     if n<=1: return;
#     else: numbers(n-1)

# numbers(10)



# home work
def nFactorial(n):
    print(n)
    if(n<=1):
        return 1;
    else:
        return n*nFactorial(n-1)

print(nFactorial(5))
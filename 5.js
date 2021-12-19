// function numbers(n){
//     console.log(n)
//     if(n<=1) return;
//     numbers(n-1);
// }
// numbers(10)




// home work
// def nFactorial(n):
//     sum=1;
//     if(n<=1):
//         return sum;
//     else:
//         return n*nFactorial(n-1)



// print(nFactorial(5))
function nFactorial(n){
    console.log(n)
    if(n<=1) return 1;
    return n*nFactorial(n-1)
}
console.log(nFactorial(5))
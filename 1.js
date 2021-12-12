// 'npm install readline_sync' in terminal.
const {question} = require("readline-sync");



// // 1-algoritm
// // ikki sonni yi'gindisi
// let n1 = Number(question("1-sonni kiriting: "))
// let n2 = Number(question("2-sonni kiriting: "))
// let sum = n1+n2;
// console.log(sum)




// // 2-algoritm
// // uchta sondan eng kattasini topish
// const getMax = (a,b,c) => {
//     if(a>b && a>c) return a;
//     if(b>a && b>c) return b;
//     return c;
// }

// let n1 = Number(question("1-sonni kiriting: "))
// let n2 = Number(question("2-sonni kiriting: "))
// let n3 = Number(question("3-sonni kiriting: "))
// console.log(getMax(n1,n2,n3))





// 3-algoritm
// n factorialni hisoblash algoritmi
const nFactorial = (n) => {
    let i = 1,faktorialResult = 1;
    while (i<=n){
        faktorialResult *=i;
        i++;
    }
    return faktorialResult;
}

let num = Number(question("son kiriting: "))
console.log(nFactorial(num))
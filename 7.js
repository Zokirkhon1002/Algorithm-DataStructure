// // Yekvlid algoritmi. Ayirish usuli
// const gcd = (a,b)=> {
//     if(a==0) return b;
//     if(a>b){
//         let temp = a
//         a=b
//         b=temp;
//     }
//     return gcd(b%a, a)
// }

// console.log(gcd(2,4))




// Yekvlid algoritmi. Qoldiq usuli
// const gcd = (a,b)=> {
//     if(a==0) return b;
//     return gcd(b%a,a)
// }
// console.log(gcd(24,5))



// // 1-Amaliyot
// const summary = (arr) => {
//     if(arr.length == 1) return arr[0];
//     return arr.pop() + summary(arr)
// }

// let array = [5,8,12,22];
// console.log(summary(array));

// // 2-Amaliyot
// let x = 0
// const showOnConsole = arr=> {
//     x++
//     if(arr.length == 1){
//     console.log(arr[0])
//     return console.log(`Array elementlari soni: ${x} ta`)
//     }
//     else {
//         let el = arr.shift()
//         console.log(el)
//         return showOnConsole(arr)
//     }
// }


// let array = [5,8,12,22];
// showOnConsole(array)



// 3-Amaliyot
const findMax = (arr) => {
    
}
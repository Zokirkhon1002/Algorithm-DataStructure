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

// // 3-Amaliyot
// const findMax = (arr,l)=> {
//     // l means length of arr
//     if(l == 1){
//         return arr[0]
//     }
//     return Math.max(arr[l-1], findMax(arr,l-1))
// }

// let ar = [23,34,45,56,67,78,89,90,91,21,23,32,14]
// let leng = ar.length;

// console.log(findMax(ar,leng))

// // 4-Amaliyot
// const findMax = (arr,val,start=0,end=null) => {
//     if(end == null ){
//         end = arr.length-1;
//     }
//     if(start>end){
//         return null;
//     }

//     let middle = Math.floor((start+end)/2)
//     if( arr[middle] == val){
//         return middle;
//     }
//     else if(arr[middle] >val){
//         return findMax(arr,val,start,middle-1)
//     }
//     else if(arr[middle]<val){
//         return findMax(arr,val,middle+1,end)
//     }

//     return null;
// }
// let ar = [23,34,45,56,67,78,89,90,91,95,98]
// console.log(findMax(ar,98))

//  // 5-Amaliyot
function qsort(arr){
  if (arr.length < 2) return arr;
  else {
    let r = Math.floor(Math.random() * arr.length);
    let temp = arr[r];
    delete arr[r];

    function forKichik(array, pivot) {
      let result = [];
      array.forEach((el) => {
        if (el <= pivot) result.push(el);
      });
      return result;
    }
    function forKatta(array, pivot) {
      let result = [];
      array.forEach((el) => {
        if (el > pivot) result.push(el);
      });
      return result;
    }

    let kichik = forKichik(arr,temp);
    let katta = forKatta(arr,temp);
    return `${qsort(kichik)} ${[temp]} ${qsort(katta)}`
  }
};

let arr = [
  23, 34, 45, 89, 90, 91, 89, 56, 67, 78, 20, 123, 234, 345, 43, 12, 22, 31, 51,
  19,
];
console.log(qsort(arr))

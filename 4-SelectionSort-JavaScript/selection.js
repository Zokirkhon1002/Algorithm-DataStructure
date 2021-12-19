// let n = 5
// let BigO = "O("+((n*1/2)*n) + ") yoki tahminan " + " O("+(n*n)+") yoki tahminan " + " O("+(n**2)+")";
// console.log(BigO)

let aralash = [
  1, 9, 2, 0, 3, 5, 0, 6, 5, 7, 4, 3, 2, 0, 1, 2, 3, 4, 76, 435, 234, 23, 43,
  54, 65, 67, 123, 324, 123, 213, 234, 345, 432, 43, 654, 109,
];

/**
 * Bu funksiya 1 dona array qabul qiladi parametr sifatida
 * va u array ichidagi sonlar ichidan eng kattasini qaytarib beradi
 * @param arr array kiriting
 */
function katta(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max <= arr[i]) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(katta(aralash));



// 1-way
// function sortingFromMax(arrN){
//     for (let i = 0; i < arrN.length; i++) {
//     if (arrN[i] < arrN[i + 1]) {
//         let vaqtincha = arrN[i];
//         arrN[i] = arrN[i + 1]
//         arrN[i + 1] = vaqtincha
//         i=-1;
//     }
//   }
//   return arrN;
// }



  //  MaxindexFinder
  // function maxIndexFinder(arr){
  //   let max = arr[0], maxIndex = 0;
  //   for(let i=1; i<arr.length; i++){
  //     if(arr[i] > max){
  //       max = arr[i]
  //       maxIndex = i;
  //     }
  //   }
  //   return maxIndex;
  // }



/**
 * Bu funksiya 1 dona array qabul qiladi parametr sifatida
 * va u array ichidagi sonlar ichidan eng kattasini qaytarib beradi
 * @param arrN array kiriting
 */
// 2-way
 function sortingFromMax(arrN){




   let newArr=[]
  for(let i=0; i<arrN.length; i++){
    let max = katta(arrN)
    let maxIndex = arrN.indexOf(max)
    newArr.push(max);
    // arrN.splice(maxIndex,1,0); // bu ham ishlaydi
    delete arrN[maxIndex];
  };
  return newArr
}

console.log(sortingFromMax(aralash));












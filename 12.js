const {question} = require("readline-sync")
let hududlar = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

let binolar = {
  B01: [9, 28, 29],
  B02: [2, 26, 14, 22],
  B03: [17, 3, 12, 15],
  B04: [11, 12, 16, 18, 25],
  B05: [9, 11, 15, 25, 29],
  B06: [6, 22, 23],
  B07: [4, 5],
  B08: [8, 15, 16, 17, 30],
  B09: [1, 10, 27, 13],
  B10: [3, 29, 7],
  B11: [3, 6, 14, 15, 23],
  B12: [4, 6],
  B13: [16, 9, 21],
  B14: [4, 10, 14, 16, 22],
  B15: [24, 19, 20],
};


// 2ta to'plamda borini yangi to'plamga qaytarib beradi
function ikkalasidaHamBorLarniOzi(arr1,arr2){
  let newArr = [];
  arr1.forEach(i=> {
    if(arr2.includes(i)){
      newArr.push(i)
    }
  })
  return newArr;
}

// 1-toplamnidagi elementlar 2-toplamda uchrasa, ana usha elementlarni o'chirib tashlaydi
// va uchramagan elementlarni to'plam shaklida qaytaradi
function birinchidan_ikkinchini_ayirish(arr1,arr2){
  let newArr = [];
  arr1.forEach(i=> {
    if(!arr2.includes(i)){
      newArr.push(i)
    }
  })
  return newArr;
}



let [x,y] = [0,0];
let yakuniyBinolar = [];
while (hududlar.length){
    x++;
    let [bestBino, qamralganHududlar] = [null, []];
    for(let bino in binolar){
        y++;
        let qamrov = ikkalasidaHamBorLarniOzi(hududlar, binolar[bino]);
        console.log(`${bino}: ${qamrov}`)
        if(qamrov.length > qamralganHududlar.length){
            bestBino = bino;
            qamralganHududlar = [...qamrov];
        }
    }
    hududlar = birinchidan_ikkinchini_ayirish(hududlar,qamralganHududlar);
    yakuniyBinolar.push(bestBino);
    console.log(`Tanlangan bino: ${bestBino}`)
    console.log(`Qolgan binolar: ${hududlar}`)
    console.log(`Tanlangan binolar: ${yakuniyBinolar}`)
    question("Davom etish uchun ENTER tugmasini bosing...")
}
console.log(`Tashqi loop: ${x}`)
console.log(`Ichki loop: ${y}`)




// // another example
// function makeChange(amount, coins, bag = []) {
//   if (amount === 0) return bag
//   let largestCoin = getLargestCoin(amount, coins)
//   return makeChange(amount - largestCoin, coins, bag.concat([largestCoin]))
// }

// function getLargestCoin(amount, coins) {
//   let sortedCoins = coins.sort((a, b) => a - b)
//   for (let i = sortedCoins.length - 1; i >= 0; i--) {
//     if (sortedCoins[i] <= amount) return sortedCoins[i]
//   }
//   throw new Error('no coin that divides amount')
// }

// console.log(
//   makeChange(42, [1, 5, 10, 25])
// )
// // [25, 10, 5, 1, 1]
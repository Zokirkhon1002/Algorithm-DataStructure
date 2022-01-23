// o'xshamadi
// const {question} = require("readline-sync")
// let hududlar = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30,
// ];

// let binolar = {
//   B01: [9, 28, 29],
//   B02: [2, 26, 14, 22],
//   B03: [17, 3, 12, 15],
//   B04: [11, 12, 16, 18, 25],
//   B05: [9, 11, 15, 25, 29],
//   B06: [6, 22, 23],
//   B07: [4, 5],
//   B08: [8, 15, 16, 17, 30],
//   B09: [1, 10, 27, 13],
//   B10: [3, 29, 7],
//   B11: [3, 6, 14, 15, 23],
//   B12: [4, 6],
//   B13: [16, 9, 21],
//   B14: [4, 10, 14, 16, 22],
//   B15: [24, 19, 20],
// };

// let [x,y] = [0,0];

// let yakuniyBinolar = new Set();
// while (hududlar){
//     x++;
//     let [bestBino, qamralganHududlar] = [null, new Set()];
//     for(let bino in binolar){
//         y++;
//         let qamrov = hududlar && binolar[bino];
//         console.log(`${bino}: ${qamrov}`)
//         if(qamrov.length > qamralganHududlar.length){
//             bestBino = bino;
//             qamralganHududlar = qamrov;
//         }
//     }
//     hududlar -= qamralganHududlar;
//     yakuniyBinolar.add(bestBino);
//     console.log(`Tanlangan bino: ${bestBino}`)
//     console.log(`Qolgan binolar: ${hududlar}`)
//     console.log(`Tanlangan binolar: ${yakuniyBinolar}`)
//     question("Davom etish uchun ENTER tugmasini bosing...")
// }
// console.log(`Tashqi loop: ${x}`)
// console.log(`Ichki loop: ${y}`)
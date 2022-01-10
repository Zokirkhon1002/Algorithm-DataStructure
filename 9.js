// // hash jadvali
const {question} = require('readline-sync')
let mevalar = {
    "hurmo":50_000,
    "tarvuz":12_000,
    "anor":20_000,
    "limon":12_000,
    "nok":10_000,
    "banan":25_000,
    "apple":11_000
}
// let input = question("Meva nomini kiriting: ");


// if(mevalar[input.toLowerCase()] == undefined){
//     console.log("Siz kiritgan Meva yo'q")
// }
// else {
//     console.log(`${input}: ${mevalar[input.toLowerCase()]}`)
// }


// 3-HASH FUNKSIYA. TUB SONLAR VA BO'LINMA
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
let primeNumbers = '2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101'.split(",")

function hashFunctionWithTubSon(search){
    search = search.toLowerCase()
    let result = 0
    for(let i=0; i<search.length; i++){
        result += Number(primeNumbers[alphabet.indexOf(search[i])])
    }
    return result%10;
}
console.log(hashFunctionWithTubSon('apple'))
console.log(hashFunctionWithTubSon('darslik'))
console.log(hashFunctionWithTubSon('Dorixona'))
console.log(hashFunctionWithTubSon('mohirdev'))
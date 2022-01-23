// Dijsktra algoritim
let graph = {
  A: { B: 2, C: 6 },
  B: { C: 3, D: 4 },
  C: { D: 5, E: 6 },
  D: { F: 5 },
  E: { F: 0 },
  F: {},
};
let narxlar = {
  B: 2,
  C: 6,
  D: Infinity,
  E: Infinity,
  F: Infinity,
};
let otalar = {
  B: "A",
  C: "A",
  D: null,
  E: null,
  F: null,
};
let ishlandi = [];

// 1-eng arzon tugun topish uchun funksiya

function eng_arzon_tugun_top(narxlar){
    let eng_arzon = Infinity;
    let eng_arzon_tugun = null;
    for(let tugun in narxlar){
        let narx = narxlar[tugun];
        if((narx < eng_arzon) && !ishlandi.includes(tugun)){
            eng_arzon = narx;
            eng_arzon_tugun = tugun;
        }
    }
    return eng_arzon_tugun;
}

console.log(narxlar)
let tugun = eng_arzon_tugun_top(narxlar)
console.log(`eng arzon tugun: ${tugun}`)


// 2-Dijkstra Algoritimi

while(tugun !== null){
  let qoshnilar = graph[tugun]; // Eng yaqin tugunning qo'shnilarini topamiz
  let narx = narxlar[tugun] // Ularning narxini olamiz
  for(let qoshni in qoshnilar){ // Har bir qo'shni uchun...
    let yangi_narx = narx + qoshnilar[qoshni]; // shu qo'shniga borish narxini hisoblaymiz
    if(narxlar[qoshni] > yangi_narx){ // agar bu tugunga borish avvalgidan arzonroq bo'lsa
      narxlar[qoshni] = yangi_narx; // shu tugunga borish narxini yangilaymiz
      otalar[qoshni] = tugun; // va bu tugun otasini ham yangilaymiz.
    }
  }
  ishlandi.push(tugun) // tugunn ishlov berilgan tugunlar qatoriga qo'shamiz;
  tugun = eng_arzon_tugun_top(narxlar)
}
console.log(narxlar)
// graph ma'lumotlar tuzilmasi va breadth first search algoritm
let graph = {
  zokirkhon: ["ali", "vali", "tohir"],
  ali: ["aziza", "olim"],
  vali: ["botir", "ziyoda"],
  tohir: ["elonmusk", "mohir"],
  aziza: [],
  olim: [],
  botir: [],
  ziyoda: ["aziza"],
  elonmusk: [],
  mohir: [],
};


function search(graph, startNode, target) {
  let searchQueue = [];
  searchQueue.push(...graph[startNode]);
  let searched = [];

  while(searchQueue){
    //   console.log(searchQueue)
      let shifted = searchQueue.shift()
      if(!searched.includes(shifted)){
          if(shifted == target){
              console.log(`${target} ni topdik!`)
              console.log(searched)
              return true;
          } else {
              searchQueue.push(...graph[shifted])
              searched.push(shifted)
          }
      }
  }
  return false
}

console.log(search(graph, "zokirkhon", "mohir"))

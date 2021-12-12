// 'npm install readline_sync' in terminal.
const {question} = require("readline-sync");


let words = [
    'about', 'search', 'other', 'which', 'their', 'there', 'contact', 'business', 'online', 'first', 'would', 'services', 
    'these', 'click', 'service', 'price', 'people', 'state', 'email', 'health', 'world', 'products', 'music', 'should', 
    'product', 'system', 'policy', 'number', 'please', 'support', 'message', 'after', 'software', 'video', 'where', 
    'rights', 'public', 'books', 'school', 'through', 'links', 'review', 'years', 'order', 'privacy', 'items', 'company', 
    'group', 'under', 'general','research', 'january', 'reviews', 'program', 'games', 'could', 'great', 'united', 'hotel', 
    'center', 'store', 'travel', 'comments', 'report', 'member', 'details', 'before', 'hotels', 'right', 'because', 'local', 
    'those', 'using', 'results', 'office', 'national', 'design', 'posted', 'internet', 'address', 'within', 'states', 'phone', 
    'shipping', 'reserved', 'subject', 'between', 'family', 'black', 'check', 'special', 'prices', 'website', 'index', 'women', 
    'today', 'south', 'project', 'pages', 'version']


// // 1-algoritm
// // Linear Search
// ro'yxat tartiblangan bo'lishi shart emas!

// const searchWord = (list,word) => {
//     for(let i=0; i<list.length; i++){
//         if(list[i] == word) 
//             return `${list[i]} in ${i} attempts`;
//     }
//     return "Not Found";
// }

// console.log(searchWord(words,'check'))
// output: check in 89 attempts




// // 2-algoritm
// // Binary search
// // searching with words
// // ro'yxat tartiblanga bo'lishi shart!!!

// const searchWord = (list,word) => {
//     let low = 0, high = list.length-1,tries=0;
//     let indexOfWord = list.indexOf(word)
//     while (low<=high){
//         let middle = parseInt((low+high)/2);
//         if(middle == indexOfWord){
//             return `${list[middle]} in ${tries} attempts`
//         }
//         if(middle > indexOfWord){
//             high = middle -1;
//         }
//         else {
//             low = middle +1;
//         }
//         tries++;
//     }
//     return "Not Found";
// }
// console.log(searchWord(words,'check'))
// output: check in 6 attempts








let numbers = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ]

// // 2-algoritm
// // Binary search
// // searching with numbers
// // ro'yxat tartiblanga bo'lishi shart!!!


const searchNumber = (list,number) => {
    let low = 0, high = list.length-1,tries=0;
    while (low<=high){
        let middle = parseInt((low+high)/2);
        let guess = list[middle];
        if(guess == number){
            return `${guess} in ${tries} attempts`
        }
        if(guess > number){
            high = middle -1;
        }
        else {
            low = middle +1;
        }
        tries++;
    }
    return "Not Found";
}
console.log(searchNumber(numbers,78))
// output: 78 in 4 attempts
// // Bubble sort algorithm
// const sorting = (arr) => {
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]) {
//             // let temp = arr[i];
//             // arr[i] = arr[i+1];
//             // arr[i+1] = temp;
//             [arr[i],arr[i+1]] = [arr[i+1], arr[i]]
//             i=-1;
//         };
//     }
//     return arr;
// }

// let numbers = [34,24,26,14,11,9,5,35,45,48]
// console.log(sorting(numbers))






// 1-way
/**
 * We can implement this algorithm using 2 functions.
 * The first called mergeSort, which is the function we’ll call,
 * and another one called _mergeArrays, which takes care of merging the arrays.
 * I prepended _ to its name, to signal it’s not meant to be called directly.
 */

// const _mergeArray = (arr1, arr2) => {
//   let result = [];
//   while (arr1.length && arr2.length)
//     result.push(arr1[0] > arr2[0] ? arr2.shift() : arr1.shift());

//   //if we still have values, let's add them at the end of `result`
//   while (arr1.length) result.push(arr1.shift());
//   while (arr2.length) result.push(arr2.shift());

//   return result;
// };
// const mergeSort = (arr) => {
//   if (arr.length < 2) return arr;
//   let mid = Math.floor(arr.length / 2);
//   let left = arr.slice(0, mid);
//   let right = arr.slice(mid);
//   let sorted_left = mergeSort(left);
//   let sorted_right = mergeSort(right);
//   return _mergeArray(sorted_left, sorted_right);
// };

// let numbers = [34, 24, 26, 14, 11, 9, 5, 35, 45, 48];
// console.log(mergeSort(numbers));



// another way
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
  
  function merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return [...resultArray, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  }
}
let numbers = [34, 24, 26, 14, 11, 9, 5, 35, 45, 48];
console.log(mergeSort(numbers));

// Bubble sort algorithm
const sorting = (arr) => {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]>arr[i+1]) {
            // let temp = arr[i];
            // arr[i] = arr[i+1];
            // arr[i+1] = temp;
            [arr[i],arr[i+1]] = [arr[i+1], arr[i]]
            i=-1;
        };
    }
    return arr;
}



let numbers = [34,24,26,14,11,9,5,35,45,48]
console.log(sorting(numbers))
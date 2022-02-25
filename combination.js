//조합(nCr)
let input = [1, 2, 3, 4];
let count=  0;
let output = [];

function combination(arr, data, s, idx, r){
    if(s == r){
        count++;
        console.log(data);
        return;
    }
    for(let i = idx; arr.length - i >= r-s; i++){  //4 2
        data[s] = arr[i] //data[0] = arr[0] 
        combination(arr, data, s+1, i+1, 2); //s 1 i 2
    }
}

combination(input, output, 0, 0, 2);
console.log(count);

// function combination(){
//     for(let i = 0; i < input.length; i++){
//         for(let j = i+1; j < input.length; j++){
//             count++;
//             console.log(i, j);
//         }
//     }
// }
// combination();
// console.log(count);


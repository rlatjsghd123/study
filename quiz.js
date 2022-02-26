 //문제

function quiz(a, d, n){
    let result;
    for(let i = 1; ; i++){
        num = a + d * (i - 1);
    if(num > n){
        result = -1;
        break;
    }
    if(num == n){
        result = i;
        break;
    }
  }
  console.log(result);
}
quiz(1, 2, 7)


// function abc(s, t, num){
//     let data = 0;
//     let i = 0;
//     for(j = 0; ; j++){
//     if(data == num){
//         console.log(i);
//         break;
//     } if(){
//         data = s + t;
//         i++;
//     }
//   }
// }


//abc(1, 2, 7);
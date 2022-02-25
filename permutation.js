// 순열(nPr), 재귀함수

input = ["a", "b", "c"]; 
let count = 0;  
function abc(arr) { 
      for (let i = 0; i < arr.length; i++) { 
            console.log("hi"); 
            for (let j = 0; j < arr.length; j++) { 
                  if (i === j) continue; 
                  for (let k = 0; k < arr.length; k++) { 
                        if (i === k) continue; 
                        if (j === k) continue; 
                        console.log(arr[i], arr[j], arr[k]); 
                      } 
                    } 
                  } 
                }  


     function abc(arr, s, r) {   
         if (s === r) {
            count++;     
            console.log(arr.join(""));     
            return;   
        }    

     for (let i = s; i < arr.length; i++) {     
    [arr[s], arr[i]] = [arr[i], arr[s]]; // [arr[0], arr[0]] = [arr[0], arr[0]]     
    console.log(arr, s, r);     
     abc(arr, s + 1, r); 
    //[a,b,c , 1, 2]     
    [arr[s], arr[i]] = [arr[i], arr[s]]; 
     // arr[1], arr[0] = arr[0], arr[1]   } 
    }  
}
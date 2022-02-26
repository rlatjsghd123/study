//점화식(F(n) = F(n-1) + a)

let result;

function forloop(s, t, number){
    let acc=0;

    for(let i = 1; i <= number; i++){
        if(i == 1){
        acc+= s;
    } else {
        acc+= t;
    }

    console.log(i, acc)
    }
    return acc;
}

result = forloop(3, 2, 5);
console.log(result);

let result;
//재귀
function recursive(s, t, number){
    if( number == 1){
        return s;
    }
    return recursive(s, t, number - 1) +2;
}


 result = recursive(3, 2, 5);
 console.log(result);

//팩토리얼(n!)
 function recursive(number){
    if(number == 1){
        return number;
    }
    return recursive(number - 1) * number;
    }

    result = recursive(5);
    console.log(result);
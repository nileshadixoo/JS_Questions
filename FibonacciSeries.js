// iterative approch 

function fibonacciSeries(n){
    let a =0;
    let b =1;
    let temp = [];
    temp.push(a)
    temp.push(b)
    for(let i=0; i<n-2; i++){
        c=a+b;
        temp.push(c)
        b=c;
        a=b; 
    }
    return temp;
}


// recursive approch 
function fibSeries(n,a,b){
    if(n<0){
        return ;
    } 
    let c = a+b;
    console.log(c)
    fibSeries(n-1,b,c);
}
let n = 5;
// iterative approch 
console.log(fibonacciSeries(n)) 

// recursive approch 
let a =0;
let b =1;
console.log(a)
console.log(b)
fibSeries(n-2,a,b)
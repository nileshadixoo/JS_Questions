function floydsTriangle(n){
    let value = 1;
    for(let i=0; i<n; i++){
        let row ='';
        for(let j=0; j<i; j++){
           row+=value++ +" "   
        }
        console.log(row.trim());
        
    }
}

let n = 5;
floydsTriangle(n)
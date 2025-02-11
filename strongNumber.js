
function factorial(n){
    if(n==0 || n==1) return 1
    
    return  fact = n*factorial(n-1)
}

function isStrongNumber(number){
    let temp=number,sum=0,noOfDigit=number.toString().length;

    while(temp>0){
        let digit = temp%10 
        sum+= factorial(digit)
        temp = (temp/10);
      
        temp = parseInt(temp) // important because because temp/10 returns 15.3 parseInt helps to remove the .3 which is important for further calculation 
    }
    if(sum==number){
        console.log(`${number} is a strong number`)
    }
    else{
        console.log("Not a strong number")
    }
}



let number = 145;
isStrongNumber(number)

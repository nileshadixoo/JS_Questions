

function isArmStrongNumber(number){
    let temp=number,sum=0,noOfDigit=number.toString().length;

    while(temp>0){
        let digit = temp%10 
        sum+= digit**noOfDigit;
        temp = (temp/10);
      
        temp = parseInt(temp) // important because because temp/10 returns 15.3 parseInt helps to remove the .3 which is important for further calculation 
    }
    if(sum==number){
        console.log(`${number} is a armstrong number`)
    }
    else{
        console.log("Not a armstrong number")
    }
}



let number = 1634;
isArmStrongNumber(number)
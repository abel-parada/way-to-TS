console.log('Your code goes here');

function add(n1: number,n2:number,showResult:boolean, phrase:string){
    // console.log(typeof number1);
    
    const result = n1 + n2;

    if(showResult){
        console.log(phrase + result);
    } else{
        return n1+n2;
    }
}

const number1 = 2;
const number2 = 3.7;
const printResult = true;
const resultPhrase = 'Result of the sum is: '

add(number1, number2,printResult, resultPhrase);


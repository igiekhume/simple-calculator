let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let currentOperator = null;
let currentValue = '';
let storedValue = '';


buttons.map(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.getAttribute("data-value");
        if (value ==="C"){
            currentValue='';
            storedValue='';
            currentOperator=null;
            display.innerText="0"
        }else if(value === "="){
            if(currentOperator&&storedValue){
                currentValue=calculate(storedValue,currentValue,currentOperator)
                display.innerText=currentValue;
                storedValue='';
                currentOperator=null;
            }
        }else if(["+", "-", "*", "/"].includes(value)){
            if(currentValue){
                if(storedValue&&currentOperator){
                    storedValue=calculate(storedValue,currentValue,currentOperator)
                    display.innerText=storedValue
                }else{
                    storedValue=currentValue
                }
                currentValue='';
                currentOperator=value;
            }
        } else{
            currentValue += value;
            display.innerText=currentValue
        }  
        
    });
});


function calculate(value1, value2, operator){
    let num1 = parseFloat(value1);
    let num2 = parseFloat(value2);

    switch(operator){
        case"+":
            return (num1 + num2).toString();
        case"-":
            return (num1 - num2).toString();
        case"*":
            return (num1 * num2).toString();
        case"/":
            if(num2 === 0){
                alert("cannot divide by zero");
                    return"0";
            } else{
                return(num1 / num2).toString();
            } 
            default:
               return value2; 
    }
}
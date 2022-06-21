// Firstly, take the operator from the user through prompt box.  
const operator = prompt('Please Enter Operator to perform the calculation (Select either +, -, *, ** or / ): ');  
  
// Then, accept the number from the user through prompt box  
const number1 = parseFloat(prompt ('Enter the first number: '));  
const number2 = parseFloat(prompt ('Enter the second number: '));  
  
let result; // declaration of the variable.  
  
// using if, elseif and else keyword to define the calculator condition.  
if (operator == '+') { 
    result = number1 + number2;  
}  
else if (operator == '-') {  
    result = number1 - number2;  
}  
else if (operator == '*') {
    result = number1 * number2;  
}
else if (operator == '**') {
    result = number1 ** number2;  
}    
else {  
    result = number1 / number2;
}  
  
// display the result of the Calculator  
window.alert(" The Result is " + result); 
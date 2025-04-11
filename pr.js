function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Пожалуйста, введите два числа.";
  }
 return a - b;  // <--- Изменила + на -
}
function calculateSum() {
  const num1 = prompt("Введите первое число:");
  const num2 = prompt("Введите второе число:");
  const number1 = parseFloat(num1);
  const number2 = parseFloat(num2);
  const sum = addNumbers(number1, number2); 
  console.log(sum); 
}
window.onload = calculateSum;

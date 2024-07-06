let num1=parseInt(prompt("Ingrese el Primer número"));
let num2=parseInt(prompt("Ingrese el Segundo número"));

if(num1>num2){
    let temp = num1;
    num1 = num2;
    num2 = temp;
}

let sum = num1;

do{
    if (sum % 2 !== 0){
        let cubo = sum * sum *sum;
        document.write("El cubo de  " + sum + "es" + cubo );
    }
    sum++;
}
while (sum <= num2);
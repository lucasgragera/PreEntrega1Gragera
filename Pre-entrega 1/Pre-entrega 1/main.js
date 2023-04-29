let nombreIngresado   = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("¡Bienvenido "+nombreIngresado +" "+apellidoIngresado+"! \n¡Aprendamos las tablas de multiplicacion hasta por diez, \ny a multiplicar entre dos numeros!"); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

let ingresarNumero = parseInt(prompt((nombreIngresado +", "+ "por favor ingrese el numero del cual quiere saber la tabla de multiplicaciones")));
for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" x "+ i +" = "+ resultado);
}


let primerNumero = parseInt(prompt("Ingrese el primer numero a multiplicar"));
let segundoNumero = parseInt(prompt("Ingrese el segundo numero a multiplicar"));

function multiplicar(primerNumero, segundoNumero) {
    resultado = primerNumero * segundoNumero
}

function mostrar(mensaje) {
    alert(mensaje)
}

multiplicar(primerNumero, segundoNumero);            
mostrar(primerNumero +" x "+ segundoNumero +" es igual a "+ resultado); 

alert("¡Gracias " +nombreIngresado+ ", lo esperamos pronto para seguir aprendiendo!")
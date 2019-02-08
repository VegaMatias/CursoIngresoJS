/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1 = numeroUno.value;
	numero2 = numeroDos.value;
	/*
		recordad siempre buscar el ID correspondiente cuando pida tomar
		numeros por ID(siempre se encuentran en INPUT... ID)
	*/

	 numero1 = parseInt(numero1);
	 numero2 = parseInt(numero2);
	
	/*
		El valor devuelto a la variable es en forma de texto, asi que si
		o si hay que convertirlo a tipo de dato numerico, de lo contrario
		no se sumara, SINÓ QUE SE UNIRÁ.. 2+3 = 23!.
	*/


	resultado = numero1 + numero2;

	alert("El resultado de su suma da: " + resultado);


}


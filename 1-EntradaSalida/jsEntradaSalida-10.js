/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	var sueldo;
	var descuento;


	sueldo = importe.value;
	sueldo = parseInt(sueldo);


	descuento = sueldo - (25 / 100 * sueldo)  ;
/*
	seria la operacion para un descuento del 25% del sueldo que el usuario ingrese
*/



/*
	tambien se podria reemplazar el valor del % (en este caso 25) por el de una variable la cual el
	usuario ingresaria, eso si lo pide claro. XD
*/

	resultado.value = descuento;

}



/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var importe;
	var aumento;


	importe = sueldo.value;
	importe = parseInt(importe);



	aumento = (importe * 10 / 100) + importe ;
/*
	esta operacion de arriba es el incremento del 10% del numero que se introduzca
*/



	resultado.value = aumento;	

}

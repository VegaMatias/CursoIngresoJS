function mostrar()
{

	var contador;
	var acumulador;
	var numero;

	contador = 0;
	acumulador = 0;


	while(contador < 5)
	{
		contador = contador + 1;
		numero = prompt("Ingrese el numero " + contador + "# :" );
		numero = parseInt(numero);
		acumulador = acumulador + numero;
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

/*
	interacciones?? se usaran para analizar datos, tomar datos de u lugar  y ponerlos en otro?
	envex de hacer lo mismo 300 veces.. lo hago una vez y que de repita!
	se usaran este mismo ejericio pero con archivos 
	xO
	el analisis de datos? se hace pensando que lo voy hacer para un conjunto datos pero lo lo va a repetir
	nombre y edaD? 
	como funciona el contador y acumulador)?

	contador = recibe un valor literal!! se cuanto va a ir valiendo, el acumulador no! (diferencia)
	acumulador = es una variable que recibe su mismo valor mas una variable (o puede ser *etc)
*/

}//FIN DE LA FUNCIÓN
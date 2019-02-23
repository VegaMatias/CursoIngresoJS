function mostrar()
{

	var contador;
	contador = 0;
	// declarar variables
	var maximoo;
	var minimoo;
	//maximoo = -999;
	//minimoo = 999;
 //con bandera esto de arriba se saca!!

	//var bandera;
	//bandera = "es la primera";

	var respuesta='si';

	while(respuesta == "si")
	{
		contador = contador + 1;
		numero = prompt("Ingrese el numero " + contador + "# :" );
		numero = parseInt(numero);


		if(contador == 1)
		{
			maximoo = numero;
			minimoo = numero;
			/*
				CON ESTO LO QUE HAGO ES HACER.. CUANDO INGRESO LA PRIMERA HAGOO QUE MAIÇXIMO Y MINIMO VALGAN LO MISMO!!
			*/
		}
		else
		{
			if(numero > maximoo)
			{
				maximoo = numero;
			}

			if(numero < minimoo)
			{
				minimoo = numero;
			}
		}

		respuesta = prompt(" => Si para continuar");

		/*
			razonamiento ara encontrar un maximo o minimo...
			forma uno: cavernicola = kajajajaja, estan en los o
			if(numero > maximo)
		{
			maximo = numero;
		}
		else
		{
			minimo = numero;
		}
		con bandera
		aal pedo, se usa el contador!! no crear otra variable
		

		
		otro metodo:



		*/

	}

	document.getElementById('maximo').value = maximoo;
	document.getElementById('minimo').value = minimoo;

	/*
		si se usa el document.get... no hace falta cambiar el nombre de la variable!!
		asi que es mejor usarlo para mostrar
	*/


}//FIN DE LA FUNCIÓN
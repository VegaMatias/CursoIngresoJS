function mostrar()
{
/*
	1-Suma de los negativos.
	 2-Suma de los positivos.
	  3-Cantidad de positivos. 
	  4-Cantidad de negativos. 
	  5-Cantidad de ceros. 
	  6-Cantidad de números pares. 
	  7-Promedio de positivos. 
	  8-Promedios de negativos. 
	  9-Diferencia entre positivos y negativos, (positvos-negativos).


*/
	var contador;
	contador = 0;
	//declarar contadores y variables 
	
	var numero;
	var contadorNegativos;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var acumulador;
	var cantidadNegativos;
	var cantidadCeros;
	var numerosPares;
	var promedioPos
	contadorNegativos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	acumulador = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	numerosPares = 0;

	var respuesta="si";

	while(respuesta!="no")
	{
		contador = contador + 1;
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if(numero < 0)
		{
			cantidadNegativos = cantidadNegativos + 1;
			sumaNegativos = sumaNegativos + numero;
		}
		else
		{
			if(numero == 0)
			{
				cantidadCeros = cantidadCeros + 1;
			}
			else
			{
				cantidadPositivos = cantidadPositivos + 1;
				sumaPositivos= sumaPositivos + numero;
			}
		}
		

		if(numero%2 == 0)
		{
			numerosPares = numerosPares + 1;
		}



	respuesta = prompt("ingrese no para salir.");
	}//cierre while




	document.write("1-Suma de los negativos: " + sumaNegativos + "<br>" +
					"2-Suma de los positivos: " + sumaPositivos + "<br>" +
					"3-Cantidad de positivos:" + cantidadPositivos + "<br>" +
					"4-Cantidad de negativos: " + cantidadNegativos + "<br>" +
					"5-Cantidad de ceros: " + cantidadCeros + "<br>" +
					"6-Cantidad de números pares: " + numerosPares + "<br>" +
					 "7-Promedio de positivos: " + 	);

/*
	hacerlo con IF... DxD
*/





/*
	-5  -10 0 10 20
	1)-15
	2)30
	3)2
	4)2
	5)1
	6)3
	7)15
	8)-7.5
	9)15
	
*/

}//FIN DE LA FUNCIÓN
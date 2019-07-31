function mostrar()
{
/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 
2-Suma de los positivos. 
3-Cantidad de positivos. 
4-Cantidad de negativos. 
5-Cantidad de ceros. 
6-Cantidad de números pares. 
7-Promedio de positivos. 
8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos). NO SE

*/	

	var numero;
	var contador = 0;
	var sumaPositiva = 0;
	var sumaNegativa = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioNumerosPositivos;
	var promedioNumerosNegativos;
	var cantidadNumerosPares = 0;


	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador = contador + 1;

		numero = parseInt(prompt("Ingrese un numero: "));

		if(numero == 0)
		{
			cantidadCeros = cantidadCeros + 1;
		}
		else if(numero > 0)
		{
			sumaPositiva = sumaPositiva + numero;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else
		{
			sumaNegativa = sumaNegativa + numero;
			cantidadNegativos = cantidadNegativos + 1;
		}
//hasta el 5 aca arriba


		//cantidad numeros pares(?)


		if(numero % 2)
		{
			cantidadNumerosPares = cantidadNumerosPares + 1;  	 
		}




	respuesta = prompt("Si ya NO desea ingresar otro numero escriba no, de lo contrario cualquier otra cosa");
	}

	promedioNumerosPositivos = sumaPositiva / contador;
	promedioNumerosNegativos = sumaNegativa / contador;



	console.log("(1) " +  sumaNegativa + " (2) " + sumaPositiva + " (3) " + cantidadPositivos + " (4) " + cantidadNegativos + " (5) " + cantidadCeros);


}//FIN DE LA FUNCIÓN
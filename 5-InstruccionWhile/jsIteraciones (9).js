function mostrar()
{

	var contador = 0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;
	
	var respuesta='si';
	

/*
do 
{
	num = prompt();
	num = parseInt(num);

si no ingreso un numero, abajo lo validará y volverá a entrar(=? XD)


	while(isNaN(num)); valida que es un numero para no mostrar NaN, con el if no se valida! 
}
*/



	for(contador = 1 ; respuesta != "no" ; contador++ )
	{
		numero = parseInt(prompt("Ingrese un numero: "));
	
		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(numero > maximo)
			{
				maximo = numero;
			}	
			else if (numero < minimo)
			{
				minimo = numero;
			}
		}	

		respuesta = prompt("Si ya no desea ingresar otro numero escriba 'no', de lo contrario cualquier otra cosa.");
		
		
	}
/*
	while(respuesta != 'no')
	{
		contador = contador + 1;

		numero = parseInt(prompt("Ingrese un numero: "));

		if(contador == 1)
		{
			maximo = numero;
			minimo = numero;
		}
		else
		{
			if(maximo < numero)
			{
				maximo = numero;
			}
			else
			{
				minimo = numero;
			}
		}

		respuesta = prompt("Si ya no desea ingresar otro numero escriba 'no', de lo contrario cualquier otra cosa.");
	}
*/  //hgecho con for y while..



/*
el contador = se usa para una suma de una variable y una ocnstante(numero)
y un acumulador son dos variables.. 
*/

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;












}//FIN DE LA FUNCIÓN
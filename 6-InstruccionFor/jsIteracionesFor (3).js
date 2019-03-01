function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var acumulador;
	acumulador = 0;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 0; numeroAnterior --)
	{
		//console.log(numeroAnterior);


		if(numeroIngresado % numeroAnterior == 0)
			{
				console.log(numeroAnterior);
				acumulador = acumulador + numeroAnterior;	
			}

		
	}


		if(acumulador == numeroIngresado)
		{
			console.log("Es perfecto");
		}
		else
		{
			console.log("no es perfecto");
		}
/*
	if(numeroAnterior == 1) //si todas la condiciones del for se cumplen entra al if, sino alr...
	{
		console.log("Es primo");
	}
	else
	{
		console.log("No es primo");
		//para cuando encuentra un divisor...! XO
	}
*/

}//FIN DE LA FUNCIÓN
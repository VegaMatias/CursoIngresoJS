function mostrar()
{
	/*
		numero primo;
				recorrer todos los anteriores)?

		1)
		si ingresan el 7.. tengo que mostrar el 6, 5....
		
		para mostar esto un 
						FOR
							for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 0; numeroAnterior --)
	{
		console.log(numeroAnterior);
	}

		2)
		dentro de este fgor he de verificar si el numero ingresado es divisible por uno de sus antesesores

	*/

	var numeroIngresado;
	var numeroAnterior;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);

	/*
	OTRO METDO: 1)
	numero anterior = 1; y que llegue a numero ingresado.. numero anterior ++
	*/

		//1)esto de abajo muestra el anterior)?					
	for(numeroAnterior = numeroIngresado - 1; numeroAnterior > 1; numeroAnterior --)
	{
		console.log(numeroAnterior);
		
		//2)
		//quiere decir que es divisible.. si encuentro un divisor, salgo coon break, esto encuentra un numero primo
		//como saber si es numero primo o no..
		if(numeroIngresado % numeroAnterior == 0)
		{
			break;
		}

		//como le digo si es primo o no... si numero anterior es 1 

	}

	if(numeroAnterior == 1) //si todas la condiciones del for se cumplen entra al if, sino alr...
	{
		console.log("Es primo");
	}
	else
	{
		console.log("No es primo");
		//para cuando encuentra un divisor...! XO
	}

		




}
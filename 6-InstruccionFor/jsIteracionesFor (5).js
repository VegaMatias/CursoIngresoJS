function mostrar()
{
	//hacer centros numericos


	var numeroIngresado;
	var numeroRecorridoUno;
	var acumulador;
	var acumuladorDos;

	acumulador = 0;
	acumuladorDos = 0;

	numeroIngresado = prompt("Ingrese un numero: ");
	numeroIngresado = parseInt(numeroIngresado);


	for(numeroRecorridoUno = numeroIngresado - 1 ; numeroRecorridoUno > 0; numeroRecorridoUno--)
	{
		acumulador = acumulador + numeroRecorridoUno;
	}

	/*
		ahora ingresar todos los numeros anteriores del que ingreso y hacer lo mismo
	*/

	for(numeroRecorridoUno = numeroIngresado + 1; numeroRecorridoUno > numeroIngresado; numeroRecorridoUno ++)
	{
		acumuladorDos = acumuladorDos + numeroRecorridoUno;
		if(acumuladorDos == acumulador)
		{
			break;
		}
		else
		{
			if(acumuladorDos > acumulador)
			{
				break;
			}
		}
	}


	if(acumulador == acumuladorDos)
	{
	console.log(acumulador + " y " + acumuladorDos + " es perfecto");
	}
	else
	{
	console.log(acumulador + " y " + acumuladorDos + " no es  perfecto");
	}

}//FIN DE LA FUNCIÓN
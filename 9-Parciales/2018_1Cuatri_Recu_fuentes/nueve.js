function mostrar()
{
	/*
		una serie de celulares, cada vez q carga uno me pide la marca, el tamaño(numero) coommo q 
		nos ingresan pulgadas o tamaño de la pantalla 3,5,10,9 etc, precio
		
		1)necesito saber el mayor precio y la marca de ese mayor precio

		2)promedio precio

		3)cantidad de celus valen > 2000

		4)celular, marca y tamaño del mas caro

		5) del mas barato

		6) el primer cel que sale 1000

		7)precio del ultimo celular "lg"

			lg  3 3000
			s 5 5000
			i 4 8000
			s 4 1000
			lg 5 1000

	*/
	var ingresoCelular;
	var marcaCelular;
	var tamañoCelular;
	var precioCelular;
	var precioMaximo;
	var precioMinimo;
	var recorridoFor;
	var mayorMarca;
	var menorMarca;
	var promedioCelulares;
	var contador;

	contador = 1;
	ingresoCelular = 1;

	while(ingresoCelular == 1)
	{
		contador ++;

		marcaCelular = prompt("Ingrese la marca de su celular: ");

		tamañoCelular = prompt("Ingrese el tamaño de su celular: ");
		tamañoCelular = parseInt(tamañoCelular);

		precioCelular = prompt("Ingrese el precio de su celular: ");
		precioCelular = parseInt(precioCelular);

		//lo uso como contador
		if(contador == 1 )
		{
			precioMaximo = precioCelular;
			precioMinimo = precioCelular;
			mayorMarca = marcaCelular;
			menorMarca = marcaCelular;
		}
		else
		{
			if(ingresoCelular > precioMaximo)
			{
				precioMaximo = precioCelular;
				mayorMarca = marcaCelular;
			}
			if(precioCelular < precioMinimo)
			{
				precioMinimo = precioCelular;
				menorMarca = marcaCelular;
			}
		}









		ingresoCelular = prompt("Desea agregar otro celular?, no para salir");
		if(ingresoCelular == "no")
		{
			break;
		}

		ingresoCelular = 1;
	}

	promedioCelulares = promedioCelulares / contador;
	document.write("El mayor precio del celular es de " + precioMaximo + " y su marca es de " + mayorMarca + "su promedio es de: " + promedioCelulares);
}

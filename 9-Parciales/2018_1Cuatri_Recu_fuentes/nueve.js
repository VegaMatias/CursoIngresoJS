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

	/*
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
*/





/*

	Realizar el algoritmo que permita ingresar la marca de la marca de la gaseosa,la
cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
entre 30 y 100 y
por document.write:
a)La cantidad de precios pares.
b)La marca y litros del más barato
c)La cantidad de gaseosas que valen menos de 50.
d)El promedio del precio de todas las gaseosa.
f)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros.

*/




	


	var marcaPrincipalGaseosa; //ej arcor
	var marcaSecundariaGaseosa; //ej bon o bon
	var cantidadLitros;
	var precioMarcaSecundaria;
	var respuesta;
	var cantidadPreciosPares;
	var precioMayorGaseosa,
	var precioMenorGaseosa;
	var contador;
	var marcaPrecioMasBarato;
	var litrosPrecioMasBarato;
	var precioMasBarato;
	var cantidadGaseosasMenorACincuenta;
	var promedioPrecioGaseosas;
	var precioMayorGaseosaUnLitro;
	var precioMenorGaseosaMenorUnLitro;
	var precioMayorGaseosaDosLitro;
	var precioMenorGaseosaMenorDosLitro;


	marcaPrincipalGaseosa = prompt("Ingrese la marca principal de su gaseosa ");

	contador = 0;
	cantidadPreciosPares = 0;
	precioMasBarato = 999;
	cantidadGaseosasMenorACincuenta = 0;
	promedioPrecioGaseosas = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		contador ++;

		marcaSecundariaGaseosa = prompt("Ingrese el nombre de uno de sus productos de gaseosas de la marca principal ingresada: ");

		cantidadLitros = prompt("Ingrese la cantidad litros de su gaseosa (1,2 o 3): ");
		cantidadLitros = parseInt(cantidadLitros);

		while(cantidadLitros != "1" && cantidadLitros != "2" && cantidadLitros != "3")
		{
			cantidadLitros = prompt("ERROR, ingrese la cantidad litros de 1, 2 o 3 por favor: ");
			cantidadLitros = parseInt(cantidadLitros);
		}




		precioMarcaSecundaria = prompt("Ingrese el precio de su gaseosa entre 30 y 100: ");
		precioMarcaSecundaria = parseInt(precioMarcaSecundaria);

		while(precioMarcaSecundaria > 29 && precioMarcaSecundaria < 101)
		{
			precioMarcaSecundaria = prompt("ERROR, Ingrese el precio de su gaseosa entre 30 y 100 por favor: ");
			precioMarcaSecundaria = parseInt(precioMarcaSecundaria);
		}


		if(precioMarcaSecundaria % 2 == 0)
		{
			cantidadPreciosPares ++;
		}


		if(contador == 1)
		{
			precioMayorGaseosa = precioMarcaSecundaria;
			precioMenorGaseosa = precioMarcaSecundaria;
		}
		else
		{
			if(precioMarcaSecundaria > precioMayorGaseosa)
			{
				precioMayorGaseosa = precioMarcaSecundaria;
			}
			else
			{
				if(precioMarcaSecundaria < precioMenorGaseosa)
				{
					precioMenorGaseosa = precioMarcaSecundaria;

					if(precioMasBarato < precioMarcaSecundaria) //aca
					{
						precioMasBarato = precioMarcaSecundaria;
						marcaPrecioMasBarato = marcaSecundariaGaseosa;
						litrosPrecioMasBarato = cantidadLitros;
					}
				}
			}

			if(cantidadLitros == "1")
			{
				precioMayorGaseosaUnLitro = precioMayorGaseosa;
				precioMenorGaseosaMenorUnLitro = precioMenorGaseosa;
			}
			else
			{
				if(cantidadLitros == "2")
				{
					precioMayorGaseosaDosLitro = precioMayorGaseosa;
					precioMenorGaseosaMenorDosLitro = precioMenorGaseosa;
				}
			}

		}//cierre primer else


		if (precioMarcaSecundaria < 50)
		{

		cantidadGaseosasMenorACincuenta ++;

		}
		

		promedioPrecioGaseosas = promedioPrecioGaseosas + precioMarcaSecundaria;

	







		respuesta = prompt("Si desea ingresar otra marca de sus gaseosas ingrese si, de lo contrario cualquier otra cosa.");
		if(respuesta != "si")
		{
			break;
		}
	}//cierre while
		

	promedioPrecioGaseosas += contador;


}

function mostrar()
{
/*
	en un restaurante, un grupo de amigos quiere saber cuanto debe pagar 
	cada uno del total, recordar que se debe agregar el 10% de propina, y 
	que los precios no incluyen el iva (21%), mostrar toda la informacion en un 
	solo alert
	*/
/*
	var amigos;
	var cuentaTotal;
	var masPropina;
	var aPagarCadaAmigo

	amigos = prompt("Ingrese la cantidad de amigos: ");
	amigos = parseInt(amigos);

	cuentaTotal = prompt("Ingrese la cantidad a pagar en total: ");
	cuentaTotal = parseInt(cuentaTotal);

	masPropina = (cuentaTotal * 10 / 100) + cuentaTotal;

	aPagarCadaAmigo = masPropina  / amigos;

	alert("En un grupo de " + amigos + " amigos, siendo un total de " + cuentaTotal + " mas la propina del 10% quedaria " + masPropina );
*/


	/*
		nos llamaron para hacer un sistema que siempre recibe 4 precios, 
		de estos precios por ej si ingresan 20 60 30 10 , una vez que ingresan 
		los 4 precios le tengo qeu decir al cliente cual fue el importe mas alto ingresado, 
		en este caso seria 60, cuando sumo los precios le tengo que decir cual es el importe, 
		si es mayor que 100 le tengo que hacer un descuento del 10 % , por ej la suma de este da 120, y 
		le dire que tendra que pagar 108, a los que son mayores a 50 le hare un 5% descuento, 
		si esta por debajo del 50% tiene que pagar un 15 % mas!! por ej, 2 5 9 3 es 19, 
		asi que tenra que pagar un 15 % mas a 19... 
	*/



	var precioUno;
	var precioDos;
	var precioTres;
	var precioCuatro;
	var sumaPrecios;
	var mensaje;
	var descuento;
	var aumento;
	var precioFinal;

	precioUno = prompt("Ingrese el primer precio: ");
	precioDos = prompt("Ingrese el segundo precio: ");
	precioTres = prompt("Ingrese el tercer precio: ");
	precioCuatro = prompt("Ingrese el cuarto precio: ");

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);
	precioCuatro = parseInt(precioCuatro);

	if(precioUno >= precioDos && precioUno >= precioTres && precioUno >= precioCuatro)
	{
		mensaje = "El precio mas alto es el: " + precioUno;
	}
	else if( precioDos >= precioTres && precioDos >= precioCuatro)
	{
		mensaje = "El precio mas alto es el: " + precioDos;
	}
	else if(precioTres >= precioCuatro) //el else hace que sea el negativo de arriba, por eso no se repite! XD
	{
		mensaje = "El precio mas alto es el: " + precioTres;
	}
	else
	{
		mensaje = "El precio mas alto es el: " + precioCuatro;
	}

	sumaPrecios = precioUno + precioDos + precioTres + precioCuatro;

	alert(mensaje);



	if(sumaPrecios > 100)
	{
		porcentaje = 10;
		mensaje = "Su importe es de " + sumaPrecios + " asi que tendra un descuento del 10%, lo cual pagará: " ;
	}
	else if(sumaPrecios > 50)
	{
		porcentaje = 5;
		mensaje = "Su importe es de " + sumaPrecios + " asi que tendra un descuento del 5%, lo cual pagará: ";
	}
	else if(sumaPrecios < 50)
	{
		porcentaje = 15;
		mensaje = "Su importe es de " + sumaPrecios + " asi que tendra un aumento del 15%, lo cual pagará: ";
	}


	//cambiar esto solo por porcentaje = "y el valor del %"
	

	if(sumaPrecios > 50)
	{
	descuento = (sumaPrecios * porcentaje / 100);
	precioFinal = sumaPrecios - descuento;
	}
	else
	{
	aumento = (sumaPrecios * porcentaje / 100);
	precioFinal = sumaPrecios + aumento;
	}


	alert(mensaje + precioFinal);
}

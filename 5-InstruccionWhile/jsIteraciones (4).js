function mostrar()
{

	var numero = 11;
	/*
o con parseo... envez de el 11.. parsear adentro y afuera del buucle
numero = parseInt(prompt(Ingrese un numero));
	*/
/*mientras el numero este afura, o mientras el numero no esté adentro.. este ultimo es el de abajho*/

	while(!(numero >= 0 && numero <= 10))
	{
		numero = prompt("ingrese un número entre 0 y 10.");
		/*
numero = parseInt(prompt(ERROR..Ingrese un numero entre 0 y 10));

		*/
	}	

	document.getElementById("Numero").value = numero;	
	


}//FIN DE LA FUNCIÓN
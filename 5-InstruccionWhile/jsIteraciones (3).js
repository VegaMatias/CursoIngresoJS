function mostrar()
{
/*
mientras no sea!!
no es si no se ue..
es MIENTRAS LA CLAVE SEA DISTINTA A "UTN750"
	while(clave!= "utn750")

	hasta aca es bucle infinito... 

	hasta que (el punto 3 )
	que es pedir la clave de vuelta...

	clave = pro..("error, ingrese el numero clave")

bloquea.. el while.. mientras nos e cumpla.. no para
*/
	var clave 
	clave = prompt("ingrese el número clave.");

	while(clave != "UTN750")
	{


		clave = prompt("ERROR, ingrese el numero clave.");
	}

	alert("Bienvenido!");

}//FIN DE LA FUNCIÓN

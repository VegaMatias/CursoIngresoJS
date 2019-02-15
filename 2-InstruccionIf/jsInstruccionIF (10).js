function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var notas;
	var mensaje;

	notas = Math.floor((Math.random()  * 10 ) + 1 );


	if(notas > 8)
	{
		mensaje = "EXCELENTE su nota es: " + notas ;
	}
	 else
	{
		if (notas > 3)
		{
			mensaje = "APROBO su nota es: " + notas;
		}
		else
		{
			mensaje = "Vamos, la proxima se puede su nota es: " + notas;
		}
	}

	alert(mensaje);
	console.log(notas);
}//FIN DE LA FUNCIÓN
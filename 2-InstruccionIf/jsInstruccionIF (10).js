function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var mensaje;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if(numeroRandom > 8)
	{
		mensaje = " Excelente";
	}
	else if(numeroRandom > 3)
	{
		mensaje = " Aprobo"
	}
	else
	{
		mensaje = " Vamos, la proxima se puede";
	}

	alert(numeroRandom + mensaje);
	

}//FIN DE LA FUNCIÓN
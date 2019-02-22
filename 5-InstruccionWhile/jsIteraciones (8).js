function mostrar()
{
/*
	Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y 
	multiplicar los negativos.
*/
	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador;
	var respuesta='si';
/*
	ademas de las dos formas de salir while que se explica antews.. tambien esta el break que seria la tercera forma!
*/
	while(respuesta == "si")
	{
		contador = contador + 1;
		numero = prompt("Ingrese el numero " + contador + "# :" );
		numero = parseInt(numero);
		respuesta = prompt(" => Si para continuar");

		if(numero >= 0)
		{
			positivo = positivo + numero;
		}
		else 
		{
			negativo = negativo * numero;
		}



		/*
		if(respuesta != "si")
		{
			//break; //tiene un while infinito y corta con este break!.. es una herramienta.. lo uso siempre que quiero salir



		}
		*/
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var respuesta;




	for(respuesta = "si"; respuesta == "si"; contador++)
	{
		numero = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + numero;


		/* esto iria adentro de while, por si el usuario NO ingresa un numero, esto lo hara hasta que ingrese un numero
			do
			{
				numero = prompt();
				numero = parseInt(numero);


			} while(isNaN(numero));
		*/

		respuesta = prompt("Si desea ingresar otro numero escriba si, de lo contrario cualquier otra cosa.");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
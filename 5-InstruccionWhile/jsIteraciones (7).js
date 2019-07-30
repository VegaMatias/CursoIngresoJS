function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var respuesta = 'si';
	var numero;
	var promedio;

	while(respuesta == "si")
	{
		numero = parseInt(prompt("Ingrese un numero: "));

		acumulador = acumulador + numero;

		respuesta = prompt("Si desea ingresar otro numero ponga 'si' sin comillas");
		contador = contador + 1;
	}
	promedio = acumulador / contador;

document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN
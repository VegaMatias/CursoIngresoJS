function mostrar()
{

	var numero;
	var promedio;
	var contador=0;
	var acumulador=0;


	while(contador < 5)
	{
		numero = parseInt(prompt("Ingrese un numero: "));
/*
		numero = parseInt(numero);
		numero = prompt("Ingrese un numero: ");
		n9o es lo mismo, con este nu funciona.. DxD
*/
		acumulador = acumulador + numero;

		contador = contador + 1;
	}

	promedio = acumulador / 5;



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value= promedio;

}//FIN DE LA FUNCIÓN
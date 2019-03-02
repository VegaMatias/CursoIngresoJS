function mostrar()
{
	var ingresePais;
	var ingreseSuperficieDePais;
	var respuesta;
	var cantidadPaisesImpar;
	var contador;
	var cantidadPaisesMenosACien;
	var cantidadPaisesIgualACien;
	var nombrePaisSuperoCienSuperficie;


	cantidadPaisesImpar = 0;
	contador = 0;
	cantidadPaisesMenosACien = 0;
	cantidadPaisesIgualACien = 0;
	nombrePaisSuperoCienSuperficie = 0;

	respuesta = "si";

	while(respuesta == "si")
	{
		contador ++;
		ingresePais = prompt("Ingrese un pais: ");

		ingreseSuperficieDePais = prompt("Ingrese la superficie del pais: ");
		ingreseSuperficieDePais = parseInt(ingreseSuperficieDePais);

		//1)

		if(ingreseSuperficieDePais % 2 == 1)
		{
			cantidadPaisesImpar ++;
		}

		//2)
		if(ingreseSuperficieDePais < 100)
		{
			cantidadPaisesMenosACien ++;
		}
		else //3)
		{
			if(ingreseSuperficieDePais == 100)
			{
				cantidadPaisesIgualACien ++;
			}
			else
			{
				
			}
		}

		//4) Con un maximo y menor que recorra)? 4-El nombre del primer país que superó los 100 de superficie 






		respuesta = prompt("Ingrese 'si' para ingresar otro pais y superficie, cualquier otra cosa para salir.");
		while(respuesta != "si")
		{
			break;
		}
	}

	document.write("1) " + cantidadPaisesImpar + "<br>" + "2) " + cantidadPaisesMenosACien + "<br>" + "3) ") + cantidadPaisesIgualACien;
}

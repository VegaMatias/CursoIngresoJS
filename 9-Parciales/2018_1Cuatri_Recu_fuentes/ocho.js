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
	var promedioDeKilometrosIngresados;
	var superficieMasBaja;
	var nombrePaisConSuperficieMasBaja;
	var contadorParaEjercicioSis;
	var contadorEjercicioCuatruo;


	cantidadPaisesImpar = 0;
	contador = 0;
	cantidadPaisesMenosACien = 0;
	cantidadPaisesIgualACien = 0;
	nombrePaisSuperoCienSuperficie = 0;
	promedioDeKilometrosIngresados = 0;
	superficieMasBaja = 0;
	contadorParaEjercicioSis = 1;
	contadorEjercicioCuatruo = 1;

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

			//6)
			if(contadorParaEjercicioSis == 1)
			{
				superficieMasBaja = ingreseSuperficieDePais + 1;
				contadorParaEjercicioSis ++;
			}

			if(superficieMasBaja > ingreseSuperficieDePais)
			{
				superficieMasBaja = ingreseSuperficieDePais;
				nombrePaisConSuperficieMasBaja = ingresePais;
			}

		}

		else //3)
		{
			if(ingreseSuperficieDePais == 100)
			{
				cantidadPaisesIgualACien ++;
			}
			else
			{ //4)
				if(contadorEjercicioCuatruo == 1)
				{
					nombrePaisSuperoCienSuperficie = ingresePais;

					contadorEjercicioCuatruo ++;
				}	


			}
		}

		//5)

		promedioDeKilometrosIngresados = promedioDeKilometrosIngresados + ingreseSuperficieDePais;




		respuesta = prompt("Ingrese 'si' para ingresar otro pais y superficie, cualquier otra cosa para salir.");
		while(respuesta != "si")
		{
			break;
		}
	}

	promedioDeKilometrosIngresados = promedioDeKilometrosIngresados / contador;


	document.write("1) " + cantidadPaisesImpar + "<br>" + 
					"2) " + cantidadPaisesMenosACien + "<br>" + 
					"3) " + cantidadPaisesIgualACien + "<br>" +
					"4) " + nombrePaisSuperoCienSuperficie + "<br>" +
					"5)" +  promedioDeKilometrosIngresados + "<br>" +
					"6)" + nombrePaisConSuperficieMasBaja);
}

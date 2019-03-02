function mostrar()
{
	/*
	var notas;
	var alumnos;
	var sexo;
	var suma;
	var minimo;

	alumnos = 0;
	suma = 0;
	minimo = 999;

	while(alumnos < 5)
	{
		alumnos = alumnos + 1;


		notas = prompt("Ingrese la nota del alumno: " + alumnos);
		notas = parseInt(notas);
		while(notas < 0 || notas > 10)
		{
			notas = prompt("ERROR, ingrese la nota del alumno " + alumnos + " del 0 al 10: ");
		}


		sexo = prompt("Ingrese f si es femenina, o m si es masculino: ");
		while(sexo != "f" && sexo != "m")
		{
		sexo = prompt("ERROR, Ingrese f si es femenina, o m si es masculino: ");
		}


		suma = (suma + notas);
		
		if(notas < minimo)
		{
			minimo = notas;
		}


	}//cierre while


		 suma = suma / alumnos;

		alert("El promedio de las notas totales de los alumnos es: " + suma + " , la nota mas baja es: " + minimo);
*/




	var vehiculos;
	var velocidadKilometros;
	var tipoConbustible;
	var promedioVehiculos;
	var velocidadMasBaja;
	var velocidadMasAlta;
	var acumuladorTipoConbustible;
	var conbustibleLiquido;
	var cantidadConbustibleLiquido;
	var velocidadMasAltaDelSolido;

	promedioVehiculos = 0;
	cantidadConbustibleLiquido = 0;
	velocidadMasAltaDelSolido = 0;

	for(vehiculos = 1; vehiculos < 6; vehiculos ++)
	{
		velocidadKilometros = prompt("Ingrese la velocidad en kilometros de su vehiculo (entre 0 y 250): ");
		velocidadKilometros = parseInt(velocidadKilometros);

		while(velocidadKilometros < 0 || velocidadKilometros > 250)
		{
			velocidadKilometros = prompt("ERROR, Ingrese la velocidad en kilometros de su vehiculo (entre 0 y 250):");
		}



		tipoConbustible = prompt("Ingrese el tipo de conbustible de su vehiculo ('s' solido o 'l' liquido): ");


		while(tipoConbustible != "s" && tipoConbustible != "l")
		{
			tipoConbustible = prompt("ERROR, Ingrese el tipo de conbustible de su vehiculo ('s' solido o 'l' liquido): ");
		}




		//1)
		promedioVehiculos = promedioVehiculos + velocidadKilometros;



		//2)

		if(vehiculos == 1)
		{
			velocidadMasAlta  = velocidadKilometros;
			velocidadMasBaja = velocidadKilometros;
			acumuladorTipoConbustible = tipoConbustible;
			velocidadMasAltaDelSolido = velocidadKilometros;
		}
		else
		{
			if(velocidadKilometros > velocidadMasAlta)
			{
				velocidadMasAlta = velocidadKilometros;
			}
			else
			{
				if(velocidadKilometros < velocidadMasBaja)
				{
					velocidadMasBaja = velocidadKilometros;
					acumuladorTipoConbustible = tipoConbustible;
				}
			}
		}

		//3)

		if(acumuladorTipoConbustible == "l" && velocidadKilometros > 100)
		{
			cantidadConbustibleLiquido = cantidadConbustibleLiquido + 1;			
		}


		if(tipoConbustible == "s" && velocidadMasAltaDelSolido < velocidadKilometros )
		{	
			velocidadMasAltaDelSolido = velocidadMasAlta;	
		}


		alert("Su vehiculo tiene una velocidad de " + velocidadKilometros + " kilometros y tiene un conbustible " + tipoConbustible);

	}//cierre for


	promedioVehiculos = promedioVehiculos / 5;

	alert("El promedio de las velocidades totales es de: " + promedioVehiculos);
	alert("La velocidad mas baja es la de " + acumuladorTipoConbustible + " con " + velocidadMasBaja + " kilometros.");
	alert("La cantidad de conbustible liquido que supera los 100 kilometros es de: " + cantidadConbustibleLiquido);
	alert("La velocidad mas alta de los de conbustible solido es de: " + velocidadMasAltaDelSolido);
}

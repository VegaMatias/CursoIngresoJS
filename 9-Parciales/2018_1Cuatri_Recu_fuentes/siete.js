function mostrar()
{






	/*

en siete.js,
Realizar el algoritmo que permita el ingreso por prompt de las velocidades en
kilómetros (validar entre 0 y 250) , el tipo de combustible, validar el tipo “s” o “l”
para solido o liquido, de 5 vehículos de prueba ,informar por alert:
1-El promedio de las velocidades totales.
2-La velocidad más baja y el tipo de combustible de ese vehículo.
3-La cantidad de combustibles líquidos que su velocidad supere los 100
kilómetros.
4-la velocidad más alta de los de combustible sólido



Realizar el algoritmo que permita iterar el ingreso de dos datos, un país y la
superficie de su territorio (validar) hasta que el usuario quiera e informar al terminar
el ingreso por document.write:
1-La cantidad de países con superficie impar.
2-La cantidad de países con superficie menor a 100
3-La cantidad de países con superficie igual a 100
4-El nombre del primer país que superó los 100 de superficie
5-El promedio de kilómetros ingresados.
6-El nombre del que menos territorio tiene.

japon 10
italia 20
bolivia 2
argentina 100
rusia 200
eeuu 300
chine 9
peru 301




Realizar el algoritmo que permita ingresar la marca de la marca de la gaseosa,la
cantidad de litros (validar entre 1 litro, 2 litros y 3 litros), el precio el cual debe ser
entre 30 y 100 y
por document.write:
a)La cantidad de precios pares.
b)La marca y litros del más barato
c)La cantidad de gaseosas que valen menos de 50.
d)El promedio del precio de todas las gaseosa.
f)El precio máximo y el mínimo de todas las gaseosa de menores de 3 litros.

	*/
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
			velocidadKilometros = parseInt(velocidadKilometros);

		}



		tipoConbustible = prompt("Ingrese el tipo de conbustible de su vehiculo ('s' solido o 'l' liquido): ");


		while(tipoConbustible != "s" && tipoConbustible != "l")
		{
			tipoConbustible = prompt("ERROR, Ingrese el tipo de conbustible de su vehiculo ('s' solido o 'l' liquido): ");
		}




		//1)
		promedioVehiculos = promedioVehiculos + velocidadKilometros;
		//tambien se puede escribir en promedioVehiculos += velocidadKilometros; o el *= | -=  |/=


		//2)

		if(vehiculos == 1)
		{
			//velocidadMasAlta  = velocidadKilometros;
			velocidadMasBaja = velocidadKilometros;
			acumuladorTipoConbustible = tipoConbustible;
			//velocidadMasAltaDelSolido = velocidadKilometros;
		}
		else
		{
			/*
			if(velocidadKilometros > velocidadMasAlta)
			{
				velocidadMasAlta = velocidadKilometros;
			}
			*/
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

		//4/

		if(tipoConbustible == "s" && velocidadMasAltaDelSolido < velocidadKilometros )
		{	
			velocidadMasAltaDelSolido = velocidadKilometros;	
		}


		alert("Su vehiculo tiene una velocidad de " + velocidadKilometros + " kilometros y tiene un conbustible " + tipoConbustible);

	}//cierre for


	promedioVehiculos = promedioVehiculos / 5;

	alert("El promedio de las velocidades totales es de: " + promedioVehiculos);
	alert("La velocidad mas baja es la de " + acumuladorTipoConbustible + " con " + velocidadMasBaja + " kilometros.");
	alert("La cantidad de conbustible liquido que supera los 100 kilometros es de: " + cantidadConbustibleLiquido);
	alert("La velocidad mas alta de los de conbustible solido es de: " + velocidadMasAltaDelSolido);
}

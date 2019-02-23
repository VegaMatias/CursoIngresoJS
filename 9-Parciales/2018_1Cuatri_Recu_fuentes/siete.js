function mostrar()
{
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

}

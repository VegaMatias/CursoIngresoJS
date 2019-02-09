/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = elNombre.value;
	edad = laEdad.value;
	

	/*
		linea 42 y 44
		otro metodo tambien seria hacer lo mismo pero con 
		variable = document.getElementById('ID').value;
		.... etc..
	*/


	alert("Usted se llama " + nombre + " y tiene " + edad + " años.");

}


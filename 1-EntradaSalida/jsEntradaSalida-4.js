/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	/*
		Primera forma hacerlo.

	var nombre;

	nombre = prompt("Ingrese su nombre: ");
	elNombre.value=nombre;
*/
	/*
		Segunda forma de hacerlo
	*/
	
	var nombre;
	nombre=prompt("Ingrese su nombre: ");


	document.getElementById('elNombre').value = nombre;

}


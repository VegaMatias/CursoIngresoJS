/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombre;
	nombre = prompt("Ingrese su nombre: ");
	// elNombre.value=nombre; 
	
	/*
	lo que hace en la linea 9 es cambiar el valor de readonly placeholder
	<input type="text" readonly placeholder="Su nombre" id="elNombre">
	 (linea 41)por el de la variable nombre, ya que en esa linea estoy
	 diciendo que ese readonly placeholder que vale "su nombre! pase a valer 
	 lo que vale la variable nombre, y por es me lo muestra en donde
	 deberia de decir "su nombre"
	 */

	/*
		ahora lo mismo pero utilizando con getElementById
	*/


	document.getElementById('elNombre').value = nombre;

	/*
		aca lo que digo es que en documento de html voy a llamar
		a un elemento por su ID, en este caso el ID es elNombre
		el cual va entre parentesis y comillas simples y luego
		el atributo que seria value, asi cambia el valor de este
		por el de la variable nombre
	*/

	/*
		ambos casos hacen lo mismo
	*/
}


function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;

//alert (mesDelAño);

switch(mesDelAño)
{
	case "Febrero":
		mensaje = "Este mes no tiene mas de 29 dias.";
	break;

	default: 
		mesnsaje = "Este mes tiene 30 o más días.";

}

alert(mensaje);
	
	


}//FIN DE LA FUNCIÓN
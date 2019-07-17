function mostrar()
{
//tomo la edad 


var mesDelAño;
var mensaje;

mesDelAño= document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
        mensaje = "Este mes tiene 28 dias";
    break;

    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
        mensaje = "Este mes tiene 30 dias";
    break;

    default:
        mensaje = "Este mes tiene 31 dias";
}

alert(mensaje);

//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN
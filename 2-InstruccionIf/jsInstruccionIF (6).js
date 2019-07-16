function mostrar()
{
//tomo la edad
/*
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente
 (entre 13 y 17 años) o niño (menor a 13 años).
*/

var edad;
var mensaje;

edad = document.getElementById("edad").value;

if(edad >= 18)
{
    mensaje = "La persona es mayor de edad";
}
else if(edad >= 13)
{
    mensaje = "La persona es adolescente";
}
else
{
    mensaje = "La pesona es menor";
}

alert(mensaje);



}//FIN DE LA FUNCIÓN
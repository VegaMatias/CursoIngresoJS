function mostrar()
{
//tomo la edad
    var edad;
    var mensaje;

    edad = document.getElementById("edad").value;

    if(edad > 17)
    {
        mensaje = "Es mayor de edad";
    }
    else if(edad > 12)
    {
        mensaje = "Es adolescente";
    }
    else
    {
        mensaje = "Es un niño";
    }

    alert(mensaje);




}//FIN DE LA FUNCIÓN
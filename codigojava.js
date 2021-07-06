var texto = document.getElementById("texto_text");
var boton = document.getElementById("botoncito");
var color_text = document.getElementById("colorcito");
boton.addEventListener("click", dibujoporclick);
var d = document.getElementById("papel");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujoporclick(){

var L = 0;
var lineas = texto.value;
var yi, xf;
var colorfuncion = colorcito.value;
var espacio = ancho / lineas;

for(L = 0; L < lineas; L++){

    yi = espacio * L;
    xf = espacio * (L + 1);

    Dibujarlinea(colorfuncion, 0, yi, xf, 300);
}

for(L = 0; L < lineas; L++){

    yi = espacio * L;
    xf = espacio * (L + 1);

    Dibujarlinea(colorfuncion, 300, yi, xf, 0);
}



function Dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;

}

Dibujarlinea("black", 1, 1, 1, 299);
Dibujarlinea("black", 299, 1, 1, 1);
Dibujarlinea("black", 1, 299, 299, 299);
Dibujarlinea("black", 299, 299, 299, 1);


}
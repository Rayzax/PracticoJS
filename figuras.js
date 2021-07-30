// Codigo del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado = ladoCuadrado){
    return lado * 4;
}

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado = ladoCuadrado){
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areaCuadrado + "cm");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos")

function ladosTriangulo(lado1, lado2, base){
    return `El lado 1 es de ${lado1} cm, el lado 2 es de ${lado2} y la base de ${base}`
};

function perimetroTriangulo(lado1, lado2, base){
    var perimetro = lado1 +lado2 +base; 
    return `El perimetro del Triangulo es de ${perimetro} cm`
}

function areaTriangulo(base, altura){
    var area = (base * altura) / 2;
    return `El area del Triangulo es de ${area} cm`;
}

console.groupEnd();


//Código del Circulos
console.group("Circulos");
var PI = Math.PI;
function diametroCirculo(radio){
    var diametro = radio * 2;
    return `El diametro del circulo es de ${diametro} cm`
}

function perimetroCirculo(diametro){
    var perimetro = diametro * PI;
    return `El diametro del circulo es de ${perimetro} cm`;
}

function areaCirculo(radio){
    var area = PI * (radio**2);
    return `El area del circulo es de ${area} cm`;
}
console.groupEnd();

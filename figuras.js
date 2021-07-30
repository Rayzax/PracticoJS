// Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado =  ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + "cm");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;


console.log(
    "Los lados del triangulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(
    "El perimetro del triangulo mide: " 
    + perimetroTriangulo 
    + "cm"
);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("El area del triangulo es de: " + areaTriangulo);

console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();
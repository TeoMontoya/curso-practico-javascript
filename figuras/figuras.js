//Código del cuadrado
console.group("Cuadrados")
const medida = "cm";

//const ladoCuadrado = 5;
//console.log ("Los lados del cuadrado miden: " + ladoCuadrado + medida);


function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log ("El perímetro del cuadrado es: " + perimetroCuadrado + medida);

function areaCuadrado (lado) {
    return lado * lado;
}
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log ("El área del cuadrado es: " + areaCuadrado + medida+"^2");
console.groupEnd();

//Código del triángulo

console.group("Triangulos")


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;


// console.log ("Los lados del triángulo miden: "
//  + ladoTriangulo1 
//  + medida 
//  + ", " 
//  + ladoTriangulo2 
//  + medida 
//  + ", " 
//  + baseTriangulo 
//  + medida 
//  + ".");


// const alturaTriángulo = 5.5;
//  console.log ("La altura del triángulo es: " + alturaTriángulo + medida);

function perimetroTriangulo (lado1, lado2, base){
    return (lado1 + lado2 + base);
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//  console.log ("El perímetro del triángulo es: " + perimetroTriangulo + medida);

function areaTriangulo (base, altura) {
    return (base * altura)/2;
}



// const areaTriangulo = (baseTriangulo * alturaTriángulo) / 2;
//  console.log ("El área del triángulo es: " + areaTriangulo + medida + "^2");

console.groupEnd();

 //Código círculo

console.group("Círculos")


// //Radio
// const radioCirculo = 4;
// console.log ("El radio del círculo es: " + radioCirculo + medida);

function diametroCirculo (radio) {
    return radio * 2;
}
// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log ("El diámetro del círculo es: " + diametroCirculo + medida);

// PI
const PI = Math.PI;
console.log ("PI es : " + PI);

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}
// //Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log ("El perímetro del círculo es: " + perimetroCirculo + medida);

function areaCirculo(radio) {
    return (radio * radio) * PI; 
}
// //Area
// const areaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log ("El área del círculo es: " + areaCirculo + medida);

console.groupEnd();

//Aca vamos a interactuar con el html

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    //valor
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");

    const value1 = parseInt(lado1.value);
    const value2 = parseInt(lado2.value);
    const valueBase = parseInt(base.value);

    const perimetro = perimetroTriangulo(value1, value2, valueBase);
    alert (perimetro);

}

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");

    const value1 = parseInt(lado1.value);
    const value2 = parseInt(lado2.value);
    const valueBase = parseInt(base.value);

    if (value1 == value2 && value1 != valueBase){
        console.log("Es un triangulo isosceles");3
        const altura = Math.sqrt(value1**2 - valueBase**2/4)
        alert (altura);
    }
    else {
        alert ("No es un triangulo isosceles");
    }
}


function calcularAreaTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");

    const value1 = parseInt(lado1.value);
    const value2 = parseInt(lado2.value);
    const valueBase = parseInt(base.value);

    const altura = Math.sqrt(value1**2 - valueBase**2/4)

    const area = areaTriangulo(base, altura);
    alert (area);
}
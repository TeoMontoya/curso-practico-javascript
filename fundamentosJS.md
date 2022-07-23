## Respuestas al Test de JavaScript


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
    Una variable es un espacio reservado en memoria, tienen diferentes tipos, y son, digamos, las herramientas mínimas con las que vamos a crear nuestro código

- ¿Cuál es la diferencia entre declarar e inicializar una variable?
    declarar una variable es reservar ese espacio en memoria, pero sin darle ningún valor. Por otro lado, inicializar una variable involucra darle un valor y un tipo de dato, sea string, number o boolean.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
    al sumar números llevas a cabo una operación matemática con el operador "+", mientras que al concatenar, estás juntando dos cadenas de caráteres y podría darse una corción si las cadenas son "string" + "number"
- ¿Cuál operador me permite sumar o concatenar?
    el operador de suma  "+" nos permite sumar números además de concatenar elementos.

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre ``` String ```
- Apellido ```String```
- Nombre de usuario en Platzi ```String```
- Edad ```number```
- Correo electrónico ```string```
- Mayor de edad ```boolean```
- Dinero ahorrado ```number```
- Deudas ```number```

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

    let name = 'Mateo';
    let surname = 'Montoya';
    let platiUser = "Timoteo";
    let age = 25;
    let email = "mateomontoya-97@outlook.com";
    let adult = true;
    let savedMoney = 100000;
    let debt = 15000;

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```
- Nombre completo (nombre y apellido)

   let completeName = name + ' ' + surname;
    console.log(`Hola, mi nombre es ${completeName}, un placer conocerte.)

- Dinero real (dinero ahorrado menos deudas)

    let realMoney = savedMoney - debt;
    console.log(realMoney);
```

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
    Una función es un bloque de código que solo se ejecuta cuando recibe un "trigger" o "es invocada". Usa 		parámetros y recibe argumentos por parte de los usuarios.

- ¿Cuándo me sirve usar una función en mi código?
    utilizas una función cuando quieras realizar una tarea específica o, cuando busques reciclar código para evitar que se vuelva repetitivo

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
    los parámetros son los valores intrínsecos de una función, necesarios para su funcionamiento, mientras que los argumentos son los valores actuales que usa la fucnión cuando es llamada.

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```
Mi respuesta
```

function introduction(name, surname, alias) {
    let completeName = name + ' ' + surname;

    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${alias}.`);
}

    introduction('Mateo', 'Montoya', 'Teo');

```

## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
    un condicional es código que es ejecutado cuando se cumplen una condición (valga la redundancia) lógicas.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    existen los condicionales "if", "else" y "switch". Mientras que If  compara declaraciones o casos específicos, switch sirve para comparar una expresión vs múltiples casos.

- ¿Puedo combinar funciones y condicionales?
    No solo puedes combinarlas, hay ocasiones donde hacerlo va a simplificarte la vida.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```
Mi respuesta:
```
    const subscriptionType = 'Basic';
        if (subscriptionType == 'Free') {
            console.log('Solo puedes tomar los cursos gratuitos');
        }
        else if (subscriptionType == 'Basic') {
            console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
        }
         else if (subscriptionType == 'Expert') {
            console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
        }
         else if (subscriptionType == 'ExpertPlus') {
            console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
        }
        else {
            console.log('¿Qué estás esperando para unirte a esta comunidad?');
        }
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```

function conseguirTipoSuscripcion(suscripcion) {
        if (suscripcion == 'Free') {
            console.log('Solo puedes tomar los cursos gratuitos');
            return;
        }
        if (suscripcion == 'Basic') {
            console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
            return;
        }
        if (suscripcion == 'Expert') {
            console.log('Puedes tomar casi todos los cursos de Platzi durante un año');
            return;
        }
        if (suscripcion == 'Expertduo') {
            console.log('Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año');
            return;
        }

        console.warn('Ese tipo de suscripcion no existe.')
}

```

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

<!---
   Si en lugar de 4 elementos, tuviera 40 o 400, tendría que escribir un nuevo condicional por cada uno de los casos que existen y nelson.
    lo que podemos hacer, es crear un objeto.
    A este objeto vamos a crearles distintos elementos y cada elemento va a ser uno de los mensajes que yo imprimo en cada suscripcion y el nombre clave de cada uno de esos valores va a ser el nombre de la suscripcion como tal.
    --->

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratuitos',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
}

<!---  
    Ahora si entro a tiposDeSuscripciones.free nos da automaticamente el mensaje -el valor- de esa propiedad, que es el mensaje que debemos dar

    Pero Pero Pero Pero Pero Pero Pero Pero
    tambien podemos entrar Y OJO QUE ES LO MAS IMPORTANTE
    tambien podemos entrar a los objetos con estos simbolos [] SI Y SOLO SI  entre comillasle especificamos el nombre de la propiedad
--->

tiposDeSuscripciones['free']
'Solo puedes tomar los cursos gratuitos'
const ejemploSuscripcion = 'free'

tiposDeSuscripciones[ejemploSuscripcion]
'Solo puedes tomar los cursos gratuitos'

<!--- 
    Creamos una variable que se llame ejemploSuscripcion = 'free';
    si llamamos a tiposDeSuscripciones[ejemploSuscripcion] tambien funciona
    si esto lo convierto en una funcion que como parametro reciba la suscripcion que queremos ver si existe, eso nos va a ayudar a retornar el objeto que queremos imprimir.
 --->

function conseguirTipoSuscripcion(parametro) {
    if (tiposDeSuscripciones[parametro]){
        console.log(tiposDeSuscripciones[parametro]);
        return;
    }

        console.warn('Ese tipo de suscripcion no existe')
}


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
    Un ciclo es un bloque de código que se repetirá el número de veces que le indiquemos o hasta que se cumpla una condición.

- ¿Qué tipos de ciclos existen en JavaScript?
    Existen los ciclos for, while y do while.
    Los ciclos while revisan primero la condicion y luego ejecuta el ciclo.
    Mientras que el ciclo do while, ejecuta el ciclo al menos una vez y luego la condicon es revisada

- ¿Qué es un ciclo infinito y por qué es un problema?
    Un ciclo infinito es un ciclo que se inicia pero no se puede detener. Es un problema porque va a estar usando recursos hasta que la computadora o el programa que lo está corriendo, deje de funcionar.

- ¿Puedo mezclar ciclos y condicionales?
    Sí, es posible mezclar ciclos y condicionales.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```
    ```

    let x = 0;
    while (x < 5) {
        console.log('El valor de x es: ' + x);
        x++;
    }

    let y = 10;
    while (y >= 2) {
        console.log ('El valor de y es: ' + y);
        y--;
    }
    ```
### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
```
    let respuesta;
        (respuesta != 4) {
            let pregunta = prompt('¿Cúanto es 2 + 2?')
            respuesta = pregunta;
        }
```
## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
    un array es una variable que contiene múltiples datos en su interior. 
- ¿Qué es un objeto?
    un objeto es una variable donde se guardan los datos con propiedades y valores para esas propiedades.

- ¿Cuándo es mejor usar objetos o arrays?
    Los objetos son mejores cuando se trata de guardar variables que contienen diferentes propiedades, mientras que el array nos permiten agregar, buscar y eliminar elementos de forma fácil y rápida.

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
    Si, de hecho un objeto puede contener una o múltiples arrays y visceversa.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```

function printFirstItem(arr) {
    console.log('El primer objeto es: ' + array[0]);
}

```

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

originalmente habia escrito 
```

function printEachElement(arr) {
    for (i = 0; i < array.length; i++);
    console.log(arr[i]);
}
printEachElement(['pepito', 'Array', 'Lista'])

```
Lo cual evidentemente no funciona.
Hasta que entendí el error, el console.log va en un conjunto de llaves aparte de esta forma

```

function printEachElement(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printEachElement(['cosa1', 'cosa2', 'cosa3'])

```


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```

const objeto = {
    nombre: 'Carlos',
    edad: 15,
    comidasFavoritas: ['Pollo frito', 'Vegetales', 'pure de papa']
};
//puedo tratar el Object.values() como un arreglo, en una variable

const arr = Object.values(objeto)

// Ahora, voy a escribir la funcion que me deje imprimir sus elementos

function printEachElement(objeto) {
    const arr = Object.values(objeto)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

printEachElement(objeto)

```
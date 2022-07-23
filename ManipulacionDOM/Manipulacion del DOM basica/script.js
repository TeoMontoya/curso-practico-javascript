//query selector nos pide que sleccionemos cuales osn las etiquetas o los IDs o las clases con las que queremos selccionar algo en html

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.value);

console.log ({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//Si quiero cambiar una parte interna del HTML, puedo hacerlo desde JS, asi

h1.innerText = 'Patito <br> Feo';
h1.innerHTML = 'Patito <br> Feo';

//la forma normal de modificar un atributa es con 
//getAttribute y setAtribute

//getAttribute nos ayuda a leer alguno de los elementos/atributos de nuestro elemento

//console.log(h1.getAttribute('class'));

//con setAttribute podemos modificar esos atributos

//h1.setAttribute('class', 'rojo');

//Pero si hablamos de clases en especifico, existe otra funcion que trabaja especificamente con las clases

h1.classList.add('rojo');
h1.classList.remove('verde')

//Puedo tambien cambiar el value predefinido a un input desde JS sin la necesidad de getAttribute

input.value = "";

// Ademas podemos crear elementos HTML

console.log(document.createElement('img'));

//Ahora, como traemos esa imagen a el documento y darle utilidad

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
console.log(img);

//Y para meterlo en alguna parte -En este caso, en el pid-

pid.append(img);

//OJITO
//OJITO 
//OJITOCUIDADOOOOOOOOO

//el getElementByID no se puede utilizar como un querySelector. Este se usa como si fuera css

//Also!!
//Ojito de nuevo
//en getElementById, no tengo que ponerle el #id o .class, solo el nombre del id o de la class

pid.innerHTML = "";
pid.appendChild(img);
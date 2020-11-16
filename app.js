//Ejemplo 1 - Accedemos a diferentes elementos del objeto.

/* const cliente = {
  nombre: "Hypermarket",
  direccion: "C/Las Habas 14",
  ciudad: "MarketCity",
  facturación: 23.000,
  facturasPendientes: true,
};

const empleados = ["Jose", "Maria", "Juan", "Pepa"]  */

/* const cliente = {
  nombre: "Hypermarket",
  direccion: "C/Las Habas 14",
  ciudad: "MarketCity",
  facturación: 23.0,
  facturasPendientes: true,
  empleados: ["Jose", "Maria", "Juan", "Pepa"],
}; */

// Ejemplo 2 - Inspeccionamos htpps://www.ultimatetennisstatistics.com/rankingsTable
//inspeccionamos la red/network y vemos un GET request que tiene formato json.
//lo abrimos y cargamos la información en https://codebeautify.org/jsonviewer
//abrimos un archivo .js y lo pegamos ahí, lo importamos.

//console.log(tennisRankings); - como el script que contiene la variable tennisRankings está antes que app.js, se puede acceder a dicha variable, que está definida en el "global scope"
/* 
console.log(tennisRankings);
console.log(tennisRankings.rows[4].country.name);  */

//Ejemplo 3

/* let url = "https://www.cuttenvents.online";
let ruta = "experiencia-online";

let rutaCompleta = url + "/" + ruta;
let rutaCompletaLiteral = `${url}/${ruta}`; //más utilizada desde la aparición de el estandard de JS (ES6)
console.log(rutaCompleta, rutaCompletaLiteral);

document.getElementById("test").innerHTML = rutaCompletaLiteral;
 */

//Ejemplo 4 - Vamos a crear un cuadrado, y combinaremos 3 colores

/* let r = 0;
let g = 0;
let b = 0;
let rgbConcatenation = "rgb" + "(" + r + "," + g + "," + b + ")";
let rgbLiteral = `rgb(${r},${g},${b})`;
console.log(rgbConcatenation, rgbLiteral); */

//Ejemplo 5 - Cambiar el color del cuadrado

/* let r = 255;
let g = 125;
let b = 155;
let rgbLiteral = `rgb(${r},${g},${b})`;
document.getElementById("test").style.backgroundColor = rgbLiteral; */

//Ejemplo 6 - HTML+CSS+JS Juntos
/* let r = 100;
let g = 110;
let b = 123;

let divTest = `
     <div id=test style="background-color: rgb(${r},${g},${b})">
     </div>
`; */
// además, el cuadrado sigue centrado, porque la única regla de css que se ha sobreescrito es background-color
/* document.body.innerHTML = divTest; */

//Ejemplo 7 - supongamos que queremos que el color sea aleatorio cada vez que refresquemos la pantalla

/* const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let divTest = `
     <div id=test style="background-color: rgb(${r},${g},${b})">
     </div>
`;
  console.log(r, g, b);
  return divTest;
};

randomColor();
document.body.innerHTML = randomColor(); */

//Ejemplo 8 - tratamos de mostrar algunos de los tenistas en pantalla.

/* console.log(tennisRankings);

const Djokovic = `
    <div id="player"><h2>${tennisRankings.rows[0].name}</h2></div>
`;
const Nadal = `
    <div><h2>${tennisRankings.rows[1].name}</h2></div>
`;
document.body.innerHTML = Djokovic + Nadal; */

//Ejemplo 9

/* const player = `
     <div><h2>${tennisRankings.rows[0].name}</h2></div>
     <div><h2>${tennisRankings.rows[1].name}</h2></div>
     <div><h2>${tennisRankings.rows[2].name}</h2></div>
     <div><h2>${tennisRankings.rows[3].name}</h2></div>
     <div><h2>${tennisRankings.rows[4].name}</h2></div>
     <div><h2>${tennisRankings.rows[5].name}</h2></div>
     <div><h2>${tennisRankings.rows[6].name}</h2></div>
     <div><h2>${tennisRankings.rows[7].name}</h2></div>
     <div><h2>${tennisRankings.rows[8].name}</h2></div>
     <div><h2>${tennisRankings.rows[9].name}</h2></div>
`;

document.body.innerHTML = player; */

//Ejemplo 10 - for loop

/* const displayRanking = () => {
  let container = document.createElement("DIV");
  container.className = "container";
  for (i = 0; i < 10; i++) {
    container.innerHTML += `<h2>${tennisRankings.rows[i].name}</h2>`;
  }
  document.body.appendChild(container);
  console.log(container);
  return document.body;
};

displayRanking(); */

//Ejemplo 11

/* const displayRanking = () => {
  let container = document.createElement("DIV");
  container.className = "container";
  for (i = 0; i < 10; i++) {
    container.innerHTML += `
    <h3>
     ${tennisRankings.rows[i].rank}
     ${tennisRankings.rows[i].name}
     ${tennisRankings.rows[i].country.name}
     ${tennisRankings.rows[i].bestRank}
    </h3>`;
  }
  document.body.appendChild(container);
  console.log(container);
  return document.body;
};

displayRanking(); */

//Ejemplo 13- Añadamos CSS

/* const displayRanking = () => {
  let container = document.createElement("DIV");
  let title = document.createElement("DIV");
  let players = document.createElement("DIV");
  container.className = "container";
  title.className = "title";
  players.className = "players";

  title.innerHTML = `
   <h1>Ranking</h1>
   <h1>Name</h1>
   <h1>Country</h1>
   <h1>Best Ranking</h1>
  `;

  for (i = 0; i < 10; i++) {
    players.innerHTML += `
    <div class="player">
      <h5>${tennisRankings.rows[i].rank}</h5>
      <h5>${tennisRankings.rows[i].name}</h5>
      <h5>${tennisRankings.rows[i].country.name}</h5>
      <h5>${tennisRankings.rows[i].bestRank}</h5>
    </div>
    
    `;
  }

  document.body.appendChild(container);
  container.appendChild(title);
  container.appendChild(players);   

  return document.body;
};

displayRanking(); */

//Ejemplo 12- Añadamos CSS - ternary operator en asignacion de clases, para distinguir a los que están en su mejor ranking histórico.

const displayRanking = () => {
  let container = document.createElement("DIV");
  let title = document.createElement("DIV");
  let players = document.createElement("DIV");
  container.className = "container";
  title.className = "title";
  players.className = "players";

  title.innerHTML = `
   <h1>Ranking</h1>
   <h1>Name</h1>
   <h1>Country</h1>
   <h1>Best Ranking</h1>
  `;

  for (i = 0; i < 10; i++) {
    players.innerHTML += `
    <div class="player ${
      tennisRankings[i].rank > tennisRankings[i].bestRank ? "red" : "green"
    }">
      <h5>${tennisRankings[i].rank}</h5>
      <h5>${tennisRankings[i].name}</h5>
      <h5>${tennisRankings[i].country_name}</h5>
      <h5>${tennisRankings[i].bestRank}</h5>
    </div>
    
    `;
  }

  document.body.appendChild(container);
  container.appendChild(title);
  container.appendChild(players);

  return document.body;
};

displayRanking();

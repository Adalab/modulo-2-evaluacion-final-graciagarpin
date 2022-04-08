'use strict';

//Obtener datos del HTML-DOM (ul)
const ulCocktails = document.querySelector('.js-list-cocktails');
const inputSearch = document.querySelector('.js-inputSearch');
const searchBtn = document.querySelector('.js-searchBtn');
const resetBtn = document.querySelector('js-resetBtn');

//Guardar en una variable global los datos de los cócteles.
let cocktails = [];
let favorites = [];

//Pintar los cóckteles
function paintCocktails() {
  let html = '';

  for (const cocktailItem of cocktails) {
    html += `<li class="list__item js-li-cocktails" id="${cocktailItem.idDrink}">`;
    //nombre
    html += `<h3 class="item__str">${cocktailItem.strDrink}</h3>`;
    //foto
    html += `<img class="item__img" src=" ${cocktailItem.strDrinkThumb}">`;
    html += `</li>`;
  }
  ulCocktails.innerHTML = html;
}

//Pintar los favoritos

//Hacer la petición al servidor sólo para margaritas (prueba) -
function getFromApi() {
  let searchedCocktail = inputSearch.value; //.toLowerCase
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedCocktail}`
  )
    .then((response) => response.json())
    .then((data) => {
      //Guardar la información de los cócktails
      cocktails = data.drinks.map((item) => {
        const newCocktail = {
          idDrink: item.idDrink,
          strDrink: item.strDrink,
          strDrinkThumb: item.strDrinkThumb,
        };
        return newCocktail;
      });
      console.log(cocktails);

      paintCocktails();
      resultsListener();
    });
}

function handleClickLi(event) { // event es la información del evento click ocurrido
  console.log('hola click');
  console.log(event.currentTarget.id);
  const id = event.currentTarget.id;
  // meter en una const el id
  //comprobar si el elemento está en el array de favoritos (if...else) - find o findIndex
  // si está, no añadir
  // si no está, añadir al array de favoritos (hacer push) - es modificar el array de fav
  // ahora pintarlo en el html de favoritos
 
// favorites.push()
}

searchBtn.addEventListener('click', getFromApi);

//listener de cada li
function resultsListener() {
  const liCocktails = document.querySelectorAll('.js-li-cocktails');
  for (const item of liCocktails) {
    item.addEventListener('click', handleClickLi);
  }
}

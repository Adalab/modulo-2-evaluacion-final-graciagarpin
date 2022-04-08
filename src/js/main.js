'use strict';

//Obtener datos del HTML-DOM (ul)
const ulCocktails = document.querySelector('.js-list-cocktails');
const inputSearch = document.querySelector('.js-inputSearch');
const searchBtn = document.querySelector('.js-searchBtn');
const resetBtn = document.querySelector('js-resetBtn');

//Guardar en una variable global los datos de los cócteles.
let cocktails = [];

//Pintar los cóckteles
function paintCocktails() {
  let html = '';

  for (const cocktailItem of cocktails) {
    html += `<li class="list__item">`;
    //nombre
    html += `<h3 class="item__str">${cocktailItem.strDrink}</h3>`;
    //foto
    html += `<img class="item__img" src=" ${cocktailItem.strDrinkThumb}">`;
    html += `</li>`;
  }
  ulCocktails.innerHTML = html;
}

//Hacer la petición al servidor sólo para margaritas (prueba) -
function getFromApi() {
  let inputSearchValue = inputSearch.value; //.toLowerCase
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputSearchValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      //Guardar la información de los cócktails
      cocktails = data.drinks;
      console.log(cocktails);
      paintCocktails();
    });
}

function handleClick() {
  getFromApi();
}

searchBtn.addEventListener('click', handleClick);


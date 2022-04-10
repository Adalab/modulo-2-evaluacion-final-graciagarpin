'use strict';

//Obtener datos del HTML-DOM (ul)
const ulCocktails = document.querySelector('.js-list-cocktails');
const ulFavorites = document.querySelector('.js-list-favorites');
const searchInput = document.querySelector('.js-searchInput');
const searchBtn = document.querySelector('.js-searchBtn');
const resetBtn = document.querySelector('js-resetBtn');

//Guardar en una variable global los datos de los cócteles.
let cocktails = [];
let favorites = [];

//Pintar los cóckteles
function paintCocktails() {
  let html = '';

  for (const cocktailItem of cocktails) {
    html += `<li class="list__item js-li-card" id="${cocktailItem.idDrink}">`;
    //nombre
    html += `<h3 class="item__str">${cocktailItem.strDrink}</h3>`;
    //foto
    html += `<img class="item__img" src=" ${cocktailItem.strDrinkThumb}">`;
    html += `</li>`;
  }
  ulCocktails.innerHTML = html;
}

//Pintar los favoritos
function paintFavorites() {
  let html = '';

  for (const favoriteItem of favorites) {
    html += `<li class="list__item js-li-fav" id="${favoriteItem.idDrink}">`;
    //nombre
    html += `<h3 class="item__str">${favoriteItem.strDrink}</h3>`;
    //foto
    html += `<img class="item__img" src=" ${favoriteItem.strDrinkThumb}">`;
    html += `</li>`;
  }
  ulFavorites.innerHTML = html;
}

function getFromApi() {
  let searchedCocktail = searchInput.value;
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

function handleClickFavCard(event) {
  const changeStyle = event.currentTarget;
  // event es la información del evento click ocurrido
  console.log(event.currentTarget.id);
  // meter en una const el id
  const idCardSelected = event.currentTarget.id;
  // seleccionar el objeto entero
  const cardFav = cocktails.find((fav) => {
    return fav.idDrink === idCardSelected;
  });
  console.log(cardFav);
  //comprobar si el elemento está en el array de favoritos (i - findIndex
  const favoriteIndexFound = favorites.findIndex((fav) => {
    return fav.idDrink === idCardSelected;
  });
  console.log(favoriteIndexFound);

  if (favoriteIndexFound === -1) {
    //no lo encontró
    // si no está, añadir al array de favoritos (hacer push) - es modificar el array de fav
    favorites.push(cardFav);
    // guardar favorito en LS
    //classList.add
    changeStyle.classList.add('cardFav');
  } else {
    // si está, no añadir / -------------> aquí meter el código de borrar
    favorites.splice(favoriteIndexFound, 1);
    //clastList.remove
    changeStyle.classList.remove('cardFav');
  }
  console.log(favorites);

  // ahora pintarlo en el html de favoritos
  paintFavorites();
  setLocalStorage();
}

//listener de cada li
function resultsListener() {
  const liCocktails = document.querySelectorAll('.js-li-card');
  for (const item of liCocktails) {
    item.addEventListener('click', handleClickFavCard);
  }
}

function setLocalStorage() {
  localStorage.setItem('listFavorites', JSON.stringify(favorites));
}

function getLocalStorage() {
  const listFavoritesStored = JSON.parse(localStorage.getItem('listFavorites'));
  if (listFavoritesStored !== null) {
    favorites = listFavoritesStored;
    paintFavorites();
  } // else, no hagas nada
}

// 1- start app -- Cuando carga la pagina - comprobar si hay favoritos en el LS
getLocalStorage();

searchBtn.addEventListener('click', getFromApi);

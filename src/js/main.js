'use strict';

//Obtener datos del HTML-DOM (ul)
const listCocktails = document.querySelector('.js-list-cocktails');

//Guardar en una variable global los datos de los cócteles.
let cocktails = [];
//Hacer la petición al servidor
fetch(
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.drinks);
    //Guardar la información de los cócktails
    cocktails = data.drinks;
  });

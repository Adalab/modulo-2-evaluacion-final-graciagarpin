"use strict";const ulCocktails=document.querySelector(".js-list-cocktails"),ulFavorites=document.querySelector(".js-list-favorites"),searchInput=document.querySelector(".js-searchInput"),searchBtn=document.querySelector(".js-searchBtn"),resetBtn=document.querySelector(".js-resetBtn"),form=document.querySelector(".js-form");let cocktails=[],favorites=[];function paintCocktails(){let t="";for(const e of cocktails)t+=`<li class="list__item js-li-card" id="${e.idDrink}">`,t+=`<h3 class="item__str">${e.strDrink}</h3>`,null!==e.strDrinkThumb?t+=`<img class="item__img" src=" ${e.strDrinkThumb}">`:t+='<img class="item__img" src=" https://via.placeholder.com/210x295/ffffff/666666/?text=TV">',t+="</li>";ulCocktails.innerHTML=t}function paintFavorites(){let t="";for(const e of favorites)t+=`<li class="list__item js-li-fav" id="${e.idDrink}">`,t+=`<h3 class="item__str">${e.strDrink}</h3>`,null!==e.strDrinkThumb?t+=`<img class="item__img" src=" ${e.strDrinkThumb}">`:t+='<img class="item__img" src=" https://via.placeholder.com/210x295/ffffff/666666/?text=TV">',t+=`<div class="js-deleteFav" id="${e.idDrink}"><i class="fa-solid fa-circle-xmark"></i></div>`,t+="</li>";ulFavorites.innerHTML=t,resultsListenerFav()}function resultsListenerFav(){const t=document.querySelectorAll(".js-deleteFav");for(const e of t)e.addEventListener("click",handleClickDelete)}function getFromApi(){let t=searchInput.value;fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+t).then(t=>t.json()).then(t=>{cocktails=t.drinks.map(t=>({idDrink:t.idDrink,strDrink:t.strDrink,strDrinkThumb:t.strDrinkThumb})),console.log(cocktails),paintCocktails(),resultsListener()})}function handleClickFavCard(t){const e=t.currentTarget;console.log(t.currentTarget.id);const s=t.currentTarget.id,i=cocktails.find(t=>t.idDrink===s);console.log(i);const r=favorites.findIndex(t=>t.idDrink===s);console.log(r),-1===r?(favorites.push(i),e.classList.add("cardFav")):(favorites.splice(r,1),e.classList.remove("cardFav")),console.log(favorites),paintFavorites(),setLocalStorage()}function handleClickDelete(t){const e=t.currentTarget.id;console.log(t.currentTarget.id);const s=favorites.findIndex(t=>t.idDrink===e);console.log(s),favorites.splice(s,1),paintFavorites(),localStorage.removeItem(favorites),setLocalStorage()}function resultsListener(){const t=document.querySelectorAll(".js-li-card");for(const e of t)e.addEventListener("click",handleClickFavCard)}function setLocalStorage(){localStorage.setItem("listFavorites",JSON.stringify(favorites))}function getLocalStorage(){const t=JSON.parse(localStorage.getItem("listFavorites"));null!==t&&(favorites=t,paintFavorites())}function removeAll(t){t.preventDefault(),favorites=[],localStorage.clear(),location.reload()}getLocalStorage(),searchBtn.addEventListener("click",getFromApi),resetBtn.addEventListener("click",removeAll);
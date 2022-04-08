## Buscador de Cócteles 🍺
El ejercicio consiste en desarrollar una aplicación web que contiene un listado de las bebidas y cócteles de
todo el mundo, que nos permite des/marcar las bebidas como favoritas y guardarlas en local storage.

📌Objetivo: priorizar el JS

0. Comenzando 🚀  
Instalación del paquete AWSK facilitado por la escuela Adalab para inciar el proyecto

1. Estructura básica del proyecto 🛠️
1.1. HTML y SCSS básicos  

2. Búsqueda 👁️‍🗨️  
2.1. Al hacer clic sobre el botón de Buscar, la aplicación se conecta al API abierto de
TheCocktailDB: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita  
2.2. Para construir la URL de búsqueda recojo el texto que ha introducido la usuaria en el campo de búsqueda.  
2.3. Por cada cóctel pinto una tarjeta con imagen y nombre del cóctel.  
2.4. Si el cóctel no tienen imagen muestro una de relleno. Podemos crearla con el servicio de placeholder.com  
2.5. Pinto en la página con innerHTML o con DOM Avanzado.  
 
3. Favoritos ❤️ con un click:  
3.1. El color de fondo y el de fuente se intercambian.  
3.2. Muestro listado de cócteles favoritos en la parte izquierda de la pantalla.  
3.3. Los cócteles favoritos se muestran a la izquierda aunque suceda una nueva búsqueda.  
        
4. Almacenamiento local 📦  
  Almaceno el listado de favoritos en el localStorage. Al recargar la página el listado
de favoritos debe mostrarse.  

5. BONUS: Borrar favoritos 🖤  
5.1. Borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.  
5.2. Añadir/quitar como favorito al hacer clic sobre un cóctel del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale un cóctel que ya es favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto
intercambiados).  
5.3. Al final de la lista de favoritos un botón RESET para borrarlos todos los favoritos a la vez.  

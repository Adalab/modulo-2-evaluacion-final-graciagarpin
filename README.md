## Buscador de Cócteles 🍺
El ejercicio consiste en desarrollar una aplicación web que contiene un listado de las bebidas y cócteles de
todo el mundo, que nos permite des/marcar las bebidas como favoritas y guardarlas en local storage.

📌Objetivo: priorizar el JS

0. Comenzando 🚀  
Instalación del paquete AWSK facilitado por la escuela Adalab para inciar el proyecto

1. Estructura básica del proyecto 🛠️
1.1. HTML y SCSS básicos  

2. Búsqueda 👁️‍🗨️
2.1. Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de
TheCocktailDB: https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita  
2.2. Para construir la URL de búsqueda recojo el texto que ha introducido la usuaria en el
campo de búsqueda.  
2.3. Por cada cóctel contenido en el resultado de la búsqueda pinto una tarjeta donde
mostramos una imagen del cóctel y el nombre.  
2.4. Algunas de los cócteles que devuelve el API no tienen imagen. En ese caso hay que muestro una
imagen de relleno. Podemos crear una imagen de relleno con el servicio de placeholder.com donde
en la propia URL indicamos el tamaño, colores, texto:
https://via.placeholder.com/210x295/ffffff/666666/?text=TV  
2.5. Para pintar la información en la página se elijo entre hacerlo de forma básica con innerHTML
o manipulando de forma avanzada el DOM.  
 
3. Favoritos ❤️
  Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus cócteles
favoritos. Para ello, al hacer clic sobre una cóctel pasa lo siguiente:  
3.1. El color de fondo y el de fuente se intercambian, indicando que es un cóctel favorito.  
3.2. Muestro un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
        con los cócteles favoritos.  
3.3. Los cócteles favoritos deben seguir apareciendo a la izquierda aunque la usuaria realice otra
        búsqueda.  
        
4. Almacenamiento local 📦  
  Almaceno el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado
de favoritos se debe mostrarse  

5. BONUS: Borrar favoritos 🖤  
5.1. Borrar favoritos. Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.  
5.2. Añadir/quitar como favorito al hacer clic sobre un cóctel del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale un cóctel que ya es favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto
intercambiados).  
5.3. Al final de la lista de favoritos un botón RESET para borrarlos todos los favoritos a la vez.  

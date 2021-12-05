# Instalar dependencias en la carpate de backend y en la de frondend

# Levantar el server en el backend con npm start y levantar el frondend con npm start

# Los estilos estan todos hechos para el modo oscuro me falta terminar el modo claro y hacerlo responsive


# Funcionalidades:

- Buscar un usuario en particular y ver sus favoritos.

- Ver tu perfil y poder eliminar favoritos.

- Filtro de busqueda:
  - any: te trae series o peliculas mezcladas
  - users: si lo dejas vacios buscas todos los usuario si pones un nombre en particular entras a su perfil
  - movies: busqueda solo para encontrar movies
  - series: busqueda solo para encontrar series

- Modificar perfil solo contrasenia o username podes modificar solo una o las dos a la vez.

- Si le das al info en una card te lleva a su info mas detallada junto con un trailer.

- Poder agregar y eliminar favoritos ya sea en tu perfil, perfil de otro usuario o en la card.

- Si no estas logeado solo podes ver el login, register y el home con un mensaje de error que necesitas estar logeado

- Mensaje de errores y exitosos: busqueda, login, register, update user, agregar o eliminar favoritos.

- Iconos del footer cada uno con su redireccion github, linkedin, instagram y twitter tambien el home, about, contact, blog.


# Aclaraciones:

- En el home muestro info de peliculas de otra api por eso no tienen para agregar a favoritos, en un futuro lo cambiare todo a esa
  api asi pueden tener esa funcionalidad.

- Los userName y los email son unicos no se pueden repetir.

- Password mayor a 8 caracteres y tambien un numero como minimo.

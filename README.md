# node-rest-server-mongo-mlab
Continuacion del servidor anterior que era basico en este si incluye bases de datos archivos y crud completo seccion 13


### Librerias
``` npm i express dotenv mongoose bcryptjs express-validator```


### Quitar algo de git que se haya subido y se coloco en el gitignore
``` git rm .env --cached ```


### agregar a otro repositorios al mismo tiempo
``` git remote add heroku https://git.heroku.com/jdvpl-rest-server-node.git ```


### crear variables de entorno en heroku

``` heroku config:Set name_variable="*******" ```


### ver logs de heroku en vivo en la consola 
``` heroku logs -n 100 --tail ```

### documentacion

``` https://documenter.getpostman.com/view/16893611/UVkjvdNT ```

### temas 

```
Carga de archivos

Validaciones de archivos

Re-ubicar archivos

Actualizar fotografía de un usuario

Borrar archivos

Cargar imágenes a los productos

Servicio para mostrar y proteger imágenes

Uso de dichas imágenes en el front-end

Cloudinary

Cloudinary SDK

```
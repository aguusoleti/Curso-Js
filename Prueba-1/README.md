# M1 - Checkpoint



## Instrucciones 

Te vamos a brindar los tests preparados, tu tarea es completar el código en cada uno de los archivos como ```01.js``` de tal forma que pasen la mayoría de los tests. Para ejecutar los tests, primero debes ejecutar el comando `npm install` dentro de esta carpeta (CP-M1). Luego, en esta misma carpeta podes ejecutar npm test para correr la totalidad de los tests o si queres ejecutar solo los tests de un ejercicio en praticular podes hacer ```npm t n``` siendo ```n``` el número del ejercicio que queremos ejecutar, por ejemplo npm t 7 para correr los tests asociados al ejercicio número 7.

## PASOS PARA RESOLVER EL CHECKPOINT:

### 1. Clonar

Vas a recibir un enlace al repo que esta alojado en nuestro github
`checkpoints-soyhenry-org` 

Una vez que aceptes la invitacion al repo vas a poder clonarlo 
>Es importante que no hagas Fork, los cambios subidos a un repo fork no seran validos.

Para clonar el repo te recomendamos crear una nueva carpeta,  (asegurate de no utilizar la misma que el prep curse). Una vez clonado entrá a esa carpeta y ejecutá los siguientes comandos:

    npm install
    npm test

>Si ves los tests fallando, estás listo para comenzar. Si no, lee bien el output para identificar el error.


### 2. RESOLVER EL CHECKPOINT

Tu tarea es completar el código en los archivos  
 - `01.js` 
 - `02.js` 
 - `03.js` 
 - `04.js` 
 - `05.js` 
 - `06.js` 
 - `07.js`   
 - `08.js`
 - `09.js` 
 - `10.js` 
 
 De tal forma que pasen la mayoría de los tests.

> Es necesario contar con `6 Test Suites` pasando para aprobar. En caso de no pasar todos los test de cada archivo (test suite), no serán considerados. 

### 3. ENTREGAR TU CHECKPOINT

Correr por ultima vez los tests y verificar cuantos pasan. Ten en cuenta que si te aparece "1 failed;1 total" es porque tienes un error de sintaxis: seguramente falta o sobra una llave, paréntesis, punto y coma, etc.
Saca un print de pantalla de tus tests.
Luego, debes subir un commit a tu repo. Para hacerlo, debes ejecutar el siguiente comando:

    git add .
    git commit -m 'checkpoint commit'
    git push origin main

Una vez finalizado, chequea:
1. Que veas los cambios reflejados en el repo de la cuenta de `checkpoints-soyhenry-org` (entrando link al que fuiste invitado.)
2. Que no haya un require - solo debe haber codigo dentro de las funciones de cada ejercicio 


<img src="https://a.slack-edge.com/production-standard-emoji-assets/13.0/google-medium/26a0-fe0f@2x.png" style="float:left; width:15px; margin-top: 36px; margin-left: 20px; margin-right: 10px;" /> Atención: no debes realizar un commit después de la hora de entrega porque se anulara la totalidad del examen. 
> Revisar la hora del entrega del examen en los emails que te llegaron. 

> No se puede hacer consultas sobre la resolucion de los ejercicios.


### GUIA DE ERRORES COMUNES

Para identificar el error, vas a tener que leerlo en la consola.


* "jest" no se reconoce como un comando externo o interno...:
    1. Borrar la carpeta `node_modules` y el archivo `package-lock.json` e instalar nuevamente ( `npm install` ).
    2. Si esto no funciona, instalar test con el comando `npm install jest`.


* 1 failed, 1 total:
    1. Tenes un error de sintaxis. Revisa el último ejercicio que hayas hecho, seguramente falta o sobra una llave, paréntesis, punto y coma, etc.

* Author identity unknown.  
    1. Intenta ejecutar los siguientes comandos para configurar tu cuenta:
        * git config --global user.name "Tu usuario de GitHub aca"
        * git config --global user.email "Tu email aca"

    2. Ingresa a [Github](https://docs.github.com/es/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) y sigue las instrucciones para configurar tu token. 

* La consola se tilda en `Runs`:
    1. Revisa tu código, tenes un bucle infinito. Tenes que checkear la condición de corte de tus bucles.
# IONIC

generada con > `ionic start componentes-ionic blank`

Hay varias opciones para generar el scaffolder con tabs, menú lateral, etc.

Se levanta con `ionic serve`

## Home

Se crea automáticamente, si vemos `app-routing.module` tenemos que un path vacío o 'home' lleva a la página Home

Si borramos la carpeta home, no da error por defecto, webpack se encarga de ello. Si apagamos y levantamos el
servidor de nuevo ahí sí no muestra el error.

Borramos Home y creamos nuestra propia estructura

`ionic g page pages/home --dry-run` -> --dry-run para ver los cambios sin ejecutarlos

La ruta se genera automáticamente en `app-routing.module`

Todas las rutas en ionic se generan con Lazy Load usando `loadChildren`

## Más páginas

Generamos dos páginas más
`ionic g page pages/alert --spec=false`
`ionic g page pages/action-sheet --spec=false`

## Botones de navgación

Añadimos botones de los componentes de ionic en home.page.html

## Botón de retroceder

Añadimos un ion-back-button a <ion-buttons slot="start"> dentro de cada página. slot indica dónde se encuentra

Si recargamos la página de por ejemplo Alert, el botón de retroceso no aparece pues se ha perdido la pila de cards que
son las páginas que hemos ido viendo.

Para remediar esto podemos añadir defaultHref al botón de retroceso

Podemos añadir un texto al botón de regresar y darle color.

Hay un montón de snippets para generar componentes de ionic escribiendo i-color por ejemplo

Se puede forzar a que el botón se vea igual en Android que en IOS con `mode="ios"` o con `mode="md"`

## Componente Header con Botón de retroceder

En vez de copiar y pegar el código de Botón de retroceder en cada página podemos crear un componente que reutilizamos en
todas las páginas.

Primero creamos un módulo components dentro de una carpeta components

`ionic g module components/components --dry-run`

`ionic g module components --dry-run`

`ionic g m components --dry-run`

Las tres formas hacen lo mismo

Ahora generamos un componente llamado header que estará en la carpeta components

`ionic g c components/header --spec=false`

La idea de usar un `components.module` es que puedo importar todos los componentes en él y luego importar `components.module` en cualquier parte
y tendré acceso a todos los componentes registrados en él.

Ahora con importar `components.module` en las páginas, tengo acceso a todos los componentes registrados

Para la página Action Sheet importo `components.module` en `action-sheet.module`

Pero para que funcionen los componentes de ionic debemos importar también `IonicModule` en `components.module`


## Componente List

Trabajamos en la página Home. Creamos una `interface` para definir el tipo de nuestra variable `componentes`.

## Componente Action Sheet


## Componente Alert


## Componente Avatar

Sirve para presentar una imagen de forma redonda.

Creamos la página avatar > `ionic g page pages/avatar --spec=false`

## Componente Button

Creamos la página buttons > `ionic g page pages/buttons --spec=false`

Colocamos un botón en el Header

## Componente Card

Creamos la página cards > `ionic g page pages/cards --spec=false`

## Componente Checkbox

Creamos la página checkboxes > `ionic g page pages/checkboxes --spec=false`

## Componente Datetime

Creamos la página datetime > `ionic g page pages/datetime --spec=false`

## Componente Fab

Creamos la página fab > `ionic g page pages/fab --spec=false`

Creamos un set de variables de colores para youtube en `variables.scss` usando `Color Generator` dentro de `Theming` en `https://ionicframework.com/docs/`

Hay que crear la clase .ion-color-youtube en el mismo archivo scss

## Componente Grid

Creamos la página grid > `ionic g page pages/grid --spec=false`

## Componente Infinite Scroll

Creamos la página infinite-scroll > `ionic g page pages/infinite-scroll --spec=false`

Hay que controlar cuando se ha cargado todo el contenido para detener el componente

## Componente Input Form

Creamos la página inputs > `ionic g page pages/inputs --spec=false`

De lo más importante es escoger bien el tipo de cada input para que el dispositivo muestre el teclado adecuado

En Angular para trabajar con formularios tenemos
1. Aproximación por template
2. Aproximación reactiva
3. ngModel

Vamos a usar Aproximación por template para centrarnos en el HTML

## Componente List

Vamos a crear un servicio `ionic g service services/data`

Creamos la página lists > `ionic g page pages/lists --spec=false`

Vamos a usar el módulo de Angular `HttpClientModule` para hacer peticiones HTTP, lo importamos en `app.module`

## Componente List Reorder

Creamos la página list-reorder > `ionic g page pages/list-reorder --spec=false`

## Componente Loading

Creamos la página loading > `ionic g page pages/loading --spec=false`

## Componente Menu

Lo incorporamos a `app.component.html` y añadimos un botón a `home.page.html`

## Refactorizamos las opciones del menú a un json

Tranformamos el arreglo de objetos a un json válido cambiando las comillas y lo almacenamos en `assets/data/menu-options.json`

## Componente Modal

Creamos la página modal > `ionic g page pages/modal --spec=false`

Ahora creamos el contenido de la modal como si fuera una página > `ionic g page pages/modal-content --spec=false`

Quitamos la ruta de modal-content de `app-routing.module` pues no vamos a mostrar la modal por navegación de rutas

Añadimos la opción al menú en `menu-options.json`

## Componente Popover

Creamos la página popover > `ionic g page pages/popover --spec=false`

Ahora creamos el contenido del popover como un componente > `ionic g c components/popover-content --spec=false`

NO Añadimos `PopoverComponent` a `components.module` a menos que lo vayamos a usar como una ruta o algo raro.
Angular lo crea de forma Lazy Load al vuelo

## Componente Progress Bar & Range

Creamos la página progress > `ionic g page pages/progress --spec=false`

## Componente Refresher

Creamos la página refresher > `ionic g page pages/refresher --spec=false`

Instalamos la librería Animate CSS > `npm install animate.css --save`

Buscamos en `node_modules` la instalación de `animate.css`, tomamos nota de `animate.min.css`

Editamos angular.json en la parte de styles añadimos este archivo

Para poder usarlo hay que bajar el servidor y volver a levantarlo

Aplicamos animación a la carga de items

## Componente Searchbar

Creamos la página searchbar > `ionic g page pages/searchbar --spec=false`

El componente trae un debounce por defecto que retrasa un poco el disparo del método, de modo que no lo hace cada
vez que tecleamos si lo hacemos muy rápido, además es ajustable en milisegundos.
Esto es especialmente útil si los datos vienen de un servidor.

Para la funcionalidad del searchbar vamos a aplicar un pipe personalizado que funcione como filtro.

Vamos a crear primero un módulo que centralice la importación de todos los pipes > `ionic g module pipes`

Esto crea el directorio pipes y el módulo dentro.

Creamos el pipe > `ionic g pipe pipes/filtro`

Importamos en `searchbar.module` el `PipesModule` para acceder a los pipes

## Componente Segment + Skeleton Text

Creamos la página segment > `ionic g page pages/segment --spec=false`

Colocamos el archivo `superheroes.json` en `assets/data`

Creamos un servicio en `data.service` y lo inyectamos en `segment.page.ts`

Usamos el pipe filtro creado anteriormente para filtrar por propiedad según el segmento clicado

Aplicamos ion-skeleton-text

## Componente Slides

Creamos la página slides > `ionic g page pages/slides --spec=false`

## Componente Split Pane

Aplicamos el código de split pane a app.component de manera que envuelva todo incluido el menú

Nos ayuda a reorganizar el contenido de las páginas en tamaños de pantalla grandes

## Componente Tabs

Creamos la página tabs > `ionic g page pages/tabs --spec=false`

Creamos las rutas de las tabs como rutas hijas en `tabs-routing.module`

Para que se abra por defecto el tab `Account` podemos ponerlo en `menu-options.json` > `"redirectTo": "/tabs/acconts"`

Otra manera es añadir un path vacío a `tabs-routing.module` y con un `redirectTo` que es como lo vamos a dejar.

## Componente Toast

Creamos la página toast > `ionic g page pages/toast --spec=false`


# Crear la aplicación

Si quieren emular IOS, necesitarán una computadora que corra el sistema operativo de Mac (OSX), no hay de otra, pero los usuarios de Windows y Linux que dispongan de un iPhone, podrán probar su aplicación utilizando el ionic DevApp perfectamente.

Usuarios de Mac OSX, no tienen inconveniente para desarrollar en Android, ya que el código de Java corre perfectamente en OSX.

Hay que comprobar que se tenga instalado node >v10.15.0 npm >v2.19.0 git >v2.19.0

## Configuaración de la máquina virtual Android

Abrimos Android Studio > Configure > SDK Manager > Appearence & Behavoi > Sustem Settings > Android SDK
En SDK Platforms seleccionar al menos 2 versiones de Android

Seleccionar nueva app. Cuando haya terminado de instalar cosas ir a Tools > AVD Manager > Create

Seleccionar un System Image


En la carpeta del proyecto > `ionic cordova prepare android`
Esto instala una series de archivos en el proyecto y modifica otros.

Ahora > `ionic cordova build android`

Esto crea la carpeta platforms con la carpeta android, esta es la carpeta que se va a ejecutar en Android Studio > Open an existing Anroid Studio project

Si hacemos un upgrade del Android Gradle debemos borrar > `ionic cordova platform remove android` y volverla a crear > `ionic cordova build android`

Para ver los mensajes de consola vamos a `Logcat`, seleccionamos el emulador, seleccionamos el id de la aplicación que está en `config.xml` > widget id
Escribir `console` en el campo de búsqueda

Los logs que encadenan strings y objetos no se ven bien, sólo sale el string, es aconsejable dividir el console.log en dos y pasar el objeto por
`console.log(JSON.stringify(data))`


## Segunda manera de correr una app en el emulador de Android
> ionic cordova run --list
Te muestra los devices y los virtual devices

> ionic cordova run android --target=<nombre> -l

El flag -l activa el live reload

Se abre el emulador Android. Para ver los mensajes de consola abrimos una ventana de Chrome, abrimos la depuradora > More Tools > Remote devices

Seleccionar Discover USB devices

En el emulador ir a Opciones del dispositivo > System > About emulated device > Hacer click varias veces sobre él hasta que salga el mensaje de que soy un Developer, esperar unos 10 segundos y aparecerá en Remote devices el emulador, hacemos click sobre él y clicamos en Inspect, se nos abre una nueva ventana con el Inspector y ahí sí podemos ver los logs de manera normal

## Correr la app en un Andriod real

Conectar el móvil por USB al ordenador. En el móvil tengo que haber activado que soy un desarrollador. 
Entrar en Opciones para desarrolladores > Depuración por USB > ON

Ahora abrir CMD en la carpeta del proyecto > `ionic cordova run --list`

En GIT Bash no funciona

Tomar nota de `Available android devices`, por ejemplo: Xiaomi Mi A1 (API 28) 5e346adb0504
Anotar 5e346adb0504

> `ionic cordova run android --target=5e346adb0504`

Esperar a que se cree la carpeta WWW y se pueble de archivos

Si no se tiene JDK (Java Development Kit) instalarlo desde http://www.oracle.com/technetwork/java/javase/downloads

Cordova solo soporta el JDK 1.8, no importa si hay una versión más nueva instalada. Solo funciona con la 1.8 o 1.9

Escribir PATH en el buscador de Windows > Environment Variables

Variable name:    JAVA_HOME
Variable value:   C:\Program Files\Java\jdk1.8.0_121

Luego editar la variable PATH y agregar %JAVA_HOME%\bin

## GIT
Añadimos los cambios a GIT> `git add .`
Commit > `git commit -m "Primer commit"`

Si en este punto borro accidentalmente algo puedo recuperarlo con > `git checkout -- .`

Que nos recontruye los archivos tal y como estaban en el último commit.

Enlazamos el repositorio local con un repositorio externo en GitHub donde tenemos cuenta y hemos creado un repositorio
`git remote add origin https://github.com/Awandor/ionic-components-app.git`

Situarnos en la rama master > `git branch -M master`

Subir todos los cambios a la rama master remota > `git push -u origin master`

Para reconstruir en local el código de GitHub nos bajamos el código y ejecutamos `npm install` que instala todas las dependencias
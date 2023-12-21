# Analizador de texto

Este es el primer proyecto del Bootcamp de Laboratoria

Es una aplicación que arroja datos en tiempo real de cualquier texto que se ingrese en una caja de texto.

## Índice

Funcionalidad
Estructura
HTML
CSS
JS ANALIZER
JS INDEX

## Funcionalidad
La aplicación hace el cálculo de:

- Palabras: Cuenta la cantidad de palabras.
- Caracteres: Cuenta el total de caracteres incluyendo espacios, números y caracteres especiales.
- Letras: Cuenta la cantidad de letras excluyendo espacios, números y caracteres especiales.
- Números: Indica la cantidad de números ingresados.
- Suma: Arroja el total de la suma de todos los números.
- Promedio: Calcula el promedio de la longitud de las palabras ingresadas.

## Estructura

./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── analyzer.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── analyzer.spec.js

## Prototipo y diseño
![Prototipo Baja](\src\Resources\Images\PrototipoBaja.jpg)
![Prototipo Alta](\src\Resources\Images\PrototipoAlta.jpg)

## HTML

Uso de HTML semantico:

    <Html>
    	<Head>
    	<Body>
    		<Header>
    			<H1>
    		<Main>
    			<Section>
    				<H2>
    				<Textarea>
    				<Button>
    			<Section>
    				<Ul>
    				<Li>
    					<Li>
    ...
    		<footer>
    			<P>

## CSS
Uso de selectores:

- De **tipo** para header y footer
- De **class** para los li
- De **atributo** para textarea
- De **ID** para button

Modelo de caja (box model):

- Border, margen, padding
- li ul (background, border, margin, padding)

## JS INDEX
Contiene las funciones de:

function resetButton: para refrescar la página;
getElementsByName: para acceder al input del text area;
addEventListener: para añadir el evento cada que se teclea una letra;
y los querySelector: para llamar a los métodos del objeto analyzer.

## JS ANALIZER
Contiene el objeto analizer con los métodos:
getWordCount
getCharacterCount
getCharacterCountExcludingSpaces
getAverageWordLength
getNumberCount
getNumberSum

## TEST
Pasó las pruebas:

Unitarias:
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js

End to end:
npm run test:e2e

Ejecuté
npm run deploy




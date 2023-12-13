# Exercice Module

Dans index.html ne charger que main.js avec type="module".

Dans api.js et todos.js exporter toutes les fonctions

Dans main.js importer les 3 fonctions de api.js et todos.js

# Exercices Webpack

## Exercice 1

En vous inspirant de la doc sur BannerPlugin : https://webpack.js.org/plugins/banner-plugin/

Ajouter le copyright suivant aux fichiers buildés : Copyright MyCompany

## Exercice 2

Ajouter un commentaire dans le fichier config.json

Le build échoue à présent.

Installer le paquet npm `json5` et changer la config webpack en vous inspirant de : https://github.com/webpack/webpack/tree/main/examples/custom-json-modules

Pour que le parseur d'un fichier dont l'extension est .json utilise la lib json5.

Bonus : faire fonctionner les extensions .json5
Voir : https://github.com/json5/json5/wiki/Using-JSON5-with-TypeScript

## Exercice 3

On veut remplacer les balises style par des balises link pour le CSS.

Vous inspirer de https://webpack.js.org/plugins/mini-css-extract-plugin/ pour ce faire.

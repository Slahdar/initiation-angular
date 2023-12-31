# TaskManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

# Commandes exécutées

Angular CLI: 16.2.0
Node: 18.17.1

- ng serve
- ng build
  => résultat : le projet est compilé dans le dossier dist
- npm install --global yarn
- yarn add --dev @compodoc/compodoc

Yarn : 1.22.19
Compodoc : 1.1.21

- yarn add @babel/plugin-proposal-private-methods
- npm run compodoc
- npm run compodoc:serve
- ng generate component task
- ng generate component main-task
- ng generate component task-list
- ng generate directive status-color
- ng generate pipe dateFormat
- ng generate module tasks
- ng generate service crud-task-list
- ng generate service by-statut-task-list
- ng generate service task-facade
- ng generate module add-task-form
- ng generate component add-task-form

## Question Mise en pratique observable / http

Imaginons que les données délivrées par les services soient issues de requêtes
HTTP. Décrivez les opérations à effectuer pour mettre en place le module
HttpClient ainsi que la requête à effectuer sur une url "https://domain/data" avec
un paramètre de requête "?param=test"

1. Dans app.module.ts importer HttpClientModule
2. Taper commande ng generate service data
3. Dans data.service.ts créer la méthode
4. Dans le smart, utiliser la méthode de data.service.ts
5. Modifier le template pour afficher les données

## Commande de lancement

- ng serve (compile application)
- npm run compodoc:serve (documentation interactive)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

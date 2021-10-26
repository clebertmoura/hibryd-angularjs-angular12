# hibryd-angularjs-angular12

This project is a hybrid implementation from AngularJS and Angular, versio 12, based on Phonecat AngularJS sample project.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Steps to migration

1. Intall latest version of angular-cli anf node (using: 12.2.11, and 14.18.1, respectively);
2. Generate a new angular project with command: ng new my-app
3. Move contents (/app, /assets, /environments, main.ts, polyfills.ts, styles.scss, test.ts) from /src folder to a new folder /src/ng2, to separate the source code from Angular and AngularJS apps; We do not move the index.html and favicon.ico, becouse they willbe shared for both apps;
4. Update all path references in file angular.json to new new folder /src/ng2;
5. Create a new folder src/ng1, and copy the entire code and lib dependencies from the AngularJS app.
6. Update de index.html to include CSS and Javascript imports required to the AngularJS app;


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

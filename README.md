# TweetDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

# Prerequisites:
1. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

2. Node version v19.6.0

3. npm version 9.4.0

4. Run `npm install` inside root directory( `cgi-assessment-fe-angular-tweet-display/tweet-dashboard`) to download node modules, run and install application inside `/tweet-dashboard`. 

# Description:

1. Code structure follows full utilization of Angular component based structure to make code as clean, maintainable and understandable as possible. Includes Services, Interfaces, Utils, Smart Component and Dumb component. Communication between child and parent components is facilitated using @Input and @Output decorators. Also, used shared service for filters.

2. Test Code Coverage file is produced inside- `tweet-dashboard\coverage\tweet-dashboard\index.html`

3. Retrieve of the data from data.json is done with an external API according to Angular best practices.Not directly import it using Javascript imports. `data.json` file is added inside `tweet-dashboard\assets` folder.

4. Debounce time is added for 800 milliseconds for each keyword added to wait for user to filter tweets by names in order to control the rate of extract function execution

5. Application is made as responsive as possible without using any external libraries

6. Due to time constraint, there's more scope for refactoring this code.

7. Utilized latest version features in this application using standalone components.

8. Added Heroku deployment files. Not able to test and run it because of Adding payment method constraint to open the app on Heroku.

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

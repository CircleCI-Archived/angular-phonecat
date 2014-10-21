angular-phonecat
================
[![Circle CI](https://circleci.com/gh/circleci/angular-phonecat.png?style=badge)](https://circleci.com/gh/circleci/angular-phonecat)

This project demonstrates how to run all the tests for the standard AngularJS “Phone Catalog” tutorial on CircleCI.

See [the tutorial](https://docs.angularjs.org/tutorial) for detailed instructions on the application itself.

##Running locally
You will need to have npm, nodejs, and bower installed in order to work with the project. To run the unit tests once just run `npm run test-single-run`. To run the e2e tests, run `npm start`, and then `npm run protractor` in a different shell.

##Testing on CircleCI
Simply sign up for CircleCI if you haven’t already, fork the repo, and follow it on circle to see what continuous integration with Karma and Protractor looks like on Circle. While Circle can infer most of the installation and test process from the project structure, there are a couple of specific steps that must be configured in the circle.yml file:

* Node.js must be version 0.10+ for the project to work correctly
* The standard `npm test` command is a long running process, so `npm run test-single-run` must be run instead
* To run the protractor tests, a server must be started in the background using `npm start`, and then protractor run with `npm run protractor`

##A note on animations
One tweak has been made to the project itself in this repo, which is the disabling of Angular animations. Protractor is generally very good about coordinating with Angular to make sure all Angular actions are done—including animations—before moving on. However, the “waitForAngular” functionality still isn’t perfect (see [this Protractor issue](https://github.com/angular/protractor/issues/279) for more discussion), and the extra delays introduced by animations seem to contribute to flakier (as well as slower) tests. To keep the tests faster and more reliable, this sample project has disabled Angular animations with the “allowAnimations” Protractor API.

##See Also
* [CircleCI](https://circleci.com/)
* [AngularJS](https://angularjs.org/)
* [Protractor](https://github.com/angular/protractor)


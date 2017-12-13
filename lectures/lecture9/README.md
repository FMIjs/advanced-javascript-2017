# Lecture 9

### 13.12.17

---

## Agenda

1. [Angular Intro 📐](#1-angular-intro-📐)

---

## 1. Angular Intro 📐

* Things we'll cover in the following weeks:
  * Bundling, compiling, testing, ...
    * [Babel](https://babeljs.io/)
    * [WebPack](https://webpack.js.org/)
    * [Karma](https://karma-runner.github.io/1.0/index.html)
    * [e2e](https://github.com/angular/angular-cli/wiki/e2eb)
    * ...
  * Being reactive with [RxJS](https://github.com/ReactiveX/rxjs)
  * State management with [Redux](https://redux.js.org/) / [ngrx](https://github.com/ngrx)
  * Angular [CLI](https://cli.angular.io/)
  * And `Angular` itsself ofc

* Getting started
  * What is `Angular CLI`?
    * It makes it easy to create an application that already works, right out of the box.
    * Created by the comunity
    * Started as a fork of [Ember](https://www.emberjs.com/)'s CLI
    * Angular [Seed](https://github.com/angular/angular-seed)
  * Unlike `React`, `Angular` is not a framework, but a *platform*. This means it can run on multiple platforms and devices
  * `ng new MyApp`
  * structure of the `index.html` file
    * the `app-root` tag - where our whole app will go
  * When `Angular` compiles our app it builds the following bundles:
    * `polyfills` - extends the browser's functionalities
    * `main` - the logic of out app
    * `styles` - self explanitory
  * ... and then attaches them to our compiled `index.html`
  * Using `ng-serve`
    * builds the application and starts a web server
    * rebuilds our app each time a change occurs
  * Thanks to webpack we can debug our `.ts` files directly in the browser

  * Architecture Overview [_](https://angular.io/guide/architecture)
    * Components
      * Your `Angular` app is composed of HTML templates with Angularized markup, which are managed by  component classes
      * The basic idea came from [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) (eg.: the `<video>` tag)
      * Created with the `@Component` decorator
      * Each component has it's own `tag` and when our app gets built each time the compiler finds said tag it will replace it with the components html
      * Components need to be declared in a module before being used
    * [Decorators](https://www.typescriptlang.org/docs/handbook/decorators.html)
      * Used to attach metadata
      * Ensure that certain methods will be called before our class is created
    * Modules
      * Each module handles a specific part of the logic
      * Dependancy Injection
        * Decouple objects to the extent that no client code has to be changed simply because an object it depends on needs to be changed to a different one.
        * The above is handled by an *injector*
        * Creating and using an *injector*
          * `ReflectiveInjector` from `@angular/core`
          * `.resolveAndCreate({ ... })`
        * [reflect-metadata](https://www.npmjs.com/package/reflect-metadata)
      * The modules declare and provide the services and components which it uses
    * Services
      * Used for communication between components
      * Use the `@Injectable` decorator
      * Need to be provided by the module which uses it.
  * Templates
    * `{{variable}}`
  * Attaching to events (browser and other) and handling them
    * with `(event)="handler($event)"` (`$event` holds the event data)
    * attaching to event values with `#value`
  * Generating stuff with the cli
    * `ng g [type] Name`
      * `g` === *generate*
      * Types
        * `c` === *component*
        * `s` === *service*
        * `m` === *module*
  * Passing data between components
    * `@Input()` decorator
    * Used to tell `angular` that a certain property will come from another component or will be sent to one
    * Linking properties with `[propertyInTheOtherComponent]='propertyInOurComponent'`
    * Two-way data binding
      * with `[(ngModel)]='property'`
  * Emitting custom events (Logout, List Item Added, ...) and handling them
    * The `@Output` decorator and the `EventEmitter`

  * P.S.:
    * [NativeScript](https://www.nativescript.org/)
    * A [presentaton](http://slides.com/idakiev/angular2-dependency-injection/fullscreen#/) about *Dependancy Injection*
    * What is *Vanilla JS*?
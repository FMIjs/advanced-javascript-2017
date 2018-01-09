# Lecture 10

### 03.01.18

---

## Agenda

1. [Angular Http Client 📐](#1-angular-http-client-📐)
1. [LifeCycle Hooks 🎣](#2-lifecycle-hooks-🎣)
1. [Streams & `RxJS`](#3-streams-rxjs)
1. [Routing in Angular](#4-routing-in-angular)
1. [Angular + Maps + Sequelize (postgre) + Bot 🤖](#5-angular-maps-sequelize-postgre-bot-🤖)

---

## 1. Angular `HttpClient` 📐

* Differences between `Http` and `HttpClient`
  * Http Client is an upgraded version of Http with the following improvements:
    * Typed, synchronous response body access, including support for JSON body types
    * JSON is an assumed default and no longer needs to be explicitly parsed
    * Interceptors allow middleware logic to be inserted into the pipeline
    * Immutable request/response objects
    * Progress events for both request upload and response download
    * Post-request verification & flush based testing framework
* Basic setup and calls
* Http [Interceptor](https://medium.com/@ryanchenkie_40935/angular-authentication-using-the-http-client-and-http-interceptors-2f9d1540eb8)
  * Allows us to attach a functionality to each call
  * One common use case is to attach authentication information to requests
  * Handling errors

## 2. [LifeCycle Hooks](https://angular.io/guide/lifecycle-hooks) 🎣

* Each angular component has a lifecycle:

![LifeCycle Events](https://angular.io/generated/images/guide/lifecycle-hooks/hooks-in-sequence.png)

* LifeCycle Hooks provide visibility into these key life moments and the ability to act when they occur

## 3. Streams & [`RxJS`](http://reactivex.io/rxjs/manual/overview.html)

* `RxJS` is a library for composing asynchronous and event-based programs by using observable sequences
* What is an Observable?
  * Observables are lazy Push collections of multiple values
  * Observables get invoked only after we `subscribe` to them
* Creating an Observable from an event
* Piping operators
* Filtering and limiting our data
  * `debounce()`
  * `filter()`
  * ...
* `mergeMap`
  * Flattens our structure
* `switchMap`
  * Flattens our structure
  * The main feacture difference between `switchMap` and other flatteing operators is that on each emission the previous inner observable (the result of the function you supplied) is cancelled and the new observable is subscribed
* A great way to understand `RxJS` operators is [`RxMarbles`](http://rxmarbles.com)!

* The [plnkr](http://plnkr.co/edit/I8X52GU85f3r7hTT5uen?p=preview) from the lecture

## 4. [Routing in Angular](https://angular.io/guide/router)

* Our paths are defined in our App Routing Module
* `<router-outlet></router-outlet>` - where the components specified in our router paths will be put
* Router [links](https://angular.io/api/router/RouterLink)
* Path matching[!](https://vsavkin.com/the-powerful-url-matching-engine-of-angular-router-775dad593b03)
* [Lazy](https://angular-2-training-book.rangle.io/handout/modules/lazy-loading-module.html) Loading with `loadChildren`

## 5. Angular + Maps + Sequelize (postgre) + Bot 🤖

### Idea

* Basic Idea:

  A *traveller/travelling salesman/delivery/...* has to pass through a number of *locations/houses/stores/...* .
  Make his work easier without their every step.

* What do?
  * Where have I been?
  * Where do I need to go?
  * Add an image?

### Structure

* Data Objects
  * POIN (Point of Interest)
  * Campaign
  * User
* Data Model
* UML Process Flow

### Tech

* [Sequalize](http://docs.sequelizejs.com)
* [Postgre](https://www.postgresql.org)
* [Telebot](https://github.com/mullwar/telebot)
* Express
* Socket io
* Angular + [Maps Components](https://angular-maps.com/api-docs/agm-core/)

### Code Scaffolding & Example

    ...

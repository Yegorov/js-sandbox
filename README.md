JavaScript Sandbox
==================

## Client side JS

* [Helping you select an MV* framework](http://todomvc.com/)

### Old School frameworks & libraries

#### [Vanilla JS](http://vanilla-js.com/)

Vanilla JS is a fast, lightweight, cross-platform framework 
for building incredible, powerful JavaScript applications.

See also:
* [Habr translate](https://habrahabr.ru/post/150594/)
* [semicolon.js](https://github.com/madrobby/semicolon.js)

#### [Prototype](http://prototypejs.org/)

Prototype takes the complexity out of client-side web programming. 
Built to solve real-world problems, it adds useful extensions 
to the browser scripting environment and provides elegant APIs around 
the clumsy interfaces of Ajax and the Document Object Model.

#### [jQuery](http://jquery.com/)

jQuery is a fast, small, and feature-rich JavaScript library. 
It makes things like HTML document traversal and manipulation, 
event handling, animation, and Ajax much simpler with an easy-to-use API 
that works across a multitude of browsers. With a combination of versatility 
and extensibility, jQuery has changed the way that millions of people 
write JavaScript.

#### [Backbone.js](http://backbonejs.org/)

Backbone.js gives structure to web applications by providing models 
with key-value binding and custom events, collections with a rich API 
of enumerable functions, views with declarative event handling, 
and connects it all to your existing API over a RESTful JSON interface. 

#### [Dojo](https://dojotoolkit.org/)

A JavaScript toolkit that saves you time and scales with your 
development process. Provides everything you need to build a Web app. 
Language utilities, UI components, and more, all in one place, 
designed to work together perfectly.

#### [MooTools](http://mootools.net)

MooTools is a compact, modular, Object-Oriented JavaScript framework designed 
for the intermediate to advanced JavaScript developer.

It allows you to write powerful, flexible, and cross-browser code 
with its elegant, well documented, and coherent API.

********************************************************************************

### Actual frameworks & libraries

#### [Vue.js](https://vuejs.org/)

Vue is a progressive framework for building 
user interfaces. Unlike other monolithic frameworks, Vue is designed from 
the ground up to be incrementally adoptable. The core library is focused 
on the view layer only, and is very easy to pick up and integrate with 
other libraries or existing projects. On the other hand, Vue is also perfectly 
capable of powering sophisticated Single-Page Applications when used 
in combination with modern tooling and supporting libraries.

#### [Angular](https://angular.io/)

Angular is a development platform for building mobile 
and desktop web applications. 

#### [React](https://facebook.github.io/react/)

React is a JavaScript library for building user interfaces.

* Declarative: React makes it painless to create interactive UIs. 
Design simple views for each state in your application, and React will 
efficiently update and render just the right components when your data changes. 
Declarative views make your code more predictable, simpler to understand, 
and easier to debug.

* Component-Based: Build encapsulated components that manage their own state, 
then compose them to make complex UIs. Since component logic is written in 
JavaScript instead of templates, you can easily pass rich data through 
your app and keep state out of the DOM.

* Learn Once, Write Anywhere: We don't make assumptions about the rest 
of your technology stack, so you can develop new features in React without 
rewriting existing code. React can also render on the server using Node 
and power mobile apps using React Native.

See also [Flux](https://github.com/facebook/flux) - 
Application Architecture for Building User Interfaces

#### [Preact](https://preactjs.com/)

Preact is a fast, 3kB alternative to React, with the same ES2015 API.

Preact retains a large amount of compatibility with React, but only the modern 
(ES6 Classes and stateless functional components) interfaces. 
As one would expect coming from React, Components are simple building blocks 
for composing a User Interface.

#### [Ember.js](http://emberjs.com/)

Ember.js is a Javascript framework that greatly reduces the time, 
effort and resources needed to build any web application. 
It is focused on making you, the developer, as productive as possible 
by doing all the common, repetitive, yet essential, tasks involved 
in most web development projects.

Ember.js also provides access to the most advanced features of Javascript, 
HTML and the Browser giving you everything you need to create your next killer 
web app.

#### [Meteor](https://www.meteor.com/)

Meteor is a full-stack JavaScript platform for developing modern web 
and mobile applications. Meteor includes a key set of technologies for 
building connected-client reactive applications, a build tool, and 
a curated set of packages from the Node.js and general JavaScript community.

* Meteor allows you to develop in one language, JavaScript, 
in all environments: application server, web browser, and mobile device.

* Meteor uses data on the wire, meaning the server sends data, not HTML, 
and the client renders it.

* Meteor embraces the ecosystem, bringing the best parts of the extremely 
active JavaScript community to you in a careful and considered way.

* Meteor provides full stack reactivity, allowing your UI to seamlessly 
reflect the true state of the world with minimal development effort.


#### [Marionette.js](https://github.com/marionettejs/backbone.marionette)

Marionette is a composite application library for Backbone.js that aims to 
simplify the construction of large scale JavaScript applications. It is 
a collection of common design and implementation patterns found in applications.

#### [Riot](http://riotjs.com/)

Simple and elegant component-based UI library

********************************************************************************

### Libraries for plot & other graphics

*empty*

********************************************************************************

### Other things for browsers

* [Asynchronous Module Definition](https://github.com/amdjs/amdjs-api)

#### [RequireJS](http://requirejs.org/)

RequireJS is a JavaScript file and module loader. 
It is optimized for in-browser use, but it can be used in other 
JavaScript environments, like Rhino and Node. Using a modular script loader 
like RequireJS will improve the speed and quality of your code.

--------------------------------------------------------------------------------

## Server side JS

*empty*

* [debug](https://github.com/visionmedia/debug) A tiny node.js debugging 
utility modelled after node core's debugging technique.

* [dotenv](https://github.com/motdotla/dotenv) Dotenv is a zero-dependency 
module that loads environment variables from a `.env` file into process.env.

* [config](https://github.com/lorenwest/node-config) Node-config organizes 
hierarchical configurations for your app deployments.

* [nodemon](http://nodemon.io/) Monitor for any changes in your node.js 
application and automatically restart the server - perfect for development.

* [chokidar](https://github.com/paulmillr/chokidar) A neat wrapper around 
node.js fs.watch / fs.watchFile / fsevents.

--------------------------------------------------------------------------------

## Other Tools

### Test (TDD, BDD), Check code (Linters), Task Runner, Docs

* [NodeJS Assert](https://nodejs.org/api/assert.html) and 
[Console.assert](https://developer.mozilla.org/ru/docs/Web/API/Console/assert)

* [Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework 
running on Node.js and in the browser, making asynchronous testing simple 
and fun. Mocha tests run serially, allowing for flexible and 
accurate reporting, while mapping uncaught exceptions to the correct test cases.

* [Chai](http://chaijs.com/) is a BDD / TDD assertion library for node and 
the browser that can be delightfully paired with any javascript 
testing framework.

* [Tape](https://github.com/substack/tape) tap-producing test harness for 
node and browsers.

* [Node Tape](http://www.node-tap.org/) Test Anything Protocol tools for node.

* [Lab](https://github.com/hapijs/lab) is a simple test utility for node. 
Unlike other test utilities, lab uses domains instead of uncaught exception 
and other global manipulation. Our goal with lab is to keep the execution 
engine as simple as possible, and not try to build an extensible framework. 
lab works with any assertion library that throws an error when a condition 
isn't met.

* [Power Assert](https://github.com/power-assert-js/power-assert) Provides 
descriptive assertion messages through standard assert interface. 
No API is the best API. 

* [should.js](http://shouldjs.github.io/) BDD style assertions for node.js 
-- test framework agnostic

* [expect.js](https://github.com/Automattic/expect.js) Minimalistic BDD-style 
assertions for Node.JS and the browser. 

* [Jasmine](https://jasmine.github.io/) is a Behavior Driven Development testing 
framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript 
framework. Thus it's suited for websites, Node.js projects, or anywhere that 
JavaScript can run.

* [Sinon.JS](http://sinonjs.org/) Standalone and test framework agnostic 
JavaScript test spies, stubs and mocks (pronounced "sigh-non").

* [Unit.js](http://unitjs.com/) is an assertion library for Javascript, 
running on Node.js and the browser.

* [QUnit](https://qunitjs.com/) is a powerful, easy-to-use JavaScript unit 
testing framework. It's used by the jQuery, jQuery UI and jQuery Mobile 
projects and is capable of testing any generic JavaScript code, including itself! 

* [Jest](http://facebook.github.io/jest/) Painless JavaScript Testing. Jest is 
a JavaScript testing framework, used by Facebook to test all JavaScript code
including React applications.

* [Protractor](http://www.protractortest.org) is an end-to-end test framework 
for AngularJS applications. Protractor runs tests against your application 
running in a real browser, interacting with it as a user would. 

* [Nightwatch.js](http://nightwatchjs.org/) Browser automated testing done easy. 
Write End-to-End tests in Node.js quickly and effortlessly that run against 
a Selenium/WebDriver server.

* [WebDriver.io](http://webdriver.io/) Selenium 2.0 bindings for NodeJS.

* [Ava](https://github.com/avajs/ava) Futuristic JavaScript test runner.

* [Karma](http://karma-runner.github.io) Spectacular Test Runner for JavaScript.

* [Gulp](http://gulpjs.com) The streaming build system.

* [Grunt](http://gruntjs.com/) The JavaScript Task Runner.

* [ESLint](http://eslint.org/) ESLint is a tool for identifying and reporting 
on patterns found in ECMAScript/JavaScript code.

* [JSHint](http://jshint.com) is a tool that helps to detect errors and 
potential problems in your JavaScript code.

* [JSLint](http://JSLint.com/) The JavaScript Code Quality Tool.

* [JSDoc](http://usejsdoc.org/)

********************************************************************************

### Functional, Reactive (Functional Reactive Programming)

* [Underscore](http://underscorejs.org/) is a JavaScript library that provides 
a whole mess of useful functional programming helpers without extending 
any built-in objects.

* [Lodash](https://lodash.com/) A modern JavaScript utility library 
delivering modularity, performance & extras.

* [immutable-js](http://facebook.github.io/immutable-js/) Immutable persistent 
data collections for Javascript which increase efficiency and simplicity.

* [Ramda](http://ramdajs.com/) A practical functional library 
for JavaScript programmers.

* [functional.js (fjs)](http://functionaljs.com/)  A functional JavaScript 
library that facilitates currying and point-free programming.

* [prelude-js](https://github.com/alanrsoares/prelude-js) Hardcore Functional 
Programming for JavaScript. A truly modular implementation of Haskell's 
Prelude library in ES6

* [Lazy.js](http://danieltao.com/lazy.js/) is a functional utility library 
for JavaScript, similar to Underscore and Lodash, but with a lazy engine under 
the hood that strives to do as little work as possible while being 
as flexible as possible.

* [Bluebird](http://bluebirdjs.com/docs/getting-started.html) is a full 
featured promise library with unmatched performance.

* [Q](http://documentup.com/kriskowal/q/) A promise library for JavaScript.

* [RSVP.js](https://github.com/tildeio/rsvp.js/) A lightweight library that 
provides tools for organizing asynchronous code.

* [Async](http://caolan.github.io/async/) is a utility module which provides 
straight-forward, powerful functions for working with asynchronous JavaScript. 

* [Redux](http://redux.js.org) Redux is a predictable state container for 
JavaScript apps. It helps you write applications that behave consistently, run 
in different environments (client, server, and native), and are easy to test. 

* [RXjs](http://reactivex.io/rxjs/) A reactive programming library for JavaScript.

* [Bacon.js](https://baconjs.github.io/) A small functional reactive 
programming lib for JavaScript.

* [HIGHLAND](http://highlandjs.org/) The high-level streams library for Node.js 
and the browser.

* [MobX](https://mobxjs.github.io/mobx) Simple, scalable state management.

* [Cycle.js](https://cycle.js.org/) A functional and reactive JavaScript 
framework for cleaner code.

********************************************************************************

### Other JS cool libs

*empty*

--------------------------------------------------------------------------------

## Links

* [JS Foundation](https://js.foundation/projects/)
* [MDN JavaScript](https://developer.mozilla.org/ru/docs/Web/JavaScript)
* [JavaScript. The core](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/), 
[JavaScript. Ядро](http://dmitrysoshnikov.com/ecmascript/ru-javascript-the-core/)
* [JavaScript books by Dr. Axel Rauschmayer](http://exploringjs.com/)
* [**JavaScript Standard Style Guide !!!**](http://standardjs.com/)
* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), 
[Перевод и расширение Airbnb JavaScript Style Guide](https://github.com/uprock/javascript)
* [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
* [ECMAScript 6 (Overview of ECMAScript 6 features)](https://github.com/lukehoban/es6features)
* [ECMAScript (Status, process, and documents for ECMA262)](https://github.com/tc39/ecma262)
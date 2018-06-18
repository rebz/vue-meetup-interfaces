# vuejs-meetup-code-along
A repo to be used for a code along talk given at the Vue.js Indy Meetup Group.

### Note
2018-06-17
* This is only tested on a computer running MacOS.
* Issue on [codesandbox.io](http://codesandbox.io) that is preventing me 
from sharing this repo for all to follow along with ease 

## What this code along will cover
* Building Interfaces in Vue
* Debugging w/ Vue-Devtools
* Route Management and Inheritance w/ Vue Router
* State Management w/ Vuex
* Making API Calls w/ Axios
* Watchers vs Computed Properties
    * When to use one over the other with examples.
* Click Functions
* Using Props 
* Animated Transitions in Vue

#### If we have time
* Form Interaction
* Emit and Listen to Events
* Custom Components Using v-model
* Mixins
* Filters

#### What we are not covering
* User Authentication
* Middleware
* CRUD Operations
* Saving to a Database

## Primary Packages
* [Vue](https://github.com/vuejs/vue)
* [Vue Router](https://github.com/vuejs/vue-router)
    * Route/Page management.
    * Allows us to create Single Page Apps; SPA for short.
* [Vuex](https://github.com/vuejs/vuex)
    * State management of our data
* [Axios](https://github.com/axios/axios)
    * HTTP Requests for API Calls
* [NProgress](https://github.com/rstacruz/nprogress)
    * Generic loading bar for data requests

##### Other Packages for this Project
* [Laravel Mix](https://github.com/JeffreyWay/laravel-mix)
    * A simplified [Webpack](https://webpack.js.org/) compiler with sugary syntax and [Browsersync](https://browsersync.io/) built in.
* [Express](https://github.com/expressjs/express)
    * A Node Framework that is only to be used if you wish to view your project without running Browsersync and you have no vhost or custom domain setup.

## Expectations
If you are following along with the `npm-simple` or `npm-abstracted` folders we expect the following:
* [Vue Devtools](https://github.com/vuejs/vue-devtools)
    * A browser extension or standalone tool for debugging Vue.js applications.
* [Node](https://nodejs.org/en/) v8.11.3 LTS
    * Recommend [Node Version Manager](https://github.com/creationix/nvm)
    * NPM, installed with Node
* A dev environment where you can can specify your vhost/domain
    * Recommend [Laravel Valet](https://github.com/laravel/valet) for MacOS
* A basic understanding of how to navigate and execute commands in your terminal
    * Recommend watching Wes Bos' [Command Line Power User](https://commandlinepoweruser.com/) Series

## What we're building...
* List of Users
* Nested Route Views
* Filter Data
* Key Events and Navigation

## Other
Additional aspects about this project that are not required for what we are building 
but are being introduced as part of this code along due to my own preferences. 

### Files and Their Descriptions
* .env
* .env-example
* .nvmrc
* LocalValetDriver.php
* webpack.mix.js
* server.js

### Other Details About This Project
* [Sass](https://sass-lang.com/) for CSS Styling
* [BEM Methodology](http://getbem.com/introduction/)
    * Stands for Block Element Modifier and helps to avoid inheritance, 
    provides some sort of scope by using unique CSS classes per 
    element (like .Button__icon--active), and reduces style 
    conflicts by keeping CSS specificity to a minimum level.
* [ITCSS Methodology](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/)
    * Stands for Inverted Triangle CSS and it helps you to organize your
    project CSS files in such way that you can better deal with
    (not always easy-to-deal with) CSS specifics like global
    namespace, cascade and selectors specificity.
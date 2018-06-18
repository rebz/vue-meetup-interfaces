# Building Interfaces in Vue
A repo to be used for a code along talk given at the Vue.js Indy Meetup Group.
* [Vue.js Indy - Website](https://vuejsindy.js.org/)
* [Vue.js Indy - Discord](https://discord.gg/3q6D3UU)
* [Vue.js Indy - Meetup Group](https://www.meetup.com/vuejsindy/)

## What we're building...
This is an opinionated project setup as most of the structure and styling is in place and functionality/views 
are abstracted out. We will be reviewing the existing structure and adding `people` routes, views, 
state, and functionality to the project. We will be using pre-existing components that we will 
link together and build functionality within.

#### What we will cover...
* Environment Setup
* Structure Overview
* Debugging w/ Vue-Devtools
* Build Routes
    * Named Routes
    * Custom Components
    * Route Containers / Layouts
    * Route Transitions
    * Data Fetching on Dynamic Routes
* Build Store
    * State Management
    * API Calls
    * Using Namespaced Modules
    * Filter State Data
    * Using `mapGetters`
* Basic Functionality
    * Watchers vs Computed Properties
    * Click 
    * Keyup
    * Props
    * Custom Component
    * v-model Interaction

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

## Other
Additional aspects about this project that are not required for what we are building 
but are being introduced as part of this code along due to my own preferences. 

### Files and Their Descriptions
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
# Deck Royale

> A Single Page Application using Vue that generates random Clash Royale decks using the [Clash Royale API](https://github.com/martincarrera/clash-royale-api).

## Requirements

* [NodeJs](https://nodejs.org/en/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## About the Project Files
`src\domain\clash\ClashServices.js` - Where we are requesting the Clash Royale API for data and returning JSON objects.

`src\components` - Where we saved all the templates.

`src\components\shared` - Where we saved all the templates that are used in multiple places.

`src\assets` - Where we saved our CSS, JS and static images.

`src\routes` - Where we manage our application Routes (which template is used in which path).

`main.js` - Where we import the modules that our application uses, and configure them(the modules).

`package.json` - Has all the info needed by Node about the project.


## Modules Used
### Vue Resource
We used the [Vue Resource](https://www.npmjs.com/package/vue-resource) module so we could consume the Clash Royale API that follows the REST pattern.

### Vue Router
We used the [Vue Router](https://www.npmjs.com/package/vue-router) module so we could define the application routes, making it easy to bing the content with the url path.

### Boostrap
We used the [Bootstrap v3.3.7](https://www.npmjs.com/package/bootstrap) module to style our application.

## Consuming API
In this project we are consuming the data from the [Clash Royale API](https://github.com/martincarrera/clash-royale-api).

----------
This content is not affiliated with, endorsed, sponsored, or specifically approved by Supercell and Supercell is not responsible for it. For more information see [Supercell’s Fan Content Policy](http://www.supercell.com/fan-content-policy).

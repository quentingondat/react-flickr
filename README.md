# React-Flickr

[React-Flickr](https://quentingondat.github.io/react-flickr) is a small [Flickr](https://quentingondat.github.io/react-flickr) client coded with [React](https://facebook.github.io/react). It is a small project that I designed to learn React.js

It is built on Node and [express](http://expressjs.com) using [React](https://facebook.github.io/react) for front-end and it fetches photos from Flickr. It is built with [webpack](http://webpack.github.io) and compiled from ES6 with [babeljs](http://babeljs.io).

You can see it in action at: [https://quentingondat.github.io/react-flickr](https://quentingondat.github.io/react-flickr)

<img src="https://quentingondat.github.io/react-flickr/showcase.png" width="700">

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

**Clone this repo**

```
git clone https://github.com/quentingondat/react-flickr.git
cd react-flickr
npm install
```

**Start the app**

```bash
npm run start
```

and open [localhost:3000](http://localhost:3000).

Development mode:

```bash
npm run dev   # Uses nodemon to log errors
npm run build    # Builds the app with webpack
```

then open [localhost:3000](http://localhost:3000).

## Application structure

```bash
. # Starts the express server
├── config.js
├── webpack.config.js
├── client
│   ├── src
│   │   ├── app.js
│   │   ├── containers
│   │   │   ├── Feed.js
│   │   │   ├── Map.js
│   │   │   └── Navbar.js
│   │   ├── components
│   │   │   └── Card.js
│   │   ├── css
│   │   │   ├── style.css
│   │   │   └── components
│   │   │       ├── app.css
│   │   │       ├── base.css
│   │   │       ├── card.css
│   │   │       ├── feed.css
│   │   │       ├── map.css
│   │   │       └── navbar.css
│   │   └── utils
│   │       └── API.js
│   └── dist
└── server
    └── static
        └── index.html
```

#:shipit: FilmsAppJS :shipit:

Simple AngularJS client for the FilmsApp, a Spring web application providing a RESTFul JSON API consumed by this client. The FilmssApp is available from [https://filmsappclient.herokuapp.com/](https://filmsappclient.herokuapp.com/). But you must care about to Load Unsafe Script, we will fix this problem soon.

To run locally, you need first node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

Then, use npm to install the dependencies in package.json, currently just the http-server module:
```
npm install
```

And to run the server on http://localhost:8000
```
npm run-script server
```

There is also a Procfile to run http-server once deployed to Heroku that calls npm start, which is intended just to run the application there.

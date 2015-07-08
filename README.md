react-router-spa-demo
=====================

This is a very simple project that can render the requested page on the server-side, and then leave any other rendering to the client (using React + react-router).  It reuses as much code as possible (i.e., the React Components to construct the views).

Building
========

To build the project, first make sure you have webpack installed:

```
npm i -g webpack
```

Then you may build:

```
npm install

#
# now go in an re-install react-router
# to use the latest version (1.0.0-beta3)
#
cd node_modules/
rm -rf react-router/
git clone https://github.com/rackt/react-router.git
cd react-router/
npm install

#
# Get back to root directory and build
#
cd ../..
webpack

#
# Run the server
#
node main.js
```

Basic Structure
===============

Here is a basic structure of the source files:

* `assets/` - The source files that webpack reads in
  * the entry file is: `assets/js/app.js`
  * all of the files in this folder except `app.js`, and `client-routes.js` can run on both the client (browser) and the server (node)
* `controllers/` - The controllers for handling HTTP requests
* `views/default.vash` - The basic HTML5 template used by express.js
* `controller.js` - The base-controller
* `main.js` - The main server entry-point; this file proxies `server.js`, loading the babel.js hook first
* `server.js` - The file that sets up express.js middleware/routes, etc.

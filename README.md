# `Contactist` 
LIVE DEMO: [https://myztajay.github.io/Contactist/](https://myztajay.github.io/Contactist/)

This project is contact management system that is built AngularJS and Firebase and Angular-Seed. Firebase is a backend service used to protype and serve up data from a nosql database on googles cloud. 

## Getting started

You can simply clone the master repo and run  ``` npm start ```, The script will create the neccesary bower components folder, install any
node dependencies and host the app on ```http://localhost:8000```

## Point of interest 

-   I've created a navbar as a directive called `nav-directive` to handle conditional rendering.
-   The userauthentication flow state is handle by the user factory called ```UserFactory.js``` I chose this
because it made the most sense, as I would need to reference the state insde of the file across many controller.
-   Right now Firebase config is NOT private and replicated. Eventually, once I figure out which module loading solution I want to use,
I refactor it put it into the gitignore and import it where needed.
-   Signup and Login are bundled into the same controller, I may decide to break this up.


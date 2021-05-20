# About this template

This is a template for web applications which require [`express`](https://expressjs.com/) on its backend, and [`react`](https://reactjs.org/) on its frontend(as both are quite popular and powerful tools).

The way these two sides communicate with one another would be using `api`, where the frontend calls `fetch` to some url and then the backend deals with the logic and returns some response.

This template includes two additional shell scripts, let's take a closer look.

# [`applydb.sh`](/api/applydb.sh)

It first creates a directory containing a single database called `db.db`, and then install the necessary dependencies(essentially knex) via `yarn` that enables you to communicate with your database.
This becomes handy when you are trying to store some persistent data, say, when building a messaging app, you may want to store the messages, users, and many other data.

# How to start both apps

Before actually starting them, you have to first install the dependencies from both the client and server side(located in files called `package.json`), and to do so, `cd` into the directory where the `package.json` is located, and `npm install` for `api` and `yarn install` for `client`.

Open up a terminal from the root directory of the project, then `cd api`, and `nodemon`(if you don't have nodemon installed, `npm install nodemon`), what this does is that it starts up the server side(express). After that, open up another terminal from the root directory, then `cd client` and `yarn start`.

# Testing

Now, to test if both are working as expected, go to [this route](http://localhost:3000/test)(this won't work if your apps are not started and running). If everything is working fine, then, you should see a spinning react logo and the text `API is working properly` below that.

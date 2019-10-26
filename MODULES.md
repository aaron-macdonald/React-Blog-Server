Modules used in this project
============================

### Dependancies

**body-parse** body-parser is ...

**cors** cors is ...

**express:** Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

**What is Middleware? :**  A function that is invoked by the Express routing layer before the final request handler, and thus sits in the middle between a raw request and the final intended route. A few fine points of terminology around middleware:

* var foo = require('middleware') is called requiring or using a Node.js module. Then the statement var mw = foo() typically returns the middleware.
* app.use(mw) is called adding the middleware to the global processing stack.
* app.get('/foo', mw, function (req, res) { ... }) is called adding the middleware to the “GET /foo” processing stack.

**knex:** An SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle and Amazon Redshiftr.

**sqlite3:** SQLite is a C library that provides a lightweight disk-based database that doesn’t require a separate server process and allows accessing the database using a nonstandard variant of the SQL query language

**superagent:** SuperAgent is light-weight progressive ajax REQUEST API crafted for flexibility and readability with a low learning curve

### devDependancies


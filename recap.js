// -------------------------------

// Week 06 Notes & Examples: 

  // Express js is the node framework we use to handle server side routing

  // In order to start a server both a host and a port must be chosen. When on your local device the host is localhost and the port is whatever you assign it. Best practice is port 3000

  // Servers work with requests and responses. A server can accept a request from a user to do any sort of action on the app (mostly this applies to basic CRUD actions). The server can then respond to the user with whatever response they are asking for (usually data or a confirmation that an operation was successfull)

  // The major actions in server-side routing are called the HTTP Verbs. They are GET (read data), PUT (update data), POST (create data), and DELETE (remove data). You should use each action depending on which action you plan to execute.

  // Standard practice for naming routes is to follow RESTful Routing (Representational State Transfer). For example, if yopu are handling posts, REST says the routes should look like the following:
      // GET all posts --> '/posts'
      // POST one post --> '/posts'
      // PUT one post --> '/posts/:id'
      // DELETE one post --> '/posts/:id'

  // Middleware is used to intercept between the front-end making a request and the back-end executing a route. The 3 major pieces of middleware serve our static front-end files to the browser, accept json data in general on our server, and accept extended/complex json data on our server. These 3 lines are needed for all our servers.

  // In order to deploy a full-stack application (meaning an app with a server and possibly a database), we need a cloud hosting service that will run our code on their servers. We use heroku, which is similar to other cloud services provided by Google and Amazon.

  // To deploy to heroku, you must first run the command 'heroku create' within your project to create a new heroku app tied to your repo. Then, every time you make changes ready for production, you 'git push heroku main'.

  // There are 2 major types of databases: Structured/Relational (SQL) and Non-Structured/Non-relational (NoSQL). Structured databases enforce rigid structure in regards to how the database will store data. Non-structured allow you to store data in any form you wish. Relational databases allow you to set up relationships between multiple collections of data (ex: A teacher can have many classes they teach, and each class belongs to only one teacher). Non-relational do not allow you to create this kind of structure. Remember that the argument of which is better is no longer relevant due to Object Mappers (which you will be learning next week).

  // SQL Databases store data in tables. Each piece of data is a row in the table, and each property on the data is a column. It is impossible to have data in a SQL table that doesn't maintain every column (ex: your user will have an email column if the table says so, but it can have a null value for email if you want).

  // The major queries to do basic CRUD are as follows:
      // SELECT <columns> from <table_name> WHERE <conditions> --> (retrieves data you want)
      // INSERT INTO <table_name> (<column_name>, ...) VALUES (<data_value>, ...) --> (create data you want)
      // UPDATE <table_name> SET <column_name> = <data_value>, ... WHERE <conditions> --> (update data you want)

  // A connection URI (which is used to connect mysql db to node js) follows this format
      // <db_lang>://<username>:<password>@<host>:<port>/<db_name> --> (ex: mysql://root:rootroot@localhost:3306/users_db)

  // The query() method from the mysql2 npm allows you to pass in values after the actual query. This works better for when you have data provided by inquirer prompts or by server routes
      // db.query('UPDATE users SET age = 50 WHERE username = 'johndoe') --> db.query('UPDATE users SET ? WHERE ', [{ age: 50 }, { username: 'johndoe }])\
      
// -------------------------------

// A note of encouragement:
  // As always make sure you are patient with yourself. This week we tackled two major technologies in 1 week (servers and databases).The next week is spent building on and working with these exact same technologies. Remember how it felt before project 1, and how overwhelming the information and knowledge was. Then you completed your project 1 and built something incredible from nothing! You ARE capable. You CAN do this. If things don't click right away just continue to practice and rewatch lectures and re-do activities. There are many students who came before you, they all felt the same struggle and made it to the finish line. You can do it to!

// -------------------------------

// If you're interested in looking into the major topics of the next week:
  // Handlebars --> https://handlebarsjs.com/guide/
  // Sequelize --> https://sequelize.org/master/
  // Passport --> https://www.passportjs.org/docs/

// -------------------------------
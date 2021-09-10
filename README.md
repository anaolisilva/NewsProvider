<h1>Node Challenge 001 - Jungle Devs</h1>
<h5><em>Ana Oliveira</em></h5>

Back-end of a simple news provider API, developed as a challenge for Jungle Devs using Node.js.

In order to run the application properly, open the project's main directory and do as follows:<br>

To install all of the dependencies needed: <br>
```yarn install```

To build the database from Docker: <br>
```docker-compose up``` 

Next, migrate the tables created: <br>
```yarn knex migrate:latest```

Add some seeds for testing: <br>
```yarn knex seed:run```

If you need, for whatever reason, to kill the tables from the database: <br>
```yarn knex migrate:rollback```

<h3>Endpoints</h3>
<ul>
  <li> Login API: /api/login </li>
  <li> Sign-up API: /api/sign-up</li>
  <li> CRUD /api/admin/authors (Admin restricted)</li>
  <li> CRUD /api/admin/articles (Admin restricted)</li>
  <li> List article endpoint /api/articles?category=:slug</li>
</ul>

There's a Postman collection with the main routes on the root directory. I will note that update and delete methods also exist for the Authors and Articles on the same routes ("/api/admin/authors/:id" and "/api/admin/articles/:id") even though it's not stated in the file.

<strong>Thank you so much for your time!</strong>

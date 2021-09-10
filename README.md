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

*I will add a Postman files with examples very soon!*

# COVID-19 Timeline API

## Stack
* NodeJS (v16)
* NestJS
* Typescript
* TypeORM
* PostgresQL

## How to start service

1. Run `docker-compose up api` to start the container
2. After container start up run `docker-compose exec api yarn migration:run` for migrating the database

## Note
* If you want to connect database on the local machine, please connect to

```
HOST=localhost
PORT=5432
USER=admin
PASSWORD=admin
DB=covid-timeline
```

* API endpoint is `http://localhost:3000`
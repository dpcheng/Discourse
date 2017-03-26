# Backend

## Ruby on Rails
  Discourse runs on Ruby on Rails. Along with supplying RESTful APIs that respond with JSON data, Rails 5.0 provides us with Action Cable.
  * Action Cable the framework used for handling websockets.

## Heroku
  Discourse is hosted on Heroku. New Relic APM was installed for availability monitoring and keeping the Heroku dyno awake.

## PostgreSQL
  PostgreSQL is the relational database management system that must be used for Heroku projects.

## Dependencies
  * Redis is used as a data store for syncing content across instances of the application
  * BCrypt is used for password-salting and hashing

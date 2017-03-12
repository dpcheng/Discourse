# Schema Information

## users
column name     | data type | details
--------------------------------------------------------
id              |  integer  | not null, primary key
username        |  string   | not null, indexed, unique
password_digest |  string   | not null
session_token   |  string   | not null, indexed, unique

## messages
column name     | data type | details
--------------------------------------------------------
id              |  integer  | not null, primary key
text            |  text     | not null
user_id         |  integer  | not null, foreign key (references users), indexed
channel_id      |  integer  | not null, foreign key (references channels), indexed

## channels
column name     | data type | details
--------------------------------------------------------
id              |  integer  | not null, primary key
name            |  string   | not null, indexed, unique
public          |  boolean  | not null
users           |  integer  | array

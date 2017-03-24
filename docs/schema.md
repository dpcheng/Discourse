# Schema Information

## users
column name     | data type | details
----------------|-----------|---------------------------
id              |  integer  | not null, primary key
username        |  string   | not null, indexed, unique
password_digest |  string   | not null
session_token   |  string   | not null, indexed, unique

## messages
column name        | data type | details
-------------------|-----------|---------------------------
id                 |  integer  | not null, primary key
text               |  text     | not null
user_id            |  integer  | not null, foreign key (references users), indexed
sub_channel_id     |  integer  | foreign key (references sub channels), indexed

## channels
column name     | data type | details
----------------|-----------|---------------------------
id              |  integer  | not null, primary key
name            |  string   | not null, unique

## sub_channels
column name     | data type | details
----------------|-----------|---------------------------
id              |  integer  | not null, primary key
name            |  string   | not null
channel_id      |  integer  | foreign key (references channels), indexed

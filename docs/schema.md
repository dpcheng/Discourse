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
direct_message_id  |  integer  | foreign key (references direct messages), indexed

## direct_messages
column name     | data type | details
----------------|-----------|---------------------------
id              |  integer  | not null, primary key
users           |  integer  | array, default: []

## channels
column name     | data type | details
----------------|-----------|---------------------------
id              |  integer  | not null, primary key
name            |  string   | not null, unique
admin_id        |  integer  | not null, indexed

## sub_channels
column name     | data type | details
----------------|-----------|---------------------------
id              |  integer  | not null, primary key
name            |  string   | not null
topic           |  string   |
channel_id      |  integer  | foreign key (references channels), indexed

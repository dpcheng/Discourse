# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170602000739) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string   "name",                    null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "image_url",  default: ""
  end

  create_table "messages", force: :cascade do |t|
    t.text     "text",                        null: false
    t.integer  "user_id",                     null: false
    t.integer  "sub_channel_id",              null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "image_url",      default: ""
    t.index ["sub_channel_id"], name: "index_messages_on_sub_channel_id", using: :btree
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
  end

  create_table "sub_channels", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name",       null: false
    t.integer  "channel_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                     null: false
    t.string   "password_digest",              null: false
    t.string   "session_token",                null: false
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.integer  "direct_messages", default: [],              array: true
    t.index ["username"], name: "index_users_on_username", using: :btree
  end

end

class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :text, null: false
      t.integer :user_id, null: false
      t.integer :sub_channel_id, null: false
      t.timestamps
    end

    add_index :messages, :user_id
    add_index :messages, :sub_channel_id
  end
end

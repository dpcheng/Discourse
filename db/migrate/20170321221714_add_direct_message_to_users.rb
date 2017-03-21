class AddDirectMessageToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :direct_messages, :integer, array: true, default: []
    remove_column :sub_channels, :channel_id
    add_column :sub_channels, :channel_id, :integer
  end
end

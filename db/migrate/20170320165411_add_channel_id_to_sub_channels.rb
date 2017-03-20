class AddChannelIdToSubChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :sub_channels, :channel_id, :integer, null: false
    add_index :sub_channels, :channel_id
  end
end

class AddNameToSubChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :sub_channels, :name, :string, null: false
  end
end

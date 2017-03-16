class CreateSubChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :sub_channels do |t|
      t.timestamps
    end
  end
end

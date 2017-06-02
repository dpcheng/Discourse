class AddImageUrlToChannel < ActiveRecord::Migration[5.0]
  def change
    add_column :channels, :image_url, :string, default: ""
  end
end

class AddImageUrlToMessage < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :image_url, :string, default: ""
  end
end

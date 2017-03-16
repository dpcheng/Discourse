class SubChannel < ApplicationRecord
  has_many :messages,
    dependent: :destroy

  has_many :users,
    through: :messages,
    source: :user

end

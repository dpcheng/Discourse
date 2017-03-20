class SubChannel < ApplicationRecord
  validates :name, presence: true

  has_many :messages,
    dependent: :destroy

  has_many :users,
    through: :messages,
    source: :user

end

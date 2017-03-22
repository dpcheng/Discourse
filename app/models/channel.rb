class Channel < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :sub_channels,
    dependent: :destroy
end

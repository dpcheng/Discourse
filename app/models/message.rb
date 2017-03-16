class Message < ApplicationRecord
  validates :text, :user_id, :sub_channel_id, presence: true

  belongs_to :user
  belongs_to :sub_channel
end

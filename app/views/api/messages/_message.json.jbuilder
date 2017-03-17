@username = message.user.username
@created_at = message.created_at.strftime("%I:%M%p on %B %d, %Y")
json.extract! message, :id, :user_id, :text, :sub_channel_id
json.username @username
json.created_at @created_at

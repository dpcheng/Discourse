@username = message.user.username
json.extract! message, :id, :text, :sub_channel_id
json.username @username

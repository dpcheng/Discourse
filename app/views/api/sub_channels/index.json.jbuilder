@sub_channels.each do |sub_channel|
  json.set! sub_channel.id do
    json.partial! 'api/sub_channels/sub_channel', sub_channel: sub_channel
  end
end

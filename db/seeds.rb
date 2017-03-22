# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

private_convo = SubChannel.create(name: "Private Conversation")
demo = User.create(username: "demo-user", password: "demo-password", direct_messages = [ private_convo.id ])

games = Channel.create(name: "Games")
games_general = SubChannel.create(name: "#general", channel_id: games.id)
games_rocketleague = SubChannel.create(name: "#rocketleague", channel_id: games.id)
games_overwatch = SubChannel.create(name: "#overwatch", channel_id: games.id)

music = Channel.create(name: "Music")
music_general = SubChannel.create(name: "#music", channel_id: music.id)
music_edm = SubChannel.create(name: "#edm", channel_id: music.id)
music_hiphop = SubChannel.create(name: "#hiphop", channel_id: music.id)

movies = Channel.create(name: "TV/Movies")
movies_general = SubChannel.create(name: "#general", channel_id: movies.id)
movies_tv = SubChannel.create(name: "#television", channel_id: movies.id)
movies_movies = SubChannel.create(name: "#movies", channel_id: movies.id)

gamer1 = User.create(username: "360noscope", password: "password")
gamer2 = User.create(username: "DisasterMaster", password: "password")

music1 = User.create(username: "MonsterHouseCat", password: "password")
music2 = User.create(username: "DJinPJs", password: "password")

movies1 = User.create(username: "4thWall", password: "password")
movies2 = User.create(username: "Dr. Turkleton", password: "password")

Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "anybody have any suggestions on a good indie game?")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "do you like roguelites?")
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "yeah")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "there's Binding of Isaac, Faster Than Light, Spelunky, and a bunch more.")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "other great ones are Bastion, Super Meat Boy, and Terraria")
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "awesome, thanks! how much is Super Meat Boy?")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "indie games go for less than $5 during Steam sales. just keep an eye out for them")

Message.create(user_id: gamer2.id, sub_channel_id: games_rocketleague.id, text: "anyone want to partner up for some 2v2 games?")
Message.create(user_id: gamer1.id, sub_channel_id: games_rocketleague.id, text: "I'm down. what rank are you?")
Message.create(user_id: gamer2.id, sub_channel_id: games_rocketleague.id, text: "I'm challenger elite")
Message.create(user_id: gamer1.id, sub_channel_id: games_rocketleague.id, text: "oh cool, I'm rising star")
Message.create(user_id: gamer2.id, sub_channel_id: games_rocketleague.id, text: "nice. I just can't break out of challenger")
Message.create(user_id: gamer1.id, sub_channel_id: games_rocketleague.id, text: "keep at it man. You see the rewards for season 3?")
Message.create(user_id: gamer2.id, sub_channel_id: games_rocketleague.id, text: "YEAH! I just want those blue wheels. looks awesome")

Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "anybody else tired of playing against bastions?")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "yup... what was Blizzard thinking buffing him?")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "only theory I have is that there were just so many tanks in the meta. so this was their plan of bringing them down")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "so you force your player base to play bastion?")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "I never said it was a good plan")

Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "I need some studying music. any suggestions?")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "spotify")
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "-.-")

Message.create(user_id: music2.id, sub_channel_id: music_edm.id, text: "you guys hear deadmau5 is coming to oakland in april?")
Message.create(user_id: music1.id, sub_channel_id: music_edm.id, text: "deadmau5? what year is it, 2010?")

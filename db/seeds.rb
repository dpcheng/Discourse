# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
discourse = User.create(username:"Discourse", password:"hunter2")

work_buddies = SubChannel.create(name: "Work Buddies")
family = SubChannel.create(name: "Family")
demo = User.create(username: "demo-user", password: "demo-password", direct_messages: [ work_buddies.id, family.id ])


# gamer2 and music1 are members
Message.create( user_id: discourse.id, sub_channel_id: work_buddies.id, text: "Welcome to the beginning of the #{work_buddies.name} channel!" )
Message.create(user_id: music1.id, sub_channel_id: work_buddies.id, text: "can anybody take my shift tomorrow?" )
Message.create(user_id: gamer2.id, sub_channel_id: work_buddies.id, text: "I can. what's up? everything okay?" )
Message.create(user_id: music1.id, sub_channel_id: work_buddies.id, text: "yeah. just jury duty" )
Message.create(user_id: demo.id, sub_channel_id: work_buddies.id, text: "ewww" )
Message.create(user_id: music1.id, sub_channel_id: work_buddies.id, text: "hahaha" )
Message.create(user_id: music1.id, sub_channel_id: work_buddies.id, text: "I actually haven't served yet. always been dismissed. maybe it'll feel like being in a TV show" )
Message.create(user_id: gamer2.id, sub_channel_id: work_buddies.id, text: "spoiler: it's not." )


# music2 and movies1 are members
Message.create(text: "Welcome to the beginning of the #{family.name} channel!", user_id: discourse.id, sub_channel_id: family.id)


games = Channel.create(name: "Games")
games_general = SubChannel.create(name: "#general", channel_id: games.id)
Message.create(text: "Welcome to the beginning of the #{games_general.name} channel!", user_id: discourse.id, sub_channel_id: games_general.id)

games_rocketleague = SubChannel.create(name: "#rocketleague", channel_id: games.id)
Message.create(text: "Welcome to the beginning of the #{games_rocketleague.name} channel!", user_id: discourse.id, sub_channel_id: games_rocketleague.id)

games_overwatch = SubChannel.create(name: "#overwatch", channel_id: games.id)
Message.create(text: "Welcome to the beginning of the #{games_overwatch.name} channel!", user_id: discourse.id, sub_channel_id: games_overwatch.id)

music = Channel.create(name: "Music")
music_general = SubChannel.create(name: "#music", channel_id: music.id)
Message.create(text: "Welcome to the beginning of the #{music_general.name} channel!", user_id: discourse.id, sub_channel_id: music_general.id)

music_edm = SubChannel.create(name: "#edm", channel_id: music.id)
Message.create(text: "Welcome to the beginning of the #{music_edm.name} channel!", user_id: discourse.id, sub_channel_id: music_edm.id)

music_hiphop = SubChannel.create(name: "#hiphop", channel_id: music.id)
Message.create(text: "Welcome to the beginning of the #{music_hiphop.name} channel!", user_id: discourse.id, sub_channel_id: music_hiphop.id)

movies = Channel.create(name: "TV/Movies")
movies_general = SubChannel.create(name: "#general", channel_id: movies.id)
Message.create(text: "Welcome to the beginning of the #{movies_general.name} channel!", user_id: discourse.id, sub_channel_id: movies_general.id)

movies_tv = SubChannel.create(name: "#television", channel_id: movies.id)
Message.create(text: "Welcome to the beginning of the #{movies_tv.name} channel!", user_id: discourse.id, sub_channel_id: movies_tv.id)

movies_movies = SubChannel.create(name: "#movies", channel_id: movies.id)
Message.create(text: "Welcome to the beginning of the #{movies_movies.name} channel!", user_id: discourse.id, sub_channel_id: movies_movies.id)


gamer1 = User.create(username: "360noscope", password: "password")
gamer2 = User.create(username: "TheDisasterMaster", password: "password", direct_messages: [work_buddies.id])

music1 = User.create(username: "MonsterHouseCat", password: "password", direct_messages: [work_buddies.id])
music2 = User.create(username: "BillyBlueJeans", password: "password", direct_messages: [family.id])

movies1 = User.create(username: "4thWall", password: "password", direct_messages: [family.id])
movies2 = User.create(username: "Dr. Turkleton", password: "password")

Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "anybody have any suggestions on a good indie game?")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "do you like roguelites?")
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "yeah")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "there's Binding of Isaac, Faster Than Light, Spelunky, and a bunch more.")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "other great ones are Bastion, Super Meat Boy, and Terraria")
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "awesome, thanks! how much is Super Meat Boy?")
Message.create(user_id: movies1.id, sub_channel_id: games_general.id, text: "indie games go for less than $5 during Steam sales. just keep an eye out for them")
Message.create(user_id: movies1.id, sub_channel_id: games_general.id, text: "having switched from gaming on a console to a PC, there are sooo many great deals on PC")

Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "anyone want to partner up for some 2v2 games?")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "I'm down. what rank are you?")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "I'm challenger elite")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "oh cool, I'm rising star")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "nice. I just can't break out of challenger")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "keep at it man. have you been plaing the new game mode?")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "dropshot?")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "yeah")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "haven't been able to yet. how is it?")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "it is really fun! changes gameplay up quite a bit. although right now, everyone is still ball chasing because nobody knows the best strategy")


Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "so on a scale of 1 to 10, how does everybody like the current meta?")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "4")
Message.create(user_id: music2.id, sub_channel_id: games_overwatch.id, text: "0")
Message.create(user_id: movies1.id, sub_channel_id: games_overwatch.id, text: "-20")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "yeah, that's pretty much what I expected.")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "just tired of playing against bastions")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "yup... what was Blizzard thinking buffing him?")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "only theory I have is that there were just so many tanks in the meta. so this was their plan of bringing them down")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "so you force your player base to play bastion?")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "I never said it was a good plan")

Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "I need some studying music. any suggestions?")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "spotify")
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "-.-")

Message.create(user_id: music2.id, sub_channel_id: music_edm.id, text: "you guys hear deadmau5 is coming to oakland in april?")
Message.create(user_id: music1.id, sub_channel_id: music_edm.id, text: "deadmau5? what year is it, 2010?")

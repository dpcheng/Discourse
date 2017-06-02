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
demo = User.create(username: "demo-user", password: "demo-password", direct_messages: [work_buddies.id, family.id])

work1 = User.create(username: "SleepingMongoose", password: "password", direct_messages: [work_buddies.id])
work2 = User.create(username: "FlyingCheese", password: "password", direct_messages: [work_buddies.id])

family1 = User.create(username: "CaptainKrunch", password: "password", direct_messages: [family.id])
family2 = User.create(username: "PartyHardly", password: "password", direct_messages: [family.id])

gamer1 = User.create(username: "360noscope", password: "password")
gamer2 = User.create(username: "HyruleFool", password: "password")

music1 = User.create(username: "MonsterHouseCat", password: "password")
music2 = User.create(username: "BillyBlueJeans", password: "password")

movies1 = User.create(username: "4thWall", password: "password")
movies2 = User.create(username: "JohnDorian", password: "password")

# Work Buddies Direct Messages
Message.create( user_id: discourse.id, sub_channel_id: work_buddies.id, text: "Welcome to the beginning of the #{work_buddies.name} channel!" )
Message.create(user_id: work1.id, sub_channel_id: work_buddies.id, text: "so I have a favor to ask", image_url: "https://emojipedia-us.s3.amazonaws.com/cache/a2/a3/a2a38c51c1b2de710506b81105873a59.png" )
Message.create(user_id: work1.id, sub_channel_id: work_buddies.id, text: "can anybody take my shift tomorrow?" )
Message.create(user_id: work2.id, sub_channel_id: work_buddies.id, text: "I can. what's up? everything okay?", image_url: "http://et-38d7.kxcdn.com/emojione-3.0/1f61f.png" )
Message.create(user_id: work1.id, sub_channel_id: work_buddies.id, text: "yeah. just jury duty" )
Message.create(user_id: demo.id, sub_channel_id: work_buddies.id, text: "ewww" )
Message.create(user_id: work1.id, sub_channel_id: work_buddies.id, text: "hahaha" )
Message.create(user_id: work1.id, sub_channel_id: work_buddies.id, text: "I actually haven't served yet. always been dismissed. maybe it'll feel like being in a TV show", image_url: "https://media.giphy.com/media/yLlXBR9OMAYjm/giphy.gif" )
Message.create(user_id: work2.id, sub_channel_id: work_buddies.id, text: "spoiler: it's not." )


# Family Direct Messages
Message.create(user_id: discourse.id, sub_channel_id: family.id, text: "Welcome to the beginning of the #{family.name} channel!")
Message.create(user_id: family1.id, sub_channel_id: family.id, text: "good morning everyone")
Message.create(user_id: demo.id, sub_channel_id: family.id, text: "morning")
Message.create(user_id: family2.id, sub_channel_id: family.id, text: "hey fam, when's the next get together?")
Message.create(user_id: family1.id, sub_channel_id: family.id, text: "I think aunt Kelly said they're throwing a birthday party for Anne next Friday", image_url: "https://media.giphy.com/media/PAgzChMNPymha/giphy.gif")
Message.create(user_id: family2.id, sub_channel_id: family.id, text: "oh wow, already? How old is Anne going to be?")
Message.create(user_id: family1.id, sub_channel_id: family.id, text: "I think 8?")
Message.create(user_id: demo.id, sub_channel_id: family.id, text: "yes, 8")
Message.create(user_id: family2.id, sub_channel_id: family.id, text: "awesome, I'll bring a pinata", image_url: "http://gifrific.com/wp-content/uploads/2012/04/spiderman-hug.gif")


games = Channel.create(name: "Games", image_url: "https://emojipedia-us.s3.amazonaws.com/cache/58/79/587922eae97f0ca5850153e43449522f.png")
games_general = SubChannel.create(name: "#general", channel_id: games.id)
Message.create(text: "Welcome to the beginning of the #{games_general.name} channel!", user_id: discourse.id, sub_channel_id: games_general.id)

games_rocketleague = SubChannel.create(name: "#rocketleague", channel_id: games.id)
Message.create(text: "Welcome to the beginning of the #{games_rocketleague.name} channel!", user_id: discourse.id, sub_channel_id: games_rocketleague.id)

games_overwatch = SubChannel.create(name: "#overwatch", channel_id: games.id)
Message.create(text: "Welcome to the beginning of the #{games_overwatch.name} channel!", user_id: discourse.id, sub_channel_id: games_overwatch.id)

music = Channel.create(name: "Music", image_url: "https://tctechcrunch2011.files.wordpress.com/2012/02/google-music-logo.png?w=256")
music_general = SubChannel.create(name: "#music", channel_id: music.id)
Message.create(text: "Welcome to the beginning of the #{music_general.name} channel!", user_id: discourse.id, sub_channel_id: music_general.id)

music_hiphop = SubChannel.create(name: "#hiphop", channel_id: music.id)
Message.create(text: "Welcome to the beginning of the #{music_hiphop.name} channel!", user_id: discourse.id, sub_channel_id: music_hiphop.id)

movies = Channel.create(name: "TV/Movies", image_url: "http://www.freeiconspng.com/uploads/movie-icon-23.png")
movies_general = SubChannel.create(name: "#general", channel_id: movies.id)
Message.create(text: "Welcome to the beginning of the #{movies_general.name} channel!", user_id: discourse.id, sub_channel_id: movies_general.id)

movies_tv = SubChannel.create(name: "#television", channel_id: movies.id)
Message.create(text: "Welcome to the beginning of the #{movies_tv.name} channel!", user_id: discourse.id, sub_channel_id: movies_tv.id)

movies_movies = SubChannel.create(name: "#movies", channel_id: movies.id)
Message.create(text: "Welcome to the beginning of the #{movies_movies.name} channel!", user_id: discourse.id, sub_channel_id: movies_movies.id)


# Games General Sub Channel
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "anybody have any suggestions on a good indie game?")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "do you like roguelites?")
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "yeah")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "there's Binding of Isaac, Faster Than Light, Spelunky, and a bunch more.", image_url: "http://orig03.deviantart.net/02ff/f/2014/018/f/3/spelunky___icon_by_blagoicons-d72pjyj.png")
Message.create(user_id: gamer2.id, sub_channel_id: games_general.id, text: "other great ones are Bastion, Terraria, and Super Meat Boy", image_url: "http://pa1.narvii.com/5915/dc657939735fd3498b3d9987d4488014c7ce271b_hq.gif")
Message.create(user_id: gamer1.id, sub_channel_id: games_general.id, text: "awesome, thanks! how much is Super Meat Boy?")
Message.create(user_id: movies1.id, sub_channel_id: games_general.id, text: "indie games go for less than $5 during Steam sales. just keep an eye out for them")
Message.create(user_id: movies1.id, sub_channel_id: games_general.id, text: "having switched from gaming on a console to a PC, there are sooo many great deals on PC", image_url: "https://ci.memecdn.com/7049038.jpg")

# Games Rocket League SubChannel
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "anyone want to partner up for some 2v2 games?")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "I'm down. what rank are you?")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "I'm challenger elite")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "oh cool, I'm rising star")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "nice. I just can't break out of challenger")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "keep at it man. have you been plaing the new game mode?", image_url: "https://static.wixstatic.com/media/884d18_117b5b6524bb4ac3b8f53700317e252c~mv2.gif")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "dropshot?")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "yeah")
Message.create(user_id: movies2.id, sub_channel_id: games_rocketleague.id, text: "haven't been able to yet. how is it?")
Message.create(user_id: movies1.id, sub_channel_id: games_rocketleague.id, text: "it is really fun! changes gameplay up quite a bit. although right now, everyone is still ball chasing because nobody knows the best strategy")

# Games Overwatch Sub Channel
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "so on a scale of 1 to 10, how does everybody like the current meta?")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "4")
Message.create(user_id: music2.id, sub_channel_id: games_overwatch.id, text: "0")
Message.create(user_id: movies1.id, sub_channel_id: games_overwatch.id, text: "-20")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "yeah, that's pretty much what I expected.")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "just tired of playing against bastions", image_url: "http://i.imgur.com/6vhmTWv.gif")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "yup... what was Blizzard thinking buffing him?")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "only theory I have is that there were just so many tanks in the meta. so this was their plan of bringing them down")
Message.create(user_id: gamer2.id, sub_channel_id: games_overwatch.id, text: "so you force your player base to play bastion?")
Message.create(user_id: gamer1.id, sub_channel_id: games_overwatch.id, text: "I never said it was a good plan")

# Music General Sub Channel
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "I need some studying music. any suggestions?")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "spotify")
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "-.-", image_url: "https://giffiles.alphacoders.com/221/221.gif")
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "anything specific?")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "I'm kinda serious. Put in some songs you like, find new stuff that's similar")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "listen to spotify, soundcloud, pandora, even plug.dj")
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "what's plug.dj?")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "users queue up songs that everyone in a lobby listens to", image_url: "http://www.radiosurvivor.com/wp-content/uploads/2013/11/pludjroom-740x389.jpg")
Message.create(user_id: music2.id, sub_channel_id: music_general.id, text: "so every song played is like a recommendation")
Message.create(user_id: music1.id, sub_channel_id: music_general.id, text: "cool, I'll give it a try")

# Music Hiphop SubChannel
Message.create(user_id: music2.id, sub_channel_id: music_hiphop.id, text: "KANYE GREATEST OF ALL TIME. PROVE ME WRONG", image_url: "http://cdn3-www.craveonline.com/assets/uploads/2017/01/8.gif")
Message.create(user_id: music1.id, sub_channel_id: music_hiphop.id, text: "-.-")

# Movies General SubChannel
Message.create(user_id: movies1.id, sub_channel_id: movies_general.id, text: "you all see the new Baby Driver trailer?", image_url: "https://hips.hearstapps.com/roa.h-cdn.co/assets/17/11/1489418135-baby.gif")
Message.create(user_id: movies2.id, sub_channel_id: movies_general.id, text: "yeah! it was pretty awesome")
Message.create(user_id: movies2.id, sub_channel_id: movies_general.id, text: "super psyched")
Message.create(user_id: movies1.id, sub_channel_id: movies_general.id, text: "looks like a good movie")
Message.create(user_id: movies1.id, sub_channel_id: movies_general.id, text: "just afraid it'll be very cliched. 'After this one last job, I'm getting out of the game'")
Message.create(user_id: movies1.id, sub_channel_id: movies_general.id, text: "seen that movie already")
Message.create(user_id: movies2.id, sub_channel_id: movies_general.id, text: "true. but its Edgar Wright. there's bound to be more to it than that", image_url: "https://media.giphy.com/media/SyaBhVWwYe4DK/giphy.gif")
Message.create(user_id: movies1.id, sub_channel_id: movies_general.id, text: "yeah, we'll see. hoping I'll be proven wrong")

# Movies TV Sub Channel
Message.create(user_id: family1.id, sub_channel_id: movies_tv.id, text: "Just finished Mr. Robot. What should I watch next?", image_url: "http://nerdist.com/wp-content/uploads/2016/01/Mr-Robot-Gag-Reel-Gif-5.gif")
Message.create(user_id: work2.id, sub_channel_id: movies_tv.id, text: "WestWorld")
Message.create(user_id: work2.id, sub_channel_id: movies_tv.id, text: "Black Mirror")
Message.create(user_id: movies2.id, sub_channel_id: movies_tv.id, text: "whats Black Mirror about?")
Message.create(user_id: work2.id, sub_channel_id: movies_tv.id, text: "pretty much the modern twilight zone", image_url: "https://media.giphy.com/media/PSYk24jkR4P3a/giphy.gif")
Message.create(user_id: work2.id, sub_channel_id: movies_tv.id, text: "highly recommend")
Message.create(user_id: family1.id, sub_channel_id: movies_tv.id, text: "thanks!")

# Movies Movies Sub Channel
Message.create(user_id: family2.id, sub_channel_id: movies_movies.id, text: "I hear Get Out was really good")
Message.create(user_id: family2.id, sub_channel_id: movies_movies.id, text: "anyone seen it? what did you think?")
Message.create(user_id: work1.id, sub_channel_id: movies_movies.id, text: "I thought it was great!")
Message.create(user_id: work1.id, sub_channel_id: movies_movies.id, text: "pretty funny. also scary at times")
Message.create(user_id: family2.id, sub_channel_id: movies_movies.id, text: "are there any jump scares?")
Message.create(user_id: family2.id, sub_channel_id: movies_movies.id, text: "hate those")
Message.create(user_id: work1.id, sub_channel_id: movies_movies.id, text: "yeah there are")
Message.create(user_id: work1.id, sub_channel_id: movies_movies.id, text: "doesn't really change my overall opinion though")
Message.create(user_id: work1.id, sub_channel_id: movies_movies.id, text: "both the horror and comedy were well done", image_url: "https://m.popkey.co/1b68dc/rkxwv.gif")
Message.create(user_id: family2.id, sub_channel_id: movies_movies.id, text: "thanks! I'll probably check it out this weekend")

# Discourse

[Discourse][discourse] is a web application inspired by Discord. This app allows users to live chat with other users. With the ability to start new discussion topics, users will always find plenty of channels to discuss a myriad of different interests.

![Discourse home page: discourse.chat][home page]

## Features

- Secure registration and login
- [Engage in live chat][live chat]
- Add or choose between discussion topics
- Create and join different channels
- Start new direct messages that are private only to those invited by a current participant

![Discourse direct messages page: discourse.chat][direct messages]

## Project Design
This application was completed by Dylan Cheng within two weeks. Design of Discourse started with a [proposal][proposal] to aid in organization during development.

## Technology
Discourse was developed as a single-page application using Ruby on Rails and React/Redux.

* [Backend Technology][backend]
* [Frontend Technology][frontend]

## Future Features

In addition to the features listed above, there are several features I would like to add in the future.

### Voice/Video Chat
Users are able to privately message other users, but I would like users to be able to start a voice or video chat with each other. I will most likely be implementing [WebRTC][WebRTC] for this feature.

### Notifications
Currently, users will receive all messages created. This was intentional, as it opens up the possibility for users to be notified of new messages posted in a sub channel not currently viewed. However, a check will implemented to prevent users from being notified of private messages.

[discourse]: http://www.discourse.chat
[home page]: ./docs/images/home_page.png "Discourse home page"
[live chat]: ./docs/live_chat.md
[direct messages]: ./docs/images/direct_messages.png "Discourse direct messages page"
[proposal]: ./docs/README.md
[backend]: ./docs/backend.md
[frontend]: ./docs/frontend.md
[WebRTC]: https://www.pubnub.com/blog/2014-10-21-building-a-webrtc-video-and-voice-chat-application/

# Component Hierarchy

**WelcomePageContainer**
  - RegisterContainer
  - LoginContainer

**RegisterContainer**
  - RegisterForm

**LoginContainer**
  - LoginForm

**ChannelContainer**
  - ChannelList
    - DirectMessagesContainer
    - ChannelItem
  - SubChannelList
    - SubChannelItemContainer
  - SubChannelHeader
  - MessageList
    - MessageItem
  - MessageForm
  - UserList
    - UserItem
  - UserInfo

**SubChannelItemContainer**
  - SubChannelItem

**DirectMessagesContainer**
  - UserSearchBar
  - DirectMessageItemContainer

**DirectMessageItemContainer**
  - DirectMessageItem


## Routes

| Path                                    | Component                    |
|-----------------------------------------|------------------------------|
| "/"                                     | "WelcomePageContainer"       |
| "/register"                             | "RegisterContainer"          |
| "/login"                                | "LoginContainer"             |
| "/channels"                             | "ChannelContainer"           |
| "/channels/:channel_id/:sub_channel_id" | "SubChannelItemContainer"    |
| "/channels/@me"                         | "DirectMessagesContainer"    |
| "/channels/@me/:direct_message_id"      | "DirectMessageItemContainer" |

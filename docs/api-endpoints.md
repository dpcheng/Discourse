# API Endpoints

## HTML API

### Root

- 'GET /' - loads React web app

## JSON API

### Users

- 'POST /api/users'
  - takes username and password params

### Session

- 'POST /api/session'
  - accepts username and password params
- 'DELETE /api/session'

### Messages

- 'GET /api/messages'
- 'POST /api/messages'
  - accepts channel or sub-channel ID params
- 'PATCH /api/messages/:id'
- 'DELETE /api/messages/:id'

### DirectMessages

- 'GET /api/direct_messages'
- 'POST /api/direct_messages'
  - creates DirectMessage with recipient(s) user_id
- 'PATCH /api/direct_messages/:id'
  - removes or adds user_ids to users property
- 'DELETE /api/direct_messages/:id'

### Channels

- 'GET /api/channels'
- 'POST /api/channels'
- 'PATCH /api/channels'
- 'DELETE /api/channels'

### SubChannels

- 'GET /api/sub_channels'
- 'POST /api/sub_channels'
  - accepts channel ID param
- 'PATCH /api/sub_channels/:id'
- 'DELETE /api/sub_channels/:id'

1. Writing root.jsx and app.jsx
  - only changed entry file, root.jsx, and app.jsx
  - get error: "Failed prop type: The prop `history` is marked as required in `Router`, but its value is `undefined`."
  - "TypeError: Cannot read property 'location' of undefined"
  - solution: react-router was installed as version 4.0.0, had just been released. chnaged react-router to 2.4.1

2. Writing welcome page with different buttons that goes to different pages.
  - error: "setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor)"
  -solution: wasn't passing a callback to onClick. Ran all of the functions in every onClick handler.

3. Spend a lot of time working with images.
  - error: kept cropping image weirdly. Some images would come in with no height
  - solution: use height: 100vw or 100vh to set image to window size
  - error: outline/border around img
  - solution: had used an img tag instead of anything else
  - all these, had asked for help from Kelly

4. Could not post new message to server. Kept coming back as 422 error.
  - solution: I was not logged in when I was testing from chrome dev tools. In my message controller's create function, I was setting user_id to the current_user's id. In the future, will need to set user_id before posting, or remember to log in before testing.

5. tried setting up redis. works on local machine. when push to production, get error
  - Application error: An error occurred in the application and your page could not be served. If you are the application owner, check your logs for details.
  - solution: had typed an S accidentally. so ApplicationController was turned into ApplicationContollers.
  didn't error out on localhost, but didn't work on production

6. On production, would type out a message, but nothing showed up on screen.
  - seems like my production didn't have a subchannel. so when I made a new message, it wasn't displaying because no subchannel_id. I seeded the database with one subchannel.

7. First noticed that bottom/most-recent message was hidden by message form. Changed message form to relative. but now there were two scroll bars.
Changed body to `overflow: hidden`, but message list wouldn't scroll. Set message-list to `width: 100vw, height: 100vh`, but the top message wouldn't show.
  - added `display: flex` to outer elements holding list and form
  - add `width: 100vw, height: 100vh` to that outer element
  - set `width: 100%, height: 100%, overflow: scroll` to message-list.
  - set form to `position: relative, bottom: 0`

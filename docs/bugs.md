1. Writing root.jsx and app.jsx
  - only changed entry file, root.jsx, and app.jsx
  - get error: "Failed prop type: The prop `history` is marked as required in `Router`, but its value is `undefined`."
  - "TypeError: Cannot read property 'location' of undefined"
  - solution: react-router was installed as version 4.0.0, had just been released. chnaged react-router to 2.4.1

2. Writing welcome page with different buttons that goes to different pages.
  - error: "setState(...): Cannot update during an existing state transition (such as within `render` or another component's constructor)"

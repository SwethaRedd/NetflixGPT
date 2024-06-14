# NetflixGPT

- Create React App - npx create-react-app netflix-gpt
- Configured Tailwind CSS

# https://tailwindcss.com/docs/installation

npm install -D tailwindcss
npx tailwindcss init

- add the below code snippet the tailwind.config.js file

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: ["./src/**/\*.{html,js}"],
theme: {
extend: {},
},
plugins: [],
}

- add the below code in index.css file
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

# Features:

- Login/ SignUp Page

  - Sign In / Sign Up Form
  - Redirect to Browse Page

- Browse Page (After Authentication/ Logged in User)

  - Header
  - Main Movie
    - Movie Trailer in Background
    - Movie Title & Description
    - Movie Suggestions based on the Popularity etc
      - Movies List & Scrollable Horizontally

- Netflix GPT
  - Search Bar
  - Movie Suggestions

## Coding Setups Step by Step

- Create all the initial pages.
- Setup Routing
  npm install -D react-router-dom

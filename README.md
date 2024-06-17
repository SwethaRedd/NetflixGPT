# NetflixGPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validations
- useRef Hook
-

###### Step By Step process

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
- add the router in the Body page and setup the router paths etc.
- Header
- Create Login component
- Create Login Form
- Create Sign Up Form (use few existing sing In form fields for the sign up form by adding some logic and add more fields to the signup form as well)

- \* Form Validations \*

- if you have very huge form in your application, then use some libraries like( Formik, React Final Form etc)

- useRef - Hook that lets you reference a value, that's not needed for rendering.
  const ref= useRef(initialValue)

- Form validations
  - Validate the form
  - If there is any error message, it has to show the error message.

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

- Authentication
  We need Backend for the Authentication.
  We will be using firebase.

go to the firebase account

1. click on Add project

2. Project Name:

3. continue
4. Slect an account as : Default Account for Firebase
5. Click on Create a project
   continue

6. go to the project and click on web and register your web app there.

- App nickname: NetflixGPT
- if you want to host your app in firebase server, select this : Also set up Firebase Hosting fot the app.
- And select register app
- then you will be provided with some steps:  
  Add Firebase SDK

* use npm

  - npm install firebase
  - create a config file with firebase.js in the utils file and copy paste the config code from the firebase account (as instructed).

  - Go to the NetflixGPT in the firebase and check for authentication to enable the authentication
    **_ Note _**: you will get the authentication form the build option on the left side as well
    - click on getstarted.
    - go to the Sign-in Method (you can create multiple sign in options there)
    - as per our project we are going with Email/password and select enable and save it. ( this will enable the users emailid and password )
    - once the authentication is enabled, then you can register your users aswell. ( the users sign up from your app will be shown here in the firebase)

# - Deploying our app to the firebase.

- `npm install -g firebase-tools`
- `firebase login` (it will instruct you to login or take you out to the gmail login for the account)
- once you're logged in then use
  `firebase init` (to initialize firebase: it will create a firebase config for us )
- it will give us some options to host or storage etc..
- i am selecting `Hosting: Config files for Firebase Hosting and (Optionally) set up Github Action deploys`. (use space bar to confirm the option) and `select use an existing project` (as we already created a project earlier)
- ? What do you want to use as your public directory? `build`
- ? Configure as a single-page app (rewrite all urls to /index.html)? `No`
- ? Set up automatic builds and deploys with GitHub? `No`

And it will create my firebase config (firebase.json & .frebaserc)

=========
Build your project : `npm run build`

# Deploy your app:

`firebase deploy` : this command will deploy your app on firebase : which will create the deployed app live url:

Live app:
`NetflixGPT : https://netflixgpt-ad684.web.app `

# Steps for Deployment

1. install firebase CLI- `npm install -g firebase-tools`
2. Firebase Login: `firebase login`
3. Initialize Firebase- `firebase init`. then select Hosting
4. Deploy Command- `firebase deploy`

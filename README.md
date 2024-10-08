# NetflixGPT

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login Form
- Sign Up Form
- Form Validations
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign In User Api
- Created `Redux Store` with `userSlice`
- Implement `Sign out` functionality
- Update Profile API Call
- `BugFix`: Sign up user displayName and profile picture update
- `BugFix`: if the user is not logged in Redirect /browse to Login Page and vice-versa
- `Unsubscribe` to the `onAuthStateChanged` callback.
- Add Hardcoded values to the constants files.
- Register for TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies.
- Create a movieSlice
- Update store with movies Data.
- Planning for MainContainer and SecondaryContainer
- Fetch Data for Trailer Video
- Update store with trailer video data
- Embedded the Youtube video and make it auto play & mute
- Tailwind classes to make MainContainer look awesome.
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB image CDN URL
- Made the Browse page amazing with Tailwind Css
- create & use usePopularMovies Custom hook
- create & use useTopRatedMovies Custom Hook
- create & use useUpComingMovies Custom Hook
- GPT Search Feature: Build movie recommendation system using Chat GPT
- GPT Search Page
- GPT Search Bar
- (\* FEATURE- BONUS) Multi- language feature in our app

###### Step By Step process Tailwind CSS

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

  - `npm install firebase`
  - create a config file with `firebase.js `in the utils file and copy paste the config code from the firebase account (as instructed).

  - Go to the NetflixGPT in the `firebase` and check for authentication to enable the authentication
    **_ Note _**: you will get the `authentication`from the `build` option on the left side as well
    - click on `getstarted`.
    - go to the `Sign-in` Method (you can create multiple sign in options there)
    - as per our project we are going with `Email/password` and select `enable` and `save` it. ( this will enable the users emailid and password )
    - once the authentication is enabled, then you can `register` your users aswell. ( the users sign up from your app will be shown here in the firebase)

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

# Firebase authentication:

- go to fire base docs
  https://firebase.google.com/docs/auth

- Go to the web

https://firebase.google.com/docs/auth/web/password-auth

https://firebase.google.com/docs/auth/web/email-link-auth

1. We're going to use the getAuth() in the utils firebase file , so that we can export that auth and reuse it in many places.
2. in the firebase import the getAuth from firebase and export it.
3. in the login page, where we are going to write out singup and singin logic.
4. Create a User with email and password for the sign up , follow the documentation accordingly.

===============

- Once the user signup/sign in , we will get the user object and we will have to keep the user object with us, so that we can use all this info anywhere in the app.
- So we're going to keep this info in the redux store.
- & we will navigate the user to the browse page.

# Setup Redux Store

1. install 2 libraries

- npm i -D @reduxjs/toolkit
- npm i react-redux

2. Configure appStore (redux store)

- create appStore file with reducer
- create userSliceReducer
- import userSliceReducer in appStore
- provide the appStore to our app

3. dispatch an action ; instead of dispatching an action in many places (ex; for sign In/ SignUp/singout/create a user/ or anything related to auth/ auth changes), lets create a utility, so that we can reuse it many places.

   this API (onAuthStaeChanged) will be used for all the above conditions:
   https://firebase.google.com/docs/auth/web/manage-users

- we can write this api anywhere in the root file like app.js or body.js or anywhere we are comfortable using it.
- so we're calling this api inside <Body/> component and we are using this api as event listener and also we want to call it only once.
- so we are using useEffect with [], so that it will call only once.
- the logic is written inside the body component:- onAuthStateChanged.
- this onAuthStateChanged will take 2 arguments as suggested in the firebase documentation
  auth and the user.
  if the user is present, then the dispatch method will be called to dispatch/send all the mentioned/required data to the appStore.

- if the user is signing out, then the empty dispatch() will be dispatched. so the store will be emptied.or the user data will be removed from it.

- `so in this same file, we will be using useDispatch() hook from react-redux` to dispatch the data to the store.
- `using the useNavigate() hook from "react-router-dom" to navigate the page to different routes based on the condition`

#### BugFix: `if the user is not logged in Redirect /browse to Login Page and vice-versa`

1. If the user is logged in, redirwct the user to the browse page
2. If the user is not logged in and trying to access /browse or any loggedin user accessable url's, then redirect the user to the login page

# Checking Auth on the other pages?

- Moving the auth logic to the Header component from the Body, as the header will be presented in all the pages,so would be a better idea to use it in the header component.
  & also RouterProvider logic is in the body component, which means, we can not navigate the user to necessary routes as the body provides the router to it's children, and the routing logic doesn't work with in the body component.
- Move all the hardcoded values to the constants file.

# TMDB - API

- create an account in the TMDB
- search for the API (https://www.themoviedb.org/settings/api?language=en-US)
- API Key & API Read Access Token
  (https://developer.themoviedb.org/docs/getting-started)
- goto API reference - (https://developer.themoviedb.org/reference/intro/getting-started)
- Follow the steps as suggested in the docs to access the API.

# Fetch API

- fetch movies API
- Store the movies info in the redux store
- Create moviesSlice, & import it in the appStore.
- dispatch the movies response to the redux store.

# Custom Hook

- Create custom hook and cleanup the code.

# QR Code : Not related to this porject - just adding a client side feature using the qrcode.react package.

# Browse Movies Plan:

1. MainContainer (most trending/new movie/recommended movie)
   - VideoBackground
   - VideoTitle
2. SecondaryContainer
   - Movies list \* n
     - Movie Cards \* n
3.

# Work on the Video background Trailer

1. fetch the api
2. use the iframe to show the video
3. pass the key to the video dynamically.
4. pass the movie id to the video api dynamically.
5. create an action to store the trailer details and dispatch an action.
6. create custom hook to keep the fetching related code inside the hook and reuse this hook multiple times in multiple components.
7. Update the styles to show the trailer video in the back ground and the title and the description and buttons float on top of this background video.
8. add auto play and auto mute options

# Movie List Suggestions

{/\*
MovieList - Popular
MovieCard \* n

- title
- movie Video

  MovieList - Trending
  MovieList - Now Playing Movies
  MovieList - Popular
  MovieList - Top Rated
  MovieList - Upcoming

\*/}

1. Built Secondary Component with Movie List- this movie List with multiple MovieCards.
2. Fetch the popular movie list api. (https://developer.themoviedb.org/reference/movie-popular-list)
3. created usePopularMovies hook.
4. Upgraded the styles
5. Used the TMDB Image CDN URL
6. Fetch the Top Rated Movies List API (https://developer.themoviedb.org/reference/movie-top-rated-list)
7. Create useTopRatedMovies custom hook
8. show the top rated movies list in the Secondary Container.
9. Fetch the Upcoming MoviesList API (https://developer.themoviedb.org/reference/movie-upcoming-list)
10. Create useUpComingMovies custom hook
11. show the top Upcoming movies list in the Secondary Container.

# Chat GPT Search

- Build movie recommendation system using Chat GPT

1. add chat gpt button in the header & add styles.
2. Create GPT Search component and add it in the Browse component.
3. add a logic/ toggle condition to show & hide when the Gpt search button is clicked.

- Plug & play
- Integrate Chat GPT

Language Translations:

- Language constants
- add mutiple lang constants in the langconstants file

- Language change options selection.
- Store the language info in the redux store
  - create configSlice and add the slice in the appStore, and dispatch the lang from the header component and dynamically use the languages
- based on the selected language, tranlsate the page.

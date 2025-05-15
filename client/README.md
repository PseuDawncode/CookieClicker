# Cookie Clicker

This project is a Cookie Clicker game built with React with Tailwind. It features user authentication (login and registration), profile avatar selection, background music.

## Getting Started

1.  Clone the repository.
2.  Navigate to the `client` directory.
3.  Install dependencies: `npm install` or `yarn install`.
4.  Start the development server: `npm start` or `yarn start`.

## Key Features

* **Navigation Bar:** Provides intuitive navigation and displays user login status, username, and profile picture. Includes a toggle for background music and logout functionality.
* **User Authentication:** Log in and register to save user progress (with `localStorage`).
* **Profile Avatars:** Choose a unique avatar during registration.
* **Background Music:** Enjoy optional background music during gameplay.
* **Cookie Clicker Gameplay:**

**User Authentication & Personalization:**

* **Login:** Existing users can log in using their username (email) and password. Authentication is currently done with checking credentials stored in the browser's `localStorage`.
* **Registration:** New users can create an account by providing a username, password (with client-side validation), and selecting a unique profile avatar fetched from the DiceBear API. User data is temporarily stored in `localStorage`.
* **Profile Avatars:** During registration, users can choose from a variety of randomly generated avatars to personalize their profile.

**Background Music:**

* **Optional Playback:** Users can toggle background music on or off via a music icon in the navigation bar.
* **Freesound Integration:** When enabled, the application fetches and plays background music using the Freesound API, creating a more engaging atmosphere.

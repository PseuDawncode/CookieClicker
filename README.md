# Cookie Clicker

This project is a Cookie Clicker game built with React and Tailwind CSS. It features user authentication (login and registration), profile avatar selection, and background music, all integrated into a classic incremental clicking game experience.

---

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [your-repository-url]
    ```
2.  **Navigate to the `client` directory:**
    ```bash
    cd client
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

---

## Key Features

* **Navigation Bar:** Provides intuitive navigation and displays user login status, username, and profile picture. It includes a toggle for background music and logout functionality.
* **User Authentication:** Log in and register to save your game progress locally using `localStorage`.
* **Profile Avatars:** Choose a unique avatar during registration from a selection fetched from the DiceBear API.
* **Background Music:** Enjoy optional background music during gameplay, with toggle functionality.
* **Cookie Clicker Gameplay:**
    * **Click to Earn:** The core mechanic involves clicking a large cookie to generate more cookies.
    * **Upgrades System:** Spend your earned cookies on various upgrades to increase your cookie production rate. This includes purchasing "double click" upgrades to earn more cookies per click, and an "auto clicker" to generate cookies passively over time.
    * **Progress Persistence:** Your cookie count and upgrade levels are saved to your user profile, so your progress is retained between sessions.

---

### User Authentication & Personalization

* **Login:** Existing users can log in using their username (email) and password. Authentication is currently done by checking credentials stored in the browser's `localStorage`.
* **Registration:** New users can create an account by providing a username, a password (with client-side validation for security), and selecting a unique profile avatar. User data and initial game progress are securely stored in `localStorage`.
* **Profile Avatars:** During registration, users can personalize their profile by choosing from a variety of randomly generated avatars.

---

### Background Music

* **Optional Playback:** Users can toggle background music on or off via a music icon in the navigation bar, offering a customizable audio experience.
* **Freesound Integration:** When enabled, the application seamlessly integrates with the Freesound API to fetch and play background music, creating a more immersive and engaging atmosphere for the user.

---

### Responsive Design

* **Mobile-Friendly:** The application is fully responsive and adapts seamlessly to different screen sizes, including desktops, tablets, and smartphones.
* **Tailwind CSS:** Responsive utility classes from Tailwind CSS ensure that layouts, buttons, and game elements remain user-friendly and visually appealing on all devices.

---

### Home Page

* **Welcoming Experience:** The home page provides a visually appealing and responsive landing page that introduces users to the Cookie Clicker game.
* **Quick Access:** Users can easily start playing or are redirected to log in, depending on their authentication status.

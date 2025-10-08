🍿 usePopcorn – A React Movie Tracker

A lightweight movie discovery and tracking app built with React and styled using modern CSS.
You can browse movies (fetched from the OMDb API), view details, and manage a watched list with personal ratings.

🖼️ Preview
Movie Search Watched Summary
<img src="https://github.com/adelana107/usePopcorn-preview1.png" width="400"/> <img src="https://github.com/adelana107/usePopcorn-preview2.png" width="400"/>

(Optional – Add screenshots later)

🚀 Features

🎥 Search Movies: Fetches real-time movie data from the OMDb API
.

⭐ Rate & Track: Displays average IMDb rating, user rating, and runtime stats.

📦 Expandable Boxes: Toggle between the movie list and watched list.

💾 Component-Based Design: Built entirely with reusable React components.

⚙️ Clean Layout: Styled with custom CSS variables and responsive design.

🧩 Components Overview
Component Description
App Root component managing movie and watched data states.
NavBar Displays app logo, search input, and results count.
Search Interactive search bar for movie lookups.
Box Collapsible content container for sections.
MovieList / Movie Displays movie results with posters and release years.
WatchedSummary Shows total watched movies with averages.
WatchedMoviesList / WatchedMovie Lists all watched movies with details.
🧠 Concepts Practiced

React Hooks: useState

Fetching data with fetch() and .json()

Component composition and props

Conditional rendering

Array mapping and calculations

CSS variables and dark theme design

⚙️ Installation & Setup

Clone this repository

git clone https://github.com/adelana107/usePopcorn.git
cd usePopcorn

Install dependencies

npm install

Start the development server

npm start

Open your browser at http://localhost:3000

🔑 API Key Setup

This app uses the OMDb API to fetch movie data.

Visit OMDb API

Request a free API key

Replace the placeholder key in App.js:

const key = "your_api_key_here";

🖌️ Styling

All styles are written in index.css using CSS custom properties (variables):

Dark mode theme with primary purple accent

Responsive layout for all screen sizes

Smooth hover transitions for movie items

🧱 Project Structure
src/
├── App.js
├── index.js
├── index.css
└── components/
├── Movie.js
├── WatchedList.js
└── Search.js

💡 Future Improvements

Add a movie detail page

Allow saving watched movies in localStorage

Add star rating component for custom ratings

Include loading and error states for better UX

🧑‍💻 Author

Adelana Oluwafunmibi Cornelius
📍 Lagos, Nigeria
🌐 GitHub
| LinkedIn
(optional)

📜 License

This project is licensed under the MIT License — free to use and modify.

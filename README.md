# Monish’s Watchlist

A clean, minimalist personal watchlist for Anime, Movies, TV Series, and K-Dramas.

## How to Run

Open `index.html` directly in your browser, or run:

```powershell
python -m http.server 8000 --directory .\watchlist
```

Then visit [http://localhost:8000](http://localhost:8000).

## Features

- **Categories**: Anime Series, Anime Movies, Movies, Movie Series, Web Series, and K-Dramas with live completion progress bars.
- **To Watch / Already Watched**: Switch views with live counters.
- **Search & Sort**: Filter instantly by title/year, sort by Year, Name, or Rating.
- **Surprise Me**: Picks a random unwatched title tonight with a direct link to watch the YouTube trailer.
- **Rating**: 5-star ratings for watched titles.
- **Backup & Restore**: Export your watchlist to JSON or import it to keep your ratings safe.
- **Theme**: Automatic Dark / Light mode detection with a manual toggle button (`◐`).
- **Storage**: Automatically saves to your browser's `localStorage`.

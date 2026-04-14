# 152 Gründe warum ich dich liebe

A personal, single-page love letter built with pure **HTML**, **CSS** and **vanilla JavaScript** — no frameworks, no build step. Open the file in any modern browser and enjoy.

---

## Features

### Core
| Feature | Description |
|---|---|
| **Reasons grid** | All 152 reasons displayed in a responsive, animated card grid. Click any card to open the full-screen modal. |
| **Swipe / keyboard navigation** | Swipe left/right (touch or mouse drag) or use ← → arrow keys inside the modal to move between reasons. |
| **Background particles** | Soft animated particles via *tsParticles* layered over a gradient background. |
| **Spotify embed** | A shared playlist embedded in the footer. |

### Search & Filter *(new)*
- Live **text search** across all 152 reasons — results update as you type.
- **Filter chips**: Alle · ❤️ Favoriten · #1–50 · #51–100 · #101–152.

### Favourites *(new)*
- Press the **♥ button** on any card to save it as a favourite.
- Favourites persist in `localStorage` across sessions.
- A counter badge in the header shows how many reasons are saved.
- Use the **Favoriten** filter chip to view only saved cards.

### Toast notifications *(new)*
- Slim slide-in toasts confirm every user action (favourite added/removed, shuffle, theme switch, surprise).

### Scroll-to-top button *(new)*
- A floating **↑** button appears in the bottom-left corner after scrolling down 300 px and smoothly returns to the top.

### "Überrasch mich!" *(new)*
- The **🎲** button in the top-right toolbar opens a random reason in the modal (respects the active filter).

### Milestone badges *(new)*
- Cards at positions **#10, #25, #50, #100** get a golden ⭐ badge and gold border.
- Card **#152** gets a red ❤️ badge and red border — the most special one.

### Next Anniversary countdown *(new)*
- A pill badge inside the header shows how many days remain until the next anniversary (21 June).

### Colour themes *(new)*
Click the theme button (top-right) to cycle through four themes — choice is remembered in `localStorage`:

| Icon | Theme | Style |
|---|---|---|
| 🌅 | **Standard** | Soft blue-purple gradient (default) |
| 🌹 | **Rose** | Warm pink & cherry-blossom |
| 🌊 | **Ocean** | Deep teal & sky blue |
| ☀️ | **Night** | Warm dark-purple (original sunset mode) |

### Calendar view
- Shows the relationship anniversary, both birthdays, and Valentine's Day with live countdowns.
- Toggle with the **📅** button; returns to main view with the **🏠** button.

### Shuffle
- The **🔀** button randomises the card order; reason **#152** is always kept last.

---

## Bug fixes (this update)
- Fixed `mainFooter` id missing on the footer element (calendar toggle crashed silently).
- Replaced unreliable `style.display === ''` calendar toggle with a proper boolean flag.
- Fixed shuffle pinning the wrong card (#50 instead of #152).
- Fixed the anniversary counter updating only every 8 hours — it now recalculates precisely at midnight.
- Added missing CSS for `.reasons-grid.cuddle` and `.reason-card.big` (previously dead code).

---

## Dateistruktur / File Structure

| Datei | Beschreibung |
|---|---|
| `index.html` | Haupt-HTML-Struktur der Seite |
| `style.css` | Alle Styles (CSS-Variablen, Layouts, Animationen, Themes) |
| `script.js` | Gesamte JavaScript-Logik (Modal, Filter, Favoriten, Themes, Kalender, etc.) |

---

## Usage

Open `index.html` in any modern browser.  
An internet connection is required for the Google Fonts, tsParticles CDN, and the Spotify embed.

No build step, no dependencies to install.

---

## Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (`index.html`) |
| Styling | CSS3 (`style.css`) – custom properties, grid, keyframe animations, backdrop-filter |
| Logic | Vanilla JavaScript (`script.js`) – ES2020 |
| Particles | [tsParticles](https://github.com/tsparticles/tsparticles) v3 (CDN) |
| Fonts | Google Fonts – Montserrat & Georgia |
| Music | Spotify Embed |

---

## Open Source

This project is open source and free to use, modify, and share.

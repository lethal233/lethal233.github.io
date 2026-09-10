# Shilong Li - Personal Portfolio Website

Personal website hosted at [lethal233.github.io](https://lethal233.github.io) on the `master` branch.

## ✨ Highlights
- **Two-Tab Perspective Architecture**: Eliminates excessive page length by splitting the portfolio into two dedicated, switchable views:
  - **💼 Resume & Engineering**: Focused recruiter view with quick metrics, career timeline, ACM FSE publications, education, and technical skills matrix.
  - **🌿 Photography & Life**: Dedicated showcase for animal rescue fostering, fullscreen photography gallery, interactive US travel map, and open source contributions.
- **Tech-Savvy Aesthetic**: Dark & light mode with ambient glowing gradients, modern typography (Inter + Space Grotesk + JetBrains Mono), and an interactive shell (`Cmd+K` / `Ctrl+K`).
- **Recruiter-Friendly**: Interactive career timeline with filters (Industry, Research, Teaching), direct resume download, peer-reviewed ACM FSE publication cards with one-click BibTeX copy, and skills matrix.
- **Hobby & Life Showcase**:
  - **Interactive Travel & POI Map**: Hardware-accelerated Leaflet map with dark canvas, custom neon pins, category filtering (National Parks, Scenic Byways, Points of Interest, Coastal), bi-directional pan/fly, and direct links to gallery photos.
  - **Photography Gallery**: Fullscreen lightbox showcase with category filters (Astrophotography, Landscape, Coastal, etc.).
  - **Animal Companion Fostering**: Story highlight and adoption impact metrics with the Irvine Animal Care Center.
- **Zero Build Step & Decoupled Content**: **You never need to edit HTML or compile anything!** All site content is managed in a single, well-documented file: [`data/content.js`](data/content.js).

---

## 🛠️ How to Update Your Content

Whenever you want to update your resume, add a new publication, add photos, or modify your bio, you only need to edit **[`data/content.js`](data/content.js)**:

| What to Update | Section in `data/content.js` | Notes |
| :--- | :--- | :--- |
| **Name, Title, Location, Bio** | `profile` | Edit text strings, taglines, or avatar path |
| **New Job / Role** | `experiences` | Add a new object with `role`, `company`, `period`, `bullets`, and `skills` |
| **New Academic Paper** | `publications` | Add a new paper with `title`, `venue`, `doiUrl`, and `bibtex` |
| **Education / Degree** | `education` | Add degrees, thesis title, advisors, and honors |
| **Technical Skills** | `skills` | Add/modify skills grouped by domain |
| **Travel & Points of Interest (POIs)** | `hobbies.travel.places` | Add visited parks, scenic drives, or any custom POIs with `coords: [lat, lng]`, category, and notes |
| **Photography Gallery** | `hobbies.photography` | Place images in `images/portfolio/` and add their metadata |
| **Animal Fostering** | `hobbies.fostering` | Update foster stories, adoption stats, or Instagram link |
| **Terminal Shell Commands** | `terminal.commands` | Add custom commands or easter eggs to the interactive shell |
| **Resume / CV PDF** | `profile.resumeUrl` | Replace `files/cv_Shilong_Li_en.pdf` with your latest CV |

### 📍 How to Add a New Point of Interest (POI)
To display a new visited national park, scenic drive, or landmark on the interactive map, append an entry to `hobbies.travel.places` in [`data/content.js`](data/content.js):

```javascript
{
  id: "monument-valley",
  name: "Monument Valley Navajo Tribal Park",
  state: "AZ/UT",
  category: "poi", // "national-park" | "scenic-drive" | "poi" | "coastal"
  coords: [36.9980, -110.0985], // [Latitude, Longitude]
  highlight: "Iconic sandstone buttes rising dramatically from the red desert plateau.",
  photoRef: "monument_valley" // (Optional) Matches an image id in hobbies.photography to link lightbox
}
```

---

## 🚀 Local Testing & Deployment

### Local Preview
Because this project requires zero build tools, you can test it immediately using any local web server:

```bash
# Using Python
python3 -m http.server 8000

# Or using Node
npx serve .
```
Then visit `http://localhost:8000` in your browser.

### Deploying to GitHub Pages
To publish updates live to your site, simply commit and push your changes to the `master` branch:

```bash
git add data/content.js
git commit -m "Update profile content"
git push origin master
```
GitHub Pages will automatically serve the updated site in seconds!

---

## 📂 Project Structure

```
.
├── index.html              # Clean semantic HTML shell
├── data/
│   └── content.js          # ⭐ SINGLE SOURCE OF TRUTH (Edit here!)
├── css/
│   └── style.css           # Modern CSS variables, glassmorphism, responsive grid
├── js/
│   └── app.js              # Dynamic rendering engine, lightbox, terminal, theme
├── images/
│   ├── profile/            # Avatar and hero ambient background
│   └── portfolio/          # Categorized photography (astrophotography, landscape, coastal, etc.)
└── files/
    └── cv_Shilong_Li_en.pdf # Downloadable Resume / CV
```

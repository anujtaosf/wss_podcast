# West Side Story Deconstructed - Podcast Website

A theatrical, Broadway-inspired website for a podcast analyzing the 1961 film *West Side Story* through themes of gender, sexuality, power, music, and violence.

## Features

- **Dramatic Hero Banner** with rotating spotlight animation and graffiti-style text
- **Episode Cards** with embedded audio players that glow when playing
- **YouTube Video Integration** for film clip references
- **Host Profiles** with theatrical styling and hover animations
- **Credits & Bibliography** section for academic sources
- **Fully Responsive** design for all screen sizes

## Design Aesthetic

Inspired by the 1961 *West Side Story* film poster and Broadway theatrical design:

### Color Palette
- **#D62828** - WSS Red (dominant accent)
- **#F7C531** - Spotlight Gold
- **#E6399B** - Hot Pink (queer-coded aesthetic)
- **#6A4C93** - Drama Purple
- **#1C77C3** - Deep Blue
- **#FDF7E6** - Vintage Cream

### Typography
- **Bebas Neue** - Tall Broadway poster font for titles
- **Staatliches** - Geometric signage energy
- **Oswald** - Strong typographic feel
- **Permanent Marker** - Graffiti/handwritten notes
- **Playfair Display** - Elegant subheaders
- **Inter** - Clean body text

### Animations
- Neon glow hover effects (like Broadway signs)
- Snapping animations (Jets reference)
- Dramatic fade-ins (stage lighting)
- Rotating spotlight effects
- Angled section dividers (fire escape aesthetic)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
\`\`\`bash
git clone <your-repo-url>
cd wss-podcast
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Add placeholder audio files
- Place your podcast audio files in `public/assets/` folder
- Name them as `placeholder-audio.mp3` or update the paths in `Home.jsx`

4. Start the development server
\`\`\`bash
npm start
\`\`\`

The app will open at [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
wss-podcast/
├── public/
│   ├── assets/          # Audio files and images
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HeroBanner.jsx
│   │   ├── HeroBanner.css
│   │   ├── EpisodeCard.jsx
│   │   ├── AudioPlayer.jsx
│   │   └── HostCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Background.jsx
│   │   └── Background.css
│   ├── App.js
│   └── App.css
└── package.json
\`\`\`

## Customization

### Adding Episodes
Edit `src/pages/Home.jsx` and add more `<EpisodeCard>` components:

\`\`\`jsx
<EpisodeCard
  title="Episode 4: Your Title"
  description="Your description"
  audioSrc="/assets/your-audio-file.mp3"
/>
\`\`\`

### Updating Host Information
Edit `src/pages/Background.jsx` to update host names and bios.

### Adding Film Clips
Update the YouTube embed URLs in `Home.jsx` to reference your chosen clips.

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Deployment

This site can be deployed to:
- **Netlify** - Drag and drop the `build` folder
- **Vercel** - Connect your GitHub repo
- **GitHub Pages** - Use `gh-pages` package
- **Firebase Hosting** - Use Firebase CLI

## Credits

**Podcast Hosts:**
- Anuhea Tao
- Daniel Soden
- Daniel Bernstein

**Film:**
*West Side Story* (1961) - Directed by Robert Wise and Jerome Robbins

## License

This project is for educational purposes.

## Acknowledgments

- Broadway theatrical design inspiration
- 1961 *West Side Story* film poster aesthetic
- Musical theatre community

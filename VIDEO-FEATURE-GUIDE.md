# Video Comparison Feature Guide

## Overview

Each podcast episode now includes side-by-side video comparisons between the **1961** and **2021** versions of *West Side Story*.

## How It Works

### User Experience
1. Each episode card displays the episode title, description, and audio player
2. Below the audio, two video frames appear side by side (1961 vs 2021)
3. Videos are **darkened by default** to draw focus to the audio
4. **On hover**, the video:
   - Brightens to full visibility
   - Automatically starts playing (muted initially)
   - Shows a glowing pink border effect
5. **On mouse leave**, the video:
   - Returns to darkened state
   - Pauses automatically

### Visual Design
- **1961 label**: Gold badge in top-left corner
- **2021 label**: Gold badge in top-left corner
- **Border color**: Hot pink (#E6399B) matching your WSS theme
- **Hover glow**: Neon pink shadow effect (theatre marquee aesthetic)

## Adding/Updating Episodes

### Basic Structure

In `src/pages/Home.jsx`, use the `EpisodeCardWithVideos` component:

```jsx
<EpisodeCardWithVideos
  title="Your Episode Title"
  description="Brief description of what you discuss"
  audioSrc="/assets/your-audio-file.mp3"
  video1961="https://www.youtube.com/embed/VIDEO_ID_1961"
  video2021="https://www.youtube.com/embed/VIDEO_ID_2021"
/>
```

### Finding YouTube Video IDs

1. Go to the YouTube video you want to embed
2. Copy the URL (e.g., `https://www.youtube.com/watch?v=ABC123XYZ`)
3. Extract the video ID after `v=` (e.g., `ABC123XYZ`)
4. Use format: `https://www.youtube.com/embed/ABC123XYZ`

**Example:**
- Original URL: `https://www.youtube.com/watch?v=O-S7Sizo0vc`
- Embed URL: `https://www.youtube.com/embed/O-S7Sizo0vc`

### Example Episodes

#### Episode 1: Opening Scene
```jsx
<EpisodeCardWithVideos
  title="Episode 1: Masculinity in the Opening Scene"
  description="We break down how masculinity is performed through choreography in the opening sequence."
  audioSrc="/assets/episode-1-opening.mp3"
  video1961="https://www.youtube.com/embed/O-S7Sizo0vc"
  video2021="https://www.youtube.com/embed/-63IyGtJZMg"
/>
```

#### Episode 2: America
```jsx
<EpisodeCardWithVideos
  title="Episode 2: America - Immigration & Identity"
  description="Analyzing how the 'America' scene portrays gender dynamics and immigrant experience."
  audioSrc="/assets/episode-2-america.mp3"
  video1961="https://www.youtube.com/embed/Qy6wo2wpT2k"
  video2021="https://www.youtube.com/embed/gPqkgHrKqzY"
/>
```

#### Episode 3: Cool
```jsx
<EpisodeCardWithVideos
  title="Episode 3: Cool - Masculinity & Control"
  description="How the Jets perform emotional regulation through dance."
  audioSrc="/assets/episode-3-cool.mp3"
  video1961="https://www.youtube.com/embed/wugWGhNOby8"
  video2021="https://www.youtube.com/embed/X-Yn4pT2vKc"
/>
```

## Component Architecture

### File Structure
```
src/
├── components/
│   ├── EpisodeCardWithVideos.jsx  ← Wrapper component
│   ├── VideoCompare.jsx           ← Side-by-side container
│   ├── VideoCompare.css
│   ├── HoverVideo.jsx             ← Individual video with hover logic
│   └── HoverVideo.css
└── pages/
    └── Home.jsx                   ← Where episodes are defined
```

### Component Breakdown

**EpisodeCardWithVideos**
- Wraps the original EpisodeCard (audio player)
- Adds VideoCompare component below

**VideoCompare**
- Creates side-by-side layout
- Renders two HoverVideo components

**HoverVideo**
- Handles individual video display
- Manages hover-to-play/pause logic
- Applies visual effects (brightness, glow)

## Customization

### Changing Border Color
Edit `src/components/HoverVideo.css`:
```css
.hover-video {
  border: 2px solid #E6399B; /* Change this color */
}
```

### Adjusting Video Size
Edit `src/components/HoverVideo.css`:
```css
.hover-video {
  width: 420px; /* Change width */
}

.hover-video iframe {
  height: 240px; /* Change height */
}
```

### Changing Hover Brightness
Edit `src/components/HoverVideo.css`:
```css
.hover-video iframe {
  filter: brightness(0.65); /* Default state */
}

.hover-video:hover iframe {
  filter: brightness(1); /* Hover state */
}
```

## Tips for Content

### Choosing Good Comparison Clips
- Pick scenes that have **clear differences** between versions
- Choose moments that **illustrate your podcast topic**
- Keep clips **under 5 minutes** for best UX

### Scene Suggestions
- **Opening ("Prologue")** - Masculinity, movement, urban space
- **Dance at the Gym** - Gender, desire, choreography
- **America** - Gender roles, immigration, identity
- **Cool** - Emotional regulation, masculinity
- **Somewhere** - Romance, queerness, escapism
- **Rumble** - Violence, masculinity, tragedy
- **Anybodys scenes** - Gender nonconformity

## Troubleshooting

### Videos Not Playing on Hover
- Check that YouTube URLs use `/embed/` format
- Ensure video IDs are correct
- Some videos may have embedding disabled by uploader

### Layout Issues
- Make sure both video URLs are provided
- Check console for any import errors
- Verify all CSS files are imported correctly

## Future Enhancements

Possible additions you could make:
- Add timestamp links to jump to specific moments
- Include captions/annotations for key differences
- Add a "fullscreen compare" mode
- Create a toggle to switch which version plays audio

# Adi Suyash Portfolio Website

A modern, responsive personal portfolio website built with HTML, TypeScript, and Tailwind CSS.

## Features

- **Dark Theme Design**: Clean, modern dark theme with excellent contrast
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Working Blog, Projects, and Gallery sections with modal overlays
- **Profile Picture Rotation**: Automatically rotates between two profile pictures every 10 seconds
- **Social Media Links**: Working social media icons in the footer
- **Smooth Animations**: Hover effects, transitions, and typing animation
- **TypeScript**: Fully typed for better development experience

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start a Vite development server at `http://localhost:3000`

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
ss/
├── index.html              # Main HTML file
├── src/
│   └── main.ts            # TypeScript main file
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.ts         # Vite configuration
```

## Features Explained

### Profile Picture Rotation
The profile picture automatically switches between two different images every 10 seconds with a smooth fade transition.

### Navigation
- **Blog**: Click to open a modal with blog content placeholder
- **Projects**: Click to open a modal with projects content placeholder  
- **Gallery**: Click to open a modal with gallery content placeholder

### Social Media Icons
All social media icons in the footer are clickable and open in new tabs:
- GitHub
- Twitter/X
- LinkedIn
- YouTube
- Instagram
- RSS Feed

### Responsive Design
The layout adapts to different screen sizes:
- Desktop: Two-column layout with text on left, profile picture on right
- Mobile: Single column layout with profile picture below text

## Customization

### Changing Profile Pictures
Edit the `images` array in `src/main.ts`:

```typescript
private images = [
    'your-image-url-1',
    'your-image-url-2'
];
```

### Updating Social Media Links
Edit the `href` attributes in the footer section of `index.html`.

### Styling
The website uses Tailwind CSS. You can customize the theme by editing `tailwind.config.js` or by modifying the classes in `index.html`.

## Browser Support

This website works in all modern browsers that support:
- ES2020 features
- CSS Grid
- CSS Flexbox
- CSS Custom Properties

## License

This project is open source and available under the MIT License.

# Personal Portfolio Website

A dynamic, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Features

- Clean, modern design
- Responsive layout
- Dynamic content loading from JSON files
- Smooth animations with Framer Motion
- Easy deployment to GitHub Pages

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Updating Content

All content is stored in JSON files under `src/data/`:

- `ai-projects.json`: AI projects
- `consulting-projects.json`: Consulting projects
- `game-work.json`: Work at GAME
- `social-impact.json`: Social impact projects
- `other-things.json`: Other projects and Instagram

Each project should follow this format:
```json
{
  "id": "unique-id",
  "title": "Project Title",
  "description": "Project description",
  "image": "/images/project-image.jpg",
  "link": "https://project-link.com"
}
```

## Images

1. Place all project images in the `public/images/` directory
2. Use optimized images (recommended size: 800x600px)
3. Support formats: JPG, PNG, WebP

## Deployment

1. Update the `base` property in `vite.config.ts` to match your GitHub repository name
2. Push your changes to GitHub
3. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Customization

1. Update personal information in `src/components/Header.tsx`
2. Modify styling in `tailwind.config.js`
3. Add/remove sections in `src/App.tsx`

## Development

- Built with React + TypeScript
- Styling with Tailwind CSS
- Animations with Framer Motion
- Routing with React Router
- Package management with npm 
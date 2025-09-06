# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Type check with TypeScript and build for production  
- `npm run preview` - Preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages using gh-pages

## Architecture Overview

This is a personal portfolio website built with React + TypeScript and Vite. The application uses a responsive design pattern with separate desktop and mobile views.

### Core Structure

- **Responsive Layout**: `App.tsx` renders either `DesktopView` or `MobileView` based on screen width (768px breakpoint)
- **Data-Driven Content**: Project data is stored in JSON files under `src/data/` and loaded dynamically via the `useProjects` hook
- **Component Architecture**: Modular React components in `src/components/` handle different sections and functionality

### Key Components

- `App.tsx` - Main app with responsive view switching
- `ProjectSection.tsx` - Reusable section component for displaying project categories
- `ChatAssistant.tsx` - Interactive AI chat component in hero section  
- `ExperienceTimeline.tsx` / `MobileExperienceTimeline.tsx` - Professional experience displays
- `MobileView.tsx` - Complete mobile-optimized layout

### Data Management

Project data is organized by category in JSON files:
- `ai-projects.json` - AI/ML projects
- `game-projects.json` - SMB accelerator work  
- Other categories: consulting, social-impact, other-things

The `useProjects` hook dynamically imports JSON data based on section ID using Vite's import system.

### Styling & UI

- **Tailwind CSS** for utility-first styling with custom color palette
- **Framer Motion** for page transitions and animations
- **Heroicons** for consistent iconography
- **Headless UI** for accessible components
- Custom gradient backgrounds and glassmorphism effects

### Deployment Configuration

- Built for GitHub Pages deployment with `gh-pages` package
- Uses HashRouter for client-side routing compatibility
- Vite path alias `@/*` maps to `src/*` for clean imports
- Images stored in `public/images/` directory

## Content Management

To update portfolio content:

1. **Projects**: Edit JSON files in `src/data/` following the existing schema with id, title, description, image, and link fields
2. **Personal Info**: Update contact details and links in `App.tsx` header section  
3. **Experience**: Modify timeline data in `ExperienceTimeline.tsx` components
4. **Images**: Add to `public/images/` and reference with `/images/` paths

## Technical Notes

- TypeScript strict mode enabled with path mapping
- Vite handles fast HMR and optimized production builds  
- No testing framework currently configured
- ESM modules with top-level imports for JSON data
- Responsive breakpoint at 768px for mobile/desktop switching
# Portfolio Project

## Info

A modern single-page portfolio website built with React, Vite, TypeScript, and Tailwind CSS. This project is designed to showcase your work, skills, and contact information in a clean and interactive way.

## Requirements

- Node.js (v16 or higher recommended)
- npm (v7 or higher)

## Features

- Fast and modern single-page application
- Responsive design for all devices
- Animated UI components
- Easy project and skill management
- Deployable to GitHub Pages

## Quick Start

```sh
# Clone the repository
git clone https://github.com/katananame/portfolio-new.git

cd portfolio-new

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── DecryptedText.tsx
│   ├── GlareHover.tsx
│   ├── GlareHover.css
│   ├── LiquidChrome.tsx
│   ├── LiquidChrome.css
│   ├── ProjectCard.tsx
│   ├── ShinyText.tsx
│   ├── ShinyText.css
│   ├── SkillsMarquee.tsx
│   ├── SpotlightCard.tsx
│   ├── SpotlightCard.css
│   ├── SplitText.tsx
│   └── ui/
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── index.css
├── App.tsx
├── App.css
├── main.tsx
└── vite-env.d.ts
```

## Technologies
- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui

## Deploy to GitHub Pages

1. Make sure your `package.json` contains the correct username and repository name:
   ```json
   "homepage": "https://katananame.github.io/portfolio-v2"
   ```
2. In `vite.config.js` set:
   ```js
   base: '/portfolio-new/',
   ```
3. Push your project to GitHub. Deployment will happen automatically via GitHub Actions (see `.github/workflows/deploy.yml`).

---

**Author:** [katananame](https://github.com/katananame)

**Use your preferred IDE**

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

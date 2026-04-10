Google Keep Clone (React + Vite)
Welcome to my submission for the JR Intern at Google assignment! This project is a high-fidelity recreation of the Google Keep homepage, built with a focus on clean UI, responsiveness, and functional innovation.

Overview
This application is a fully functional note-taking tool that allows users to capture ideas, organize them with color-coding, and prioritize them using a pinning system. It features a modern, responsive "Masonry" layout that adapts to any screen size—from professional engineer monitors to mobile devices.

Key Features
1. Base Functionality (The Essentials)
Clean Keep UI: A faithful recreation of the Google Keep navigation and note-taking interface.

Dynamic Note Creation: Expandable input area that stays out of the way until you're ready to write.

Masonry Grid: Notes stack efficiently in a staggered grid, just like the original app.

Local Storage Persistence: Your notes are saved to your browser’s local storage, so they won't disappear when you refresh the page.

2. Custom Innovation (No-AI Feature)
Color-Coding: Every note can be assigned a custom background color from the classic Keep palette to help with visual organization.

3. AI-Assisted Upgrades (Cursor Engineering)
Dark Mode: A fully integrated dark theme that saves your preference and protects your eyes during late-night coding sessions.

Pinning System: Prioritize important notes by pinning them to the top. The app automatically creates a "Pinned" and "Others" section when a pin is active.

Tech Stack
Frontend: React.js

Build Tool: Vite (Fast HMR)

Styling: Tailwind CSS (v4) for utility-first responsive design

Icons: Lucide-react for crisp, scalable vector icons

Getting Started
Prerequisites
Make sure you have Node.js installed on your machine.

Installation
Clone the project:

Bash
# Open your terminal and navigate to your project folder
cd google-keep-clone
Install dependencies:

Bash
npm install
Run the development server:

Bash
npm run dev
View the app:
Open http://localhost:5173 in your browser.

Project Structure
src/App.jsx: The main controller handling state logic, dark mode, and local storage.

src/components/Header.jsx: Navigation bar and theme toggle.

src/components/CreateArea.jsx: Logic for expanding and adding new notes.

src/components/Note.jsx: Individual note component with pin, color, and delete functions.

Created by Mukhethwa Ravele



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

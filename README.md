# Vishal.dev — Portfolio Website

This is a modern, developer-focused portfolio website built using React and Tailwind CSS.  
The project is designed to showcase **not only projects**, but also **how I think, structure, and build interfaces** in real-world scenarios.


Live Demo:  
https://vishal-dev-portfolio-psi.vercel.app/

---

## Purpose of This Portfolio

Most portfolios list tools and screenshots.  
This portfolio is built to explain:

- how I approach frontend and backend problems
- how I structure UI and components
- how I make technical and design decisions
- how I adapt content for different audiences

The site is intentionally designed to communicate **thinking**, not just output.

---

## Key Concept — Recruiter / Developer Mode

The portfolio supports two viewing modes:

### Recruiter Mode
- High-level overview
- Clear summaries
- Easy-to-scan skills and projects

### Developer Mode
- Detailed explanations
- Problem → Approach → Learnings
- Architecture and technical decisions

This helps present the same work differently based on who is viewing it.

---

## Tech Stack

- React
- Tailwind CSS
- Framer Motion (subtle animations)
- Vite
- Context API
- JavaScript (ES6+)
- Vercel (deployment)

---

## Major Sections

### Hero
- Clear positioning statement
- Mode-based description

### Architecture & Decisions
- Explains how I think when building interfaces
- Covers problem understanding, UI structure, simplicity, and iteration
- Editorial-style layout focused on clarity

### Skills
- Organized by capability, not just tools
- Different views for recruiter and developer modes
- Frontend, Backend, and Tools separated cleanly

### Projects
- Categorized into Frontend, Backend, and In-progress
- Each project supports:
  - Recruiter mode → short description
  - Developer mode → Problem, Approach, Learnings
- Live links and GitHub repositories included where applicable
- Client projects clearly marked with private repositories

### Contact
- Clean and simple contact section
- Direct email and phone visibility
- UI-only form for future backend integration

---

## Project Structure

```txt
src/
│
├── assets/
│   └── Data/
│       ├── projectsdata.js
│       └── skillsdata.js
│
├── Components/
│   ├── Layout/
│   ├── Projects/
│   ├── Skills/
│   └── UI/
│
├── Context/
│   └── ModeContext.jsx
│
├── sections/
│   ├── Hero/
│   ├── Architecture/
│   ├── Skills/
│   ├── Projects/
│   └── Contact/
│
└── App.jsx
```

## Challenges Faced
#Some technical challenges encountered while building this portfolio include:
- Implementing a mode-based UI (Recruiter / Developer).
   - Managing conditional rendering and shared components without duplicating markup or logic across modes.
- Handling layout consistency with a fixed navbar
  -Ensuring correct scroll behavior, anchor positioning, and vertical centering across sections with a fixed header.
- Handling layout consistency with a fixed navbar
  -Ensuring correct scroll behavior, anchor positioning, and vertical centering across sections with a fixed header.
- Designing reusable data-driven components
  -Structuring skills and projects data so the same UI components could render different content shapes reliably without runtime errors.
- Balancing Framer Motion animations with performance
  - Applying entrance and hover animations selectively to avoid unnecessary re-renders or visual noise.

These challenges strengthened my understanding of component design, layout systems, state-driven UI, and maintainable frontend architecture.











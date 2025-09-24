# Simple V-Card Landing Page

A modern, responsive v-card landing page built with HTML, CSS, and JavaScript. Features automatic dark/light mode detection with manual toggle, smooth animations, and a clean, professional design.

## Features

- **Professional V-Card Layout**: Clean, centered design with profile picture, contact info, and professional details
- **Dark/Light Mode Toggle**: Automatic system theme detection with manual override toggle
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Modern Animations**: Smooth transitions, hover effects, and entrance animations
- **Interactive Elements**: Hover effects on tags and contact items with subtle animations
- **Accessibility**: Reduced motion support for users who prefer minimal animations
- **Performance Optimized**: Lazy loading, efficient CSS variables, and optimized JavaScript

## Sections

- **Profile**: Name, title, and professional photo
- **Contact**: Email and LinkedIn with clickable links
- **Current Work**: Job title, company, and role description
- **Education**: Degree, institution, and specialization details
- **Skills**: Interactive tags showing technical expertise ("Ask Me About")
- **Passion & Vision**: Personal statement and professional philosophy

## Usage

Simply open `index.html` in a web browser or serve it through any HTTP server:

```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Customization

Edit the content in `index.html` to personalize:
- Replace placeholder name, email, and LinkedIn URL
- Update job title, company, and descriptions
- Modify skill tags in the "Ask Me About" section
- Customize the passion/vision statement
- Replace the placeholder profile image URL

The design uses CSS custom properties for easy theme customization in `styles.css`.

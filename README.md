# Final Assignment: Multipage Developer Portfolio

This repository contains the final project for Week 8, demonstrating the planning, coding, organization, and deployment of a responsive, multi-page static website.

The website serves as a Personal Developer Portfolio to showcase core front-end skills, including semantic HTML5 structure, responsive CSS3 design, and client-side JavaScript interactivity.

## Live Website URL

The project has been successfully deployed and is accessible at the following URL:

**LIVEURLPLACEHOLDER:** Insert your GitHub Pages/Netlify/Vercel URL here

## Project Structure and Planning (Part 1 & 3)

The site is built around a clear, navigable structure consisting of three core pages, utilizing industry standard organization practices.

### File Organization (Best Practice)

The codebase is organized into dedicated directories for maximum maintainability:

```
/root
├── index.html          (Home Page)
├── projects.html       (Projects Showcase)
├── contact.html        (Contact Form & Validation)
├── README.md           (This documentation)
├── /css                (External Stylesheets)
│   └── style.css       (All core styles and media queries)
├── /js                 (External Scripts)
│   └── script.js       (All JavaScript interactivity)
└── /images             (All image assets)
```

## Getting Started (Running Locally)

To run and view this project on your local machine, follow these simple steps:

### Clone the Repository:

```bash
git clone git@github.com:IsaacDev14/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git
```

### Navigate to the Project Directory:

```bash
cd git@github.com:IsaacDev14/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl.git
```

### Open the Index File:

Locate the `index.html` file in the root of the project folder and open it using any modern web browser (e.g., Chrome, Firefox, Safari).

Alternatively, you can use a local web server (like VS Code's Live Server extension) for a better development experience.

## Page Outlines

### Home (index.html)

* **Purpose:** Introduction and overview of skills.
* **Key Content:** Hero section, skills grid, and mission statement.
* **Interactivity Focus:** Subtle CSS hover effects and layout transitions.

### Projects (projects.html)

* **Purpose:** Showcase of relevant work.
* **Key Content:** Grid display of project cards, descriptions, and technology tags.
* **Interactivity Focus:** Consistent header/footer structure across all pages.

### Contact (contact.html)

* **Purpose:** Method for potential clients/employers to connect.
* **Key Content:** Detailed contact form.
* **Interactivity Focus:** JavaScript form validation.

## Technical Implementation (Part 2)

### HTML5 for Semantic Structure

All pages use modern HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) to ensure accessibility and clear document outlines.

### Responsive CSS3 Styling

* **Mobile-First Approach:** Base styling in `css/style.css` is optimized for small screens first.
* **Layout:** CSS Flexbox and Grid were used extensively to create flexible layouts.
* **Media Queries:** A primary breakpoint (768px) adjusts navigation and grid layouts between mobile and desktop views.

### JavaScript Interactivity

The `js/script.js` file handles two main interactive requirements:

* **Form Validation:** Prevents submission until required fields (Name, Email, Subject, Message) meet criteria (including regex email validation).
* **Mobile Menu Toggle:** Click listener on the hamburger icon toggles navigation links on smaller screens for smooth mobile UX.

## Outcome

* Clarity and thoroughness of planning documentation
* Proper use of HTML5, CSS, and JavaScript across multiple pages
* Responsive and accessible design
* Clean, well-organized, and commented code
* Successful live deployment with a working link
* Evidence of following best practices

# FOSSEE Workshop Booking - UI/UX Redesign

A modern, mobile-first redesign of the FOSSEE Workshop Booking portal using React.

##  Original Repository
https://github.com/FOSSEE/workshop_booking

---

##  Setup Instructions

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation
```bash
git clone https://github.com/sangeetakumari2823-pixel/fossee-workshop-ui.git
cd fossee-workshop-ui
npm install
npm start
```
Open http://localhost:3000 in your browser.

---

##  Design Principles

**1. Mobile-First Design**
The original site was not optimized for mobile. Since students primarily access this on phones, every component was designed for small screens first and then scaled up for desktop.

**2. Visual Hierarchy**
Clear typographic scale, consistent spacing, and color contrast guide the user's eye naturally from the most important content to supporting details.

**3. Accessibility**
Semantic HTML elements, sufficient color contrast ratios, and large tap targets (minimum 48px) ensure the site is usable by everyone including users with disabilities.

**4. Consistency**
A single color system (primary blue #1a73e8, dark #1a1a2e) is used throughout, creating a cohesive and professional look.

---

##  Responsiveness

- Used CSS Flexbox with `flexWrap: wrap` so layouts adapt naturally on all screen sizes
- Navbar collapses into a hamburger menu on mobile
- Cards stack vertically on small screens and form grids on larger screens
- Minimum font size of 14px for readability on small displays
- All buttons have enough padding for comfortable touch interaction

---

##  Trade-offs

- **No external CSS frameworks**: Chose plain CSS-in-JS (inline styles) to keep bundle size minimal and avoid loading Bootstrap or Tailwind. Trade-off is slightly more verbose code.
- **No animations**: Skipped heavy animation libraries to maintain fast load times. Simple hover effects only.
- **Static data**: Workshop data is hardcoded as the backend is Django-based. In production this would connect via REST API.

---

##  Most Challenging Part

The most challenging part was ensuring the navigation worked well on both mobile and desktop without using any external UI library. I implemented a hamburger menu using React's useState hook to toggle the mobile menu open and closed, while keeping the desktop layout unchanged.

---

## Screenshots

### Before (Original Django Site)
*Minimal, unstyled, not mobile-friendly*

### After (React Redesign)

**Home Page**
- Modern hero section with gradient background
- Feature cards with icons
- Workshop preview cards
- Call-to-action section

**Workshop List**
- Search functionality
- Category filter buttons
- Responsive card grid

**Login & Register**
- Clean form design
- Proper validation feedback

---

##  Project Structure
src/
  components/
    Navbar.js      - Responsive navbar with hamburger menu
    Footer.js      - Footer with links and contact info
  pages/
    Home.js              - Landing page with hero and features
    Login.js             - Login form with validation
    Register.js          - Registration form
    WorkshopList.js      - Browse workshops with search and filter
    WorkshopDetails.js   - Individual workshop detail page
    ProposeWorkshop.js   - Form to propose a workshop
    ViewProfile.js       - User profile page
  App.js           - Main app with routing
  App.css          - Global reset and base styles
# 🔮 Astrology Landing Page – Developer Assignment

A responsive and accessible landing page built with **Next.js**, **Tailwind CSS**, and **TypeScript**, based on a Figma design. This project demonstrates modular component structure, mock API integration, responsive design, and best practices in frontend development.

🌐 **Live Demo:** [https://astrology-landing-ten.vercel.app/](https://astrology-landing-ten.vercel.app/)

---

## 📌 Objective

Convert the given [Figma design](https://www.figma.com/design/GojA2PHMnoJv0TWEPcRvQp/Untitled?t=Qdb3oyl03JjBKGiM-0) into a modern landing page using:

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS** (ShadCN UI components preferred)
- **lucide-react** icons
- **Carousel library:** `keen-slider` or `swiper.js`

---

## ⚙️ Tech Stack

| Tech             | Purpose                            |
|------------------|------------------------------------|
| Next.js (App Router) | Framework for routing and SSR      |
| TypeScript       | Static typing                      |
| Tailwind CSS     | Styling with utility-first classes |
| ShadCN UI        | Pre-styled components (where used) |
| lucide-react     | Icon library                       |
| Swiper.js        | Carousel (Testimonials section)    |

---

## 📁 Folder Structure

src/
│
├── components/
│ └── landing/
│ ├── Hero.tsx
│ ├── Stats.tsx
│ ├── Services.tsx
│ ├── Testimonials.tsx
│ └── Offer.tsx
│
├── pages/
│ ├── api/
│ │ ├── hero.ts
│ │ └── testimonials.ts
│ └── index.tsx
│
├── styles/
│ └── globals.css

csharp
Copy code

---

## 📦 API Routes

### 1. `/api/hero`

**Purpose:** Serve dynamic content for the Hero section.

#### Sample Response:
```json
{
  "title": "Unlock Your Cosmic Destiny",
  "subtitle": "Book sessions with expert astrologers and discover your true path.",
  "ctaText": "Book Now",
  "ctaLink": "/book",
  "imageUrl": "/images/astrologer.png",
  "badges": [
    { "label": "10k+ Sessions", "icon": "Star" },
    { "label": "Rated 4.9/5", "icon": "ThumbsUp" },
    { "label": "Verified Expert", "icon": "ShieldCheck" }
  ]
}
2. /api/testimonials
Purpose: Provide testimonials for the Swiper carousel.

Sample Response:
json
Copy code
[
  {
    "name": "Sophia Lee",
    "feedback": "The session was life-changing! I got so much clarity about my career path.",
    "imageUrl": "/images/client1.jpg"
  },
  {
    "name": "David Kim",
    "feedback": "Accurate predictions and very professional. Highly recommended.",
    "imageUrl": "/images/client2.jpg"
  },
  {
    "name": "Emma Watson",
    "feedback": "I feel more confident about my future now. Amazing experience!",
    "imageUrl": "/images/client3.jpg"
  }
]
🎨 Sections Implemented
✅ 1. Hero Section (API-Driven)
Dynamic title, subtitle, CTA, astrologer image

Floating animated icons (moon, stars, sun)

Gradient and themed background

Responsive, accessible, animated

✅ 2. Client Testimonials (API + Swiper)
Carousel with autoplay

Fully responsive (1-3 per slide)

Client name, photo, feedback

Navigation arrows included

✅ 3. Additional Static Sections
Statistics: Total sessions, experience, etc.

Services: Card grid with icon, title, description

Offer: CTA + countdown timer

🧠 Key Features
🎯 Pixel-perfect Figma implementation

⚙️ API-driven UI (Hero & Testimonials)

📱 Responsive: mobile, tablet, desktop

🌙 Dark mode support

🧩 Modular & Reusable components

♿ Accessible (semantic HTML, ARIA, alt tags)

💅 No hardcoded colors, using Tailwind tokens (bg-primary, text-muted, etc.)

🛠️ Getting Started
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/astrology-landing.git
cd astrology-landing
2. Install dependencies
bash
Copy code
npm install
3. Run the development server
bash
Copy code
npm run dev
Visit http://localhost:3000 to view the app locally.

🧪 Testing the API
Visit http://localhost:3000/api/hero to test the Hero API.

Visit http://localhost:3000/api/testimonials to test the Testimonials API.

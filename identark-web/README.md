# IdentArk — Modern Identity Security Website

A sleek, modern website for IdentArk, an IAM consultancy serving India's SMBs. Features 3D animations, smooth scroll effects, and a minimalistic design.

## 🎨 Design Features

- **3D Animated Background** — Three.js particle system with smooth animations
- **Smooth Scroll Effects** — Intersection Observer-based fade-in animations
- **Responsive Design** — Mobile-first approach, works on all devices
- **Modern Typography** — Clean, minimalistic typography with Space Mono and Inter fonts
- **Interactive Elements** — Hover effects, button ripples, and smooth transitions
- **Dark Theme** — Modern dark color palette with cyan accent colors
- **Fast Loading** — No dependencies except Three.js, minimal CSS/JS

## 📁 Project Structure

```
identark-web/
├── index.html           # Home page
├── style.css           # Global styles & animations
├── script.js           # Three.js setup & scroll animations
│
├── about/
│   └── index.html      # About page (team, values, story)
│
├── contact/
│   └── index.html      # Contact page (form, contact info, FAQs)
│
└── industries/
    └── index.html      # Industries page (industry solutions, case studies)
```

## 🚀 Quick Start

1. **Clone or extract** the project
2. **Open** `index.html` in a browser
3. **That's it!** No build process or dependencies needed

### For Local Development

```bash
# Option 1: Use Python's built-in server
python3 -m http.server 8000

# Option 2: Use Node's http-server
npx http-server

# Then visit: http://localhost:8000
```

## 🎯 Features

### Pages

- **Home** — Hero section, services overview, process timeline, stats, CTA
- **About** — Team, company story, values, mission
- **Contact** — Contact form, email, LinkedIn, FAQs
- **Industries** — Fintech, healthcare, e-commerce, manufacturing, banking, edtech solutions with case studies

### Components

- Responsive navigation with mobile hamburger menu
- Animated hero section with floating cards
- Service cards with hover effects
- Process timeline with step numbers
- Statistics section with counter animations
- Contact form with validation
- FAQ accordion
- 3D particle background
- Smooth scroll animations
- Mouse parallax effects

## 🎨 Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary: #00d9ff;           /* Cyan accent */
  --primary-dark: #0099cc;      /* Darker cyan */
  --secondary: #1a1a2e;         /* Dark blue */
  --background: #0f0f1e;        /* Near-black */
  --surface: #16213e;           /* Dark surface */
  --accent: #ff006e;            /* Pink accent */
}
```

### Content

Replace text content directly in HTML files:
- Service descriptions in `index.html`
- Team information in `about/index.html`
- Contact details in `contact/index.html`
- Industry solutions in `industries/index.html`

### Fonts

Currently using:
- **Display**: Space Mono (monospace for headings)
- **Body**: Inter (clean sans-serif)

To change, update the Google Fonts link in the `<head>` section.

## 🔧 Customization Examples

### Adding a New Service

In `index.html`, add to `.services-grid`:

```html
<div class="service-card">
  <div class="service-icon">🎯</div>
  <h3>Your Service</h3>
  <p>Service description here...</p>
  <span class="service-tag">TAG</span>
</div>
```

### Changing Colors

1. Update `:root` CSS variables in `style.css`
2. The entire site will adapt automatically

### Adding More Industries

In `industries/index.html`, add to `.industries-grid`:

```html
<div class="industry-card">
  <div class="industry-icon">📊</div>
  <h3>Industry Name</h3>
  <p>Industry description...</p>
  <!-- ... -->
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px (default)
- **Tablet**: 768px
- **Mobile**: 480px

All layouts adapt automatically using CSS Grid and media queries.

## 🔗 Navigation

- Homepage: `/`
- About: `/about/`
- Contact: `/contact/`
- Industries: `/industries/`

All internal links use smooth scrolling and proper relative paths for easy deployment.

## 🚀 Deployment

### GitHub Pages

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set branch to `main` and folder to `/` root
4. Visit `https://yourusername.github.io/identark-web`

### Netlify

1. Drag & drop the `identark-web` folder
2. Auto-deploys on updates
3. Custom domain support

### Traditional Hosting

1. Upload all files to your server
2. Ensure `.html` files are served with correct MIME types
3. No server-side processing needed

## 🛠️ Technical Stack

- **HTML5** — Semantic markup
- **CSS3** — Modern CSS with animations, Grid, Flexbox
- **JavaScript (Vanilla)** — No frameworks needed
- **Three.js** — 3D graphics library (CDN)
- **Responsive Design** — Mobile-first, no Bootstrap needed

## 📊 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

3D features require WebGL support.

## 🎬 Animation Details

### Scroll Animations

- Fade-in animations trigger at 10% threshold
- 0.8s animation duration with easing
- Smooth parallax on hero section

### 3D Effects

- Particle system rotates continuously
- 200 particles for optimal performance
- Vertex colors for dynamic appearance

### Hover Effects

- Service cards lift on hover (translateY)
- Smooth border color transitions
- Background glow effects on interaction

## 📝 SEO & Meta Tags

All pages include:
- Unique titles and descriptions
- Open Graph tags for social sharing
- Responsive viewport meta tags
- Semantic HTML structure

## 🎯 Performance

- **No build process** — Direct browser serving
- **Minimal dependencies** — Only Three.js from CDN
- **Optimized animations** — RequestAnimationFrame for 60fps
- **Lazy animations** — Only run when in viewport
- **CSS animations** — GPU-accelerated

## 📄 License

Free to use and modify for IdentArk. Update company details as needed.

## 📧 Contact & Support

For modifications or custom features:
- Email: hello@identark.com
- LinkedIn: IdentArk

---

**Built with Arpit for IdentArk | India's Boutique IAM Consultancy**

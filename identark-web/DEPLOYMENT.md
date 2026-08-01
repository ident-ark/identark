# 🚀 IdentArk Website Deployment Guide

## Quick Deployment Options

### 1️⃣ Netlify (Recommended - Easiest)

**Time:** ~2 minutes

1. Go to [netlify.com](https://netlify.com)
2. Sign up or log in
3. Drag & drop the `identark-web` folder into Netlify
4. Your site is live! 🎉

**Custom Domain:**
- Add your domain in Site settings → Domain management
- Update DNS records as instructed

### 2️⃣ GitHub Pages (Free Hosting)

**Time:** ~5 minutes

1. Create a GitHub repository named `identark-web`
2. Upload all files from `identark-web/` folder
3. Go to Settings → Pages
4. Select `main` branch, `/ (root)` folder
5. Your site is live at `https://yourusername.github.io/identark-web`

**Custom Domain:**
- Add CNAME file with your domain
- Update DNS to point to GitHub Pages

### 3️⃣ Vercel (Great Alternative)

**Time:** ~3 minutes

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import the GitHub repository
4. Auto-deploys on every push

### 4️⃣ Traditional Hosting (BlueHost, GoDaddy, etc.)

**Time:** ~10 minutes

1. Download all files from `identark-web/` folder
2. FTP/SFTP into your hosting account
3. Upload files to `public_html/` folder
4. Visit your domain

**Important:** Ensure your hosting supports:
- Static HTML/CSS/JS files
- Correct MIME types for `.js` files
- HTTPS (SSL certificate)

### 5️⃣ AWS S3 + CloudFront

**Time:** ~15 minutes

1. Create S3 bucket
2. Enable static website hosting
3. Upload all files
4. Create CloudFront distribution
5. Point domain via Route 53

---

## Pre-Deployment Checklist

- [ ] Update contact email (search for `hello@identark.com`)
- [ ] Update LinkedIn URL (search for `linkedin.com`)
- [ ] Update company name if different
- [ ] Add your logo (replace with actual image)
- [ ] Test on mobile & desktop
- [ ] Check all internal links work
- [ ] Test forms functionality
- [ ] Verify 3D background loads
- [ ] Update meta descriptions
- [ ] Set up analytics (Google Analytics, Mixpanel)

---

## Customization Before Deploy

### 1. Update Content

**File:** `index.html`
```html
<!-- Update company name -->
<span class="logo-text">YourCompany</span>

<!-- Update services -->
<h3>Your Service Name</h3>
<p>Your service description...</p>
```

**File:** `about/index.html`
```html
<!-- Update team info, company story -->
<h1>About YourCompany</h1>
```

**File:** `contact/index.html`
```html
<!-- Update contact info -->
<p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
```

### 2. Update Colors

**File:** `style.css`
```css
:root {
  --primary: #00d9ff;        /* Change to your brand color */
  --primary-dark: #0099cc;   /* Darker shade */
  --accent: #ff006e;         /* Accent color */
}
```

### 3. Update Metadata

**All HTML files:**
```html
<title>Your Company — Your Tagline</title>
<meta name="description" content="Your company description">
```

### 4. Set Up Google Analytics

Add to `<head>` section in all HTML files:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

---

## Post-Deployment

### 1. Test Everything

```
✓ All pages load
✓ 3D background renders
✓ Animations smooth
✓ Forms work
✓ Mobile layout responsive
✓ Links all functional
```

### 2. Submit to Search Engines

**Google Search Console:**
1. Go to [google.com/webmasters](https://google.com/webmasters)
2. Add property with your domain
3. Verify ownership
4. Submit sitemap (`/sitemap.xml`)

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://bing.com/webmasters)
2. Add your site
3. Submit sitemap

### 3. Set Up Email

Many hosting providers include email. Configure:
- Email address: `hello@yourcompany.com`
- Connect to your website contact form
- Set up email forwarding

### 4. Monitor Performance

Use tools like:
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

---

## SSL/HTTPS Setup

**Important:** All modern sites should use HTTPS

- **Netlify/Vercel:** Automatic (free SSL)
- **GitHub Pages:** Automatic (free SSL)
- **Traditional Hosting:** 
  - Most providers offer free Let's Encrypt SSL
  - Or purchase SSL certificate
  - Enable "Always use HTTPS" in settings

---

## Troubleshooting

### 3D Background Not Showing

**Problem:** Canvas appears blank
**Solution:** 
- Check browser console for errors
- Ensure WebGL is enabled
- Try different browser
- Clear cache and refresh

### Forms Not Working

**Problem:** Submit button does nothing
**Solution:**
- Check browser console
- Ensure JavaScript is enabled
- Update email address in script
- Consider using Formspree or similar service

### Styles Look Off

**Problem:** Colors/layout broken
**Solution:**
- Clear browser cache
- Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)
- Check CSS file is loaded (check Network tab)
- Verify relative paths are correct

### 404 Errors on Subpages

**Problem:** About/Contact/Industries pages not found
**Solution:**
- Check folder structure matches
- Verify paths: `/about/`, `/contact/`, `/industries/`
- Ensure index.html in each subfolder
- Check server rewrites if needed

---

## Domain Setup

### Pointing Domain to Netlify

1. Get Netlify nameservers from Site settings
2. Update domain registrar DNS settings
3. Point nameservers to Netlify
4. Wait 24-48 hours for DNS propagation

### Pointing Domain to GitHub Pages

1. Create CNAME file in root with your domain:
```
yourcompany.com
```

2. Update domain registrar:
- Add CNAME: `www.yourcompany.com` → `yourusername.github.io`
- Or add A records for GitHub's IP addresses

---

## File Structure Final Check

Before deploying, ensure your folder has:

```
identark-web/
├── index.html              ✓
├── style.css              ✓
├── script.js              ✓
├── README.md              ✓
├── sitemap.xml            ✓
├── robots.txt             ✓
├── .gitignore             ✓
│
├── about/
│   └── index.html         ✓
│
├── contact/
│   └── index.html         ✓
│
└── industries/
    └── index.html         ✓
```

---

## Support & Questions

- **Netlify Help:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages:** [pages.github.com](https://pages.github.com)
- **DNS Issues:** Contact your domain registrar
- **Code Help:** Check script.js for form handling configuration

---

## Next Steps

After deployment:

1. ✅ Test everything thoroughly
2. ✅ Set up analytics
3. ✅ Add business card/social links
4. ✅ Set up email from domain
5. ✅ Consider adding blog section
6. ✅ Plan content updates
7. ✅ Monitor metrics

---

**🎉 Congratulations! Your site is live!**


# Rivers & Roses Notary - Project Files Guide

## 📁 File Structure

```
rivers-roses-notary/
├── index.html              # Current "Coming Soon" page (LIVE)
├── home.html              # New full website (PREVIEW - rename to index.html when ready)
├── SETUP.md               # Complete setup instructions for forms, booking, payments
├── PROJECT-FILES.md       # This file - explains what each file does
│
├── assets/
│   ├── css/
│   │   ├── styles.css     # Base styles (used by both pages)
│   │   └── home.css       # Additional styles for full site
│   │
│   ├── js/
│   │   └── main.js        # JavaScript for navigation, forms, interactions
│   │
│   └── images/
│       ├── logo.png       # Main logo
│       ├── favicon.ico    # Browser favicon
│       ├── favicon-32x32.png
│       ├── favicon-192x192.png
│       ├── apple-touch-icon.png
│       └── favicon-512x512.png
```

---

## 📄 File Descriptions

### HTML Files

#### `index.html` (Current Live Site)
- **Status**: LIVE - Currently displayed to visitors
- **Purpose**: "Coming Soon" landing page
- **Keep or Replace**: Keep as backup, rename to `coming-soon.html` when launching
- **Features**:
  - Elegant animated landing page
  - Logo and brand introduction
  - Email contact link
  - Mobile responsive

#### `home.html` (New Full Site)
- **Status**: PREVIEW - Ready to preview/test
- **Purpose**: Complete notary services website
- **When to Use**: Rename to `index.html` when ready to launch
- **Sections**:
  1. Navigation bar (sticky)
  2. Hero section
  3. Services grid (6 services with pricing)
  4. How It Works (3-step process)
  5. Booking section (Calendly integration)
  6. Contact form (Formspree integration)
  7. Footer
  8. Back-to-top button

---

### CSS Files

#### `assets/css/styles.css`
- **Used by**: Both `index.html` and `home.html`
- **Purpose**: Base styles and animations
- **Contains**:
  - Reset and base styles
  - Color variables (green, gold, rose)
  - Typography (Playfair Display, Jost)
  - Background textures
  - Top gold bar
  - Logo and brand styles
  - Fade-up animations
  - Mobile responsive rules

#### `assets/css/home.css`
- **Used by**: `home.html` only
- **Purpose**: Additional styles for full website
- **Contains**:
  - Navigation bar styles
  - Services grid layout
  - How It Works section
  - Booking calendar area
  - Contact form styles
  - Footer styles
  - Mobile menu toggle
  - Responsive breakpoints
  - Hover effects and transitions

---

### JavaScript Files

#### `assets/js/main.js`
- **Used by**: `home.html`
- **Purpose**: Interactive functionality
- **Features**:
  - Smooth scrolling navigation
  - Mobile menu toggle
  - Sticky navbar on scroll
  - Back-to-top button
  - Active navigation highlighting
  - Form validation
  - Scroll animations
  - Contact form handling
- **Integration Notes**:
  - Calendly setup instructions included
  - Formspree ready
  - No external dependencies (vanilla JavaScript)

---

### Documentation Files

#### `SETUP.md`
- **Purpose**: Complete setup guide for third-party services
- **Covers**:
  - Formspree (contact form)
  - Calendly (booking)
  - Stripe (payments)
  - Testing procedures
  - Launch checklist

#### `PROJECT-FILES.md`
- **Purpose**: This file - explains project structure

---

## 🚀 How to Preview the New Site

### Option 1: Direct File Open
```bash
open home.html
```
Opens in your default browser. Some features (like forms) may need a local server.

### Option 2: Local Server (Recommended)
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000/home.html
```

### Option 3: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `home.html`
3. Select "Open with Live Server"

---

## 🔄 How to Launch (Go Live)

When you're ready to replace the coming soon page:

### Step 1: Backup Current Site
```bash
mv index.html coming-soon.html
```

### Step 2: Activate New Site
```bash
mv home.html index.html
```

### Step 3: Test
Visit your site and test all functionality

### Step 4: Deploy (if needed)
```bash
git add .
git commit -m "feat: launch full notary services site"
git push
```

---

## ⚙️ Configuration Required

Before launching, you need to configure:

### 1. Formspree (Contact Form)
- [ ] Sign up at formspree.io
- [ ] Create form and get form ID
- [ ] Update `home.html` line ~339: Replace `YOUR_FORM_ID`

### 2. Calendly (Booking)
- [ ] Sign up at calendly.com
- [ ] Set up availability (M-Th evenings)
- [ ] Get Calendly link
- [ ] Add script to `home.html` before `</body>`
- [ ] Replace placeholder div with Calendly widget

### 3. Stripe (Optional - Payments)
- [ ] Sign up at stripe.com
- [ ] Create payment links for each service
- [ ] Add payment buttons to service cards (optional)

**See SETUP.md for detailed instructions!**

---

## 🎨 Customization Guide

### Change Colors
Edit `assets/css/home.css` and search for:
- `#1f3d2e` → Dark green
- `#b8955a` → Gold
- `#a8324a` → Rose/burgundy
- `#faf7f2` → Cream

### Update Services/Pricing
Edit `home.html`:
- Search for "services-grid"
- Update service cards (title, description, price)

### Change Availability
Edit `home.html`:
- Search for "availability-item"
- Update days and times

### Update Contact Email
Current email: `info@riversandrosesnotary.com`
- Update in `home.html` (multiple locations)
- Update in Formspree settings

---

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:
- **768px** - Tablet (menu becomes hamburger)
- **480px** - Mobile (adjusted spacing)

Tested on:
- Desktop (1920px, 1440px, 1024px)
- Tablet (768px, iPad)
- Mobile (iPhone 12, iPhone SE, Android)

---

## 🔍 SEO Features Included

- [x] Meta descriptions
- [x] Open Graph tags for social sharing
- [x] Semantic HTML structure
- [x] Fast loading (minimal dependencies)
- [x] Mobile-friendly (Google requirement)
- [x] Alt text on images
- [x] Proper heading hierarchy

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, Grid, animations
- **JavaScript (Vanilla)** - No frameworks needed
- **Google Fonts** - Playfair Display, Jost
- **Formspree** - Form handling
- **Calendly** - Appointment booking
- **Stripe** - Payment processing (optional)

---

## ✅ Pre-Launch Checklist

- [ ] Preview `home.html` in browser
- [ ] Test on mobile device
- [ ] Configure Formspree
- [ ] Configure Calendly
- [ ] Test contact form submission
- [ ] Test booking calendar
- [ ] Verify all links work
- [ ] Check spelling/grammar
- [ ] Optimize images (if needed)
- [ ] Update meta tags with actual domain
- [ ] Set up Stripe (optional)
- [ ] Backup `index.html` to `coming-soon.html`
- [ ] Rename `home.html` to `index.html`
- [ ] Deploy to production
- [ ] Test live site

---

## 📞 Need Help?

Refer to:
- `SETUP.md` - Third-party service setup
- `assets/js/main.js` - JavaScript implementation notes
- Browser DevTools Console - Check for errors

---

**Ready to launch! 🚀**

*Built with integrity and excellence.*

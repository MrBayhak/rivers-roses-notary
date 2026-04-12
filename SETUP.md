# Rivers & Roses Notary - Setup Guide

This guide will help you configure the website for full functionality including contact forms, booking, and payments.

---

## 📋 Table of Contents

1. [Contact Form Setup (Formspree)](#contact-form-setup)
2. [Booking Calendar Setup (Calendly)](#booking-calendar-setup)
3. [Payment Processing Setup (Stripe)](#payment-processing-setup)
4. [Going Live](#going-live)
5. [Testing](#testing)

---

## 📧 Contact Form Setup (Formspree)

### What is Formspree?
Formspree is a free service that handles form submissions and sends them to your email. No backend coding required!

### Setup Steps:

1. **Create Account**
   - Go to [https://formspree.io](https://formspree.io)
   - Sign up for a free account (50 submissions/month)

2. **Create New Form**
   - Click "New Form"
   - Name it "Rivers & Roses Contact Form"
   - Set email to: `info@riversandrosesnotary.com`

3. **Get Your Form ID**
   - After creating, you'll see an endpoint like: `https://formspree.io/f/xyzabc123`
   - Copy the ID part: `xyzabc123`

4. **Update home.html**
   - Open `home.html`
   - Find line with: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual ID
   - Example: `action="https://formspree.io/f/xyzabc123"`

5. **Configure Settings (Optional)**
   - In Formspree dashboard, you can:
     - Customize thank-you page
     - Set up email notifications
     - Add spam protection
     - View submission history

### Cost:
- **Free tier**: 50 submissions/month
- **Paid tier**: $10/month for unlimited submissions

---

## 📅 Booking Calendar Setup (Calendly)

### What is Calendly?
Calendly provides a professional booking calendar that syncs with your Google/Outlook calendar.

### Setup Steps:

1. **Create Account**
   - Go to [https://calendly.com](https://calendly.com)
   - Sign up for a free account

2. **Set Your Availability**
   - Click "Availability" in dashboard
   - Set custom hours:
     - Monday: 5:00 PM - 9:00 PM
     - Tuesday: 5:00 PM - 9:00 PM
     - Wednesday: 5:00 PM - 9:00 PM
     - Thursday: 5:00 PM - 9:00 PM
   - Set buffer times between appointments

3. **Create Event Type**
   - Click "Event Types" → "New Event Type"
   - Name: "Notary Appointment"
   - Duration: 30 minutes (adjust as needed)
   - Location: "Ask invitee" (for mobile vs office vs RON)

4. **Customize Booking Page**
   - Add custom questions:
     - "What type of notarization do you need?"
     - "How many signatures?"
     - "Preferred location/method?"
   - Upload your logo
   - Match your brand colors

5. **Get Your Calendly Link**
   - Copy your event link (e.g., `https://calendly.com/riversandrosesnotary/appointment`)

6. **Add Script to home.html**
   - Open `home.html`
   - Before `</body>` tag, add:
   ```html
   <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
   ```

7. **Replace Placeholder**
   - Find the `.calendly-placeholder` div in home.html (around line 289)
   - Replace it with:
   ```html
   <div class="calendly-inline-widget"
        data-url="YOUR_CALENDLY_LINK_HERE"
        style="min-width:320px;height:630px;">
   </div>
   ```
   - Replace `YOUR_CALENDLY_LINK_HERE` with your actual link

### Cost:
- **Free tier**: Basic features, unlimited bookings
- **Paid tier**: $10/month for advanced features (Stripe integration, text reminders)

---

## 💳 Payment Processing Setup (Stripe)

### What is Stripe?
Stripe is the most trusted payment processor. You can create payment links without any coding!

### Setup Steps:

1. **Create Account**
   - Go to [https://stripe.com](https://stripe.com)
   - Sign up for a business account
   - Complete verification (requires business info, bank account)

2. **Create Payment Links**

   In your Stripe Dashboard, create a Payment Link for each service:

   **General Notarization**
   - Amount: $15
   - Name: "General Notarization - Single Signature"
   - Description: "Acknowledgments, jurats, oaths, and affirmations"

   **Mobile Notary**
   - Amount: $50 (includes $15 + $35 travel)
   - Name: "Mobile Notary Service"
   - Description: "We come to you within 20 miles"

   **Remote Online Notarization (RON)**
   - Amount: $40
   - Name: "Remote Online Notarization"
   - Description: "Secure video notarization"

   **Loan Signing**
   - Amount: $125
   - Name: "Loan Signing Package"
   - Description: "Complete loan signing service"

3. **Get Payment Links**
   - Each payment link will look like: `https://buy.stripe.com/abc123xyz`
   - Save these links

4. **Add Payment Buttons (Optional)**

   You can add "Pay Now" buttons to service cards in `home.html`:
   ```html
   <a href="YOUR_STRIPE_PAYMENT_LINK" class="btn btn-primary" target="_blank">
     Pay Now
   </a>
   ```

5. **Test Mode**
   - Stripe starts in test mode - use test card: 4242 4242 4242 4242
   - When ready, toggle to live mode in dashboard

### Cost:
- **No monthly fee**
- **2.9% + $0.30 per transaction** (industry standard)

### Security:
- PCI compliant (Stripe handles all security)
- No credit card data touches your server
- Fraud protection included

---

## 🚀 Going Live

### Pre-Launch Checklist:

- [ ] Formspree form ID updated in `home.html`
- [ ] Calendly widget embedded in `home.html`
- [ ] Stripe payment links created (optional for launch)
- [ ] Test all forms and booking on desktop
- [ ] Test all forms and booking on mobile
- [ ] Verify email address `info@riversandrosesnotary.com` is working
- [ ] Update Open Graph image URL in `home.html` (line 9)
- [ ] Check all links in footer

### Launch Steps:

1. **Backup Current Site**
   ```bash
   mv index.html coming-soon.html
   ```

2. **Deploy New Site**
   ```bash
   mv home.html index.html
   ```

3. **Test Live Site**
   - Visit your site
   - Test contact form
   - Test booking (make test appointment)
   - Check all navigation

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: launch full notary services site"
   git push
   ```

---

## 🧪 Testing

### Local Testing:

1. **Open home.html in Browser**
   ```bash
   open home.html
   # or
   python3 -m http.server 8000
   # then visit http://localhost:8000/home.html
   ```

2. **Test Checklist**
   - [ ] All navigation links work
   - [ ] Smooth scrolling works
   - [ ] Mobile menu opens/closes
   - [ ] Contact form submits successfully
   - [ ] Calendly loads (if configured)
   - [ ] All sections display correctly
   - [ ] Responsive on mobile (use browser DevTools)
   - [ ] Back to top button appears on scroll

### Mobile Testing:

Test on actual devices:
- iPhone (Safari)
- Android (Chrome)
- iPad/Tablet

Or use browser DevTools:
- Chrome: F12 → Toggle Device Toolbar
- Test common sizes: iPhone 12, iPad, Desktop

---

## 🎨 Customization Tips

### Update Colors:
Edit `assets/css/home.css`:
- `#1f3d2e` - Dark green background
- `#b8955a` - Gold accent
- `#a8324a` - Rose/burgundy accent
- `#faf7f2` - Cream text

### Update Content:
Edit `home.html`:
- Service pricing
- Availability hours
- Service descriptions
- Contact information

### Add More Sections:
Follow the existing section structure in `home.html` and add corresponding styles in `home.css`.

---

## 📞 Support

If you need help:

1. **Formspree**: [formspree.io/help](https://formspree.io/help)
2. **Calendly**: [help.calendly.com](https://help.calendly.com)
3. **Stripe**: [support.stripe.com](https://support.stripe.com)

---

## 🔒 Security Notes

- Never commit API keys or secrets to Git
- Keep Stripe in test mode until verified
- Use HTTPS for your live domain (required for Stripe)
- Formspree has built-in spam protection
- Review submissions regularly

---

## 📝 Next Steps

After launching:

1. Set up Google Analytics (optional)
2. Add Google My Business listing
3. Set up email marketing (Mailchimp, etc.)
4. Add testimonials section
5. Create FAQ section
6. Add blog for SEO

---

**Built with ❤️ for Rivers & Roses Notary**

*Rooted in Integrity, Flowing with Excellence.*

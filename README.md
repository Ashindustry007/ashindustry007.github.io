# Ashish Kumar Panda - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, skills, and achievements.

## 🚀 Quick Start

1. Download all files (index.html, styles.css, script.js)
2. Open index.html in your browser to preview locally
3. Follow deployment instructions below to publish online

## 📋 Setup Instructions

### Before Deploying:

1. **Update Social Links** (in index.html):
   - Replace GitHub, LinkedIn, and Kaggle URLs with your actual profile links

2. **Configure Contact Form**:
   - Sign up for free at [Formspree](https://formspree.io/)
   - Replace `YOUR_FORM_ID` in the contact form action with your Formspree form ID
   - Alternatively, use other form services like FormSubmit or EmailJS

3. **Customize Content**:
   - Update any project links or additional information as needed
   - Add your resume/CV download link if desired

## 🌐 Free Deployment Options

### Option 1: GitHub Pages (Recommended)

**Pros:** Free, easy, version control, custom domain support
**Best for:** Static sites, portfolio websites

#### Steps:
1. Create a GitHub account (if you don't have one)
2. Create a new repository named `your-username.github.io` (replace with your GitHub username)
3. Upload all three files (index.html, styles.css, script.js) to the repository
4. Go to Settings → Pages
5. Under "Source", select "main" branch and save
6. Your site will be live at `https://your-username.github.io` in a few minutes

**Alternative:** For a custom repository name:
1. Create any repository (e.g., "portfolio")
2. Upload files
3. Enable GitHub Pages in Settings → Pages
4. Your site will be at `https://your-username.github.io/portfolio`

### Option 2: Vercel

**Pros:** Fastest deployment, excellent performance, automatic HTTPS
**Best for:** Modern web applications, React/Next.js projects

#### Steps:
1. Go to [vercel.com](https://vercel.com) and sign up (use GitHub account)
2. Click "Add New Project"
3. Option A - Import from Git:
   - Connect your GitHub repository
   - Vercel auto-detects settings
   - Click "Deploy"
4. Option B - Drag & Drop:
   - Create a folder with all files
   - Drag the folder to Vercel dashboard
5. Your site goes live instantly with a vercel.app domain
6. Optional: Add custom domain in Project Settings

**Using Vercel CLI:**
```bash
npm install -g vercel
cd your-portfolio-folder
vercel
```

### Option 3: Netlify

**Pros:** Drag-and-drop deployment, form handling, continuous deployment
**Best for:** JAMstack sites, quick deployments

#### Steps:
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Deploy manually"
3. Drag your project folder (with all files) to the upload area
4. Your site deploys instantly with a netlify.app domain
5. Optional: Change site name in Site Settings
6. Optional: Add custom domain

**Using Netlify CLI:**
```bash
npm install -g netlify-cli
cd your-portfolio-folder
netlify deploy --prod
```

### Option 4: Render

**Pros:** Free static site hosting, automatic deployments
#### Steps:
1. Go to [render.com](https://render.com)
2. Create a new Static Site
3. Connect your GitHub repository
4. Deploy automatically

### Option 5: Cloudflare Pages

**Pros:** Global CDN, excellent performance, unlimited bandwidth
#### Steps:
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repository
3. Deploy with one click

## 📱 Custom Domain Setup (Optional)

### For GitHub Pages:
1. Buy a domain from Namecheap, GoDaddy, or Cloudflare
2. Add a CNAME file with your domain name to your repository
3. In GitHub Settings → Pages, add your custom domain
4. Configure DNS records with your domain provider:
   - Type: CNAME, Name: www, Value: your-username.github.io

### For Vercel/Netlify:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions provided
4. SSL certificate is automatically provisioned

## 🛠️ Customization Tips

### Colors:
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;  /* Change to your preferred color */
    --secondary-color: #8b5cf6;
    --accent: #22d3ee;
}
```

### Content:
- All text content is in `index.html`
- Update section content directly in HTML
- Add/remove projects by copying project-card divs

### Fonts:
Add Google Fonts to `<head>` in index.html:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```
Then update CSS font-family.

## 📊 Analytics (Optional)

Add Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking ID
3. Add tracking code to `<head>` in index.html

## 🔧 Troubleshooting

### Contact form not working:
- Ensure you've replaced YOUR_FORM_ID with actual Formspree ID
- Check form service is active and configured

### Site not displaying correctly:
- Clear browser cache
- Check all files are uploaded
- Verify file names match exactly (case-sensitive)

### GitHub Pages not updating:
- Wait 5-10 minutes for changes to propagate
- Check Actions tab for build status
- Ensure repository is public (or you have GitHub Pro)

## 📄 License

Free to use and modify for personal use.

## 💡 Support

For issues or questions:
- Email: ashishpanda.edu@gmail.com
- Check deployment platform documentation

---

Built with HTML, CSS, and JavaScript. No frameworks required!

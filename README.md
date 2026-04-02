
# Panda Portfolio

AI Engineer & MSCS Student Portfolio for Ashish Kumar Panda.

## 🚀 GitHub Pages Deployment ($0/month)

This portfolio is configured for **Static Site Generation (SSG)**. To fix the "Exit Code 1" build error and the "6k files" issue, follow these exact steps:

### 1. Clean the Repository
If your GitHub still shows thousands of files, run these commands in your terminal to remove the cached `node_modules`:
```bash
git rm -r --cached .
git add .
git commit -m "Fix: Ignore node_modules and configure static export"
git push origin main
```

### 2. Configure GitHub Actions
1. Go to your GitHub Repository **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Create a new file in your repo at `.github/workflows/deploy.yml` (you can do this in the GitHub UI or locally) and paste the following "Next.js" starter template.

### 3. Recommended Workflow Template
When GitHub asks you to "Configure" a Next.js workflow, ensure it uses **Node 22** to avoid deprecation warnings. The standard template provided by GitHub usually works perfectly once the `node_modules` are removed from the tracking.

---

## 🛠 Tech Stack
- **Framework**: Next.js 15 (Static Export)
- **Styling**: Tailwind CSS + ShadCN UI
- **Animations**: Framer Motion
- **Hosting**: GitHub Pages

## 🔧 Why GitHub Pages?
- **Truly Free**: No credit card required.
- **Fast**: Global CDN hosting.
- **Automated**: Deploys directly from your code.

*Note: In static mode, any server-side features (like live Instagram API calls) are replaced with curated static data from `src/lib/config.ts`.*

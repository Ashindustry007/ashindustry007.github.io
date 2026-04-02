
# Panda Portfolio

AI Engineer & MSCS Student Portfolio for Ashish Kumar Panda.

## 🚀 GitHub Pages Deployment ($0/month)

This portfolio is configured for **Static Site Generation (SSG)**. To fix the "Exit Code 1" build error and the "6k files" issue, follow these exact steps in your terminal:

### 1. Clean the Git Tracking (The "6k Files" Fix)
If your GitHub still shows thousands of files, you must remove the tracked `node_modules`. Run these commands exactly as shown:

```bash
# IMPORTANT: Note the dot (.) at the end of the first command
git rm -r --cached .
git add .
git commit -m "Fix: Ignore node_modules and configure static export"
git push origin main --force
```

### 2. Configure GitHub Actions
1. Go to your GitHub Repository **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Create a new file in your repo at `.github/workflows/deploy.yml` (using the GitHub UI or locally).
4. Use the standard "Next.js" starter template provided by GitHub.

### 3. Ensure Node 22+ (To fix Deprecation Warnings)
When configuring the workflow, make sure it specifies **Node 22** or **Node 24** to avoid the deprecation warnings mentioned in your logs.

---

## 🛠 Tech Stack
- **Framework**: Next.js 15 (Static Export Mode)
- **Styling**: Tailwind CSS + ShadCN UI
- **Animations**: Framer Motion
- **Hosting**: GitHub Pages

## 🔧 Why GitHub Pages?
- **Truly Free**: No credit card required.
- **Fast**: Global CDN hosting.
- **Automated**: Deploys directly from your code.

*Note: In static mode, any server-side features (like live Instagram API calls) are replaced with curated static data from `src/lib/config.ts` for zero-cost maintenance.*

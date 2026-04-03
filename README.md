
# Panda Portfolio

AI Engineer & MSCS Student Portfolio for Ashish Kumar Panda.

## 🚀 GitHub Pages Deployment ($0/month)

This portfolio is configured for **Static Site Generation (SSG)**. To fix the "Exit Code 1" build error and the "6k files" issue, follow these exact steps:

### 1. Clean the Git Tracking (The "6k Files" Fix)
If your GitHub still shows thousands of files, you must remove the tracked `node_modules`. Run these commands in your terminal:

```bash
# IMPORTANT: The dot (.) at the end is mandatory
git rm -r --cached .
git add .
git commit -m "Fix: Ignore node_modules and configure static export"
git push origin main --force
```

### 2. Configure GitHub Actions
1. Go to your GitHub Repository **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Create a new file in your repo at `.github/workflows/deploy.yml` and paste the content below.

### 3. Workflow File Content (`.github/workflows/deploy.yml`)
Use this configuration to ensure **Node 22** is used, avoiding deprecation warnings:

```yaml
name: Deploy Next.js site to Pages
on:
  push:
    branches: ["main"]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "22"
          cache: 'npm'
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Install dependencies
        run: npm ci
      - name: Build with Next.js
        run: npx next build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

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

*Note: In static mode, server-side features are replaced with curated static data from `src/lib/config.ts` for zero-cost maintenance.*

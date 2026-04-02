# Panda Portfolio

AI Engineer & MSCS Student Portfolio for Ashish Kumar Panda.

## How to push to GitHub

To upload this project to your GitHub repository (`ashindustry007.github.io`), follow these steps in your local terminal:

1. **Initialize Git** (if not already done):
   ```bash
   git init
   ```

2. **Add the remote repository**:
   ```bash
   git remote add origin https://github.com/Ashindustry007/ashindustry007.github.io.git
   ```

3. **Check for "6k files" issue**:
   If you accidentally added the `node_modules` folder before, clear the git cache:
   ```bash
   git rm -r --cached .
   ```

4. **Stage and Commit**:
   ```bash
   git add .
   ```
   *Note: Thanks to the `.gitignore` file, this will now only stage about 50-100 source files, not 6,000.*

5. **Push to GitHub**:
   ```bash
   git branch -M main
   git commit -m "Initial commit: Cinematic Portfolio"
   git push -u origin main
   ```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + ShadCN UI
- **Animations**: Framer Motion
- **AI Integration**: Genkit
- **Database**: Firebase / Firestore
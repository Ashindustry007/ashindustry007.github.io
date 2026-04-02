# Panda Portfolio

AI Engineer & MSCS Student Portfolio for Ashish Kumar Panda.

## 💸 Zero-Cost Deployment Guide

To host this AI-powered portfolio for **completely free**, you have two excellent options:

### Option A: Firebase (Recommended for Google AI/Genkit)
Firebase App Hosting requires the **Blaze Plan** (Pay-as-you-go) because it uses Cloud Run. **However, it is still $0/month for personal use.**

1. **Why Blaze?**: It enables Google Cloud resources. As long as you stay within the [Cloud Run Free Tier](https://google.com/run/pricing) (which is huge), you won't be charged.
2. **Setup**:
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Upgrade to **Blaze** (you'll need a card, but the bill stays $0 for low traffic).
   - Navigate to **Build > App Hosting**.
   - Connect your GitHub repo.
3. **Environment Variables**: In App Hosting settings, add:
   - `GOOGLE_GENAI_API_KEY`: Your key from [Google AI Studio](https://aistudio.google.com/).

### Option B: Vercel (Truly $0, No Credit Card)
Vercel is the easiest way to host Next.js apps for free without a credit card.

1. Create a free account at [Vercel](https://vercel.com/).
2. Import your GitHub repository.
3. **Environment Variables**: Add `GOOGLE_GENAI_API_KEY` during setup.
4. Deploy! It automatically handles the server-side AI logic.

---

## 🛠️ Troubleshooting common issues

### Why not GitHub Pages?
GitHub Pages only hosts static files. Because this portfolio uses **Genkit (AI)** and **Server-Side Rendering**, it requires a server environment (like Firebase or Vercel) to process the AI requests.

### "6k Files" Git Issue
If Git is trying to upload 6,000+ files, it's because it's tracking `node_modules`. Ensure the `.gitignore` file is present in your project root, then run these commands:
```bash
git rm -r --cached .
git add .
git commit -m "Fixed gitignore and cleaned up repo"
git push origin main --force
```

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **AI Integration**: Genkit (Google AI)
- **Styling**: Tailwind CSS + ShadCN UI
- **Animations**: Framer Motion

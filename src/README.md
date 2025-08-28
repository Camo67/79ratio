# 79Ratio Technology Solutions Website

A modern, responsive React website for 79Ratio Technology Solutions, built with TypeScript, Tailwind CSS, and a comprehensive design system.

## 🚀 Quick Deploy to GitHub Pages

### Option 1: Automated Cleanup & Deploy
```bash
# 1. Run the cleanup script
chmod +x cleanup.sh
./cleanup.sh

# 2. Update configuration for your repository
chmod +x update-config.sh
./update-config.sh

# 3. Deploy to GitHub
git add .
git commit -m "🚀 Deploy: 79Ratio website"
git push origin main
```

### Option 2: Manual Setup
See [GITHUB_DEPLOYMENT_GUIDE.md](GITHUB_DEPLOYMENT_GUIDE.md) for detailed step-by-step instructions.

## 🎯 Live Demo

Visit the live website: [https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/)

## 🛠 Technology Stack

- **React 18** with TypeScript
- **Vite** for build tooling and development
- **Tailwind CSS v4** for styling
- **React Router** with HashRouter for GitHub Pages compatibility
- **Radix UI** for accessible components
- **Lucide React** for icons
- **Motion** for animations

## 🏗 Project Structure

```
├── .github/workflows/deploy.yml  # Automated deployment
├── App.tsx                       # Main application with smart routing
├── components/                   # Reusable React components
│   ├── Header.tsx               # Main navigation with mega menu
│   ├── Hero.tsx                 # Landing page hero section
│   ├── Logo.tsx                 # Logo component variants
│   ├── Footer.tsx               # Site footer
│   └── ui/                      # UI component library
├── pages/                       # Page components
├── styles/                      # Global CSS and design tokens
└── src/                         # Entry point and main files
```

## 🎨 Design Features

- **Dark Theme**: Professional black background with blue accent colors
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Mega Menu Navigation**: Sophisticated 4-column service navigation
- **Smooth Animations**: Subtle hover effects and transitions
- **Accessibility**: WCAG compliant with proper focus management
- **Typography System**: Custom font stack with design tokens

## 🚀 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎯 Key Features

### Smart Routing System
- **Automatic Detection**: Detects GitHub Pages, file protocol, and static hosting
- **HashRouter Fallback**: Uses hash routing for GitHub Pages compatibility
- **Error Recovery**: Falls back to static app if routing fails

### Design System
- **Color Palette**: Professional dark theme with blue accents
- **Typography Scale**: Responsive text sizing with design tokens
- **Spacing System**: Consistent spacing using CSS custom properties
- **Animation Library**: Custom keyframe animations for enhanced UX

### Component Architecture
- **Modular Design**: Reusable components with TypeScript
- **Accessibility First**: ARIA labels, keyboard navigation, focus management
- **Responsive Components**: Mobile-optimized layouts and interactions

## 📁 Files to Remove Before Deployment

The following files/folders should be removed as they're not needed for the React deployment:

### ❌ Remove These:
- `79ratio-complete.html`
- `79ratio-main.html`
- `footer.html`
- `79ratio-website-export/`
- `exact-replica/`
- `html/`
- `squarespace/`
- `temp-cleanup-complete.txt`
- `temp-delete-marker.txt`
- `gitignore/` (folder with tsx files)
- `components/LogoTest.tsx`
- `components/Header-corrected.tsx`
- `components/HeaderFallback.tsx`
- `workflows/` (move to `.github/workflows/`)

### ✅ Keep These:
- All files in `components/` (except test files listed above)
- All files in `pages/`
- All files in `public/`
- All files in `src/`
- All configuration files (package.json, vite.config.ts, etc.)
- `.github/workflows/deploy.yml`

## 🚀 Deployment Process

### GitHub Pages Setup
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as source
4. The workflow will automatically deploy your site

### Automatic Deployment
Every push to the `main` branch will automatically:
- Install dependencies
- Run linting checks
- Build the production version
- Deploy to GitHub Pages

## 🔧 Customization

### Colors
Update colors in `/styles/globals.css`:
```css
:root {
  --primary-blue: #9FB3DF;
  --secondary-blue: #9EC6F3;
  --background-light: #000000;
  --text-primary: #FFFFFF;
}
```

### Typography
Modify typography scales in the design tokens:
```css
:root {
  --text-h1: 5rem;
  --text-h2: 3.75rem;
  --text-body: 1.25rem;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility

- **WCAG 2.1 AA** compliance
- **Keyboard Navigation** support
- **Screen Reader** optimized
- **Focus Management** in interactive elements
- **High Contrast** mode support

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

**79Ratio Technology Solutions**
- Phone: 844-321-7284
- Website: [79ratio.com](https://79ratio.com)

---

Built with ❤️ by 79Ratio Technology Solutions
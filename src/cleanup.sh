#!/bin/bash

# 79Ratio Website - Repository Cleanup Script
# This script removes all unnecessary files for React deployment

echo "🧹 Starting 79Ratio repository cleanup..."

# Remove HTML static files (not needed for React)
echo "📄 Removing static HTML files..."
rm -f 79ratio-complete.html 79ratio-main.html footer.html

# Remove static website folders
echo "📁 Removing static website folders..."
rm -rf 79ratio-website-export/
rm -rf exact-replica/
rm -rf html/
rm -rf squarespace/

# Remove temporary files
echo "🗑️ Removing temporary files..."
rm -f temp-cleanup-complete.txt
rm -f temp-delete-marker.txt

# Remove gitignore folder with code components
echo "📦 Removing incorrect gitignore folder..."
rm -rf gitignore/

# Remove test and unnecessary components
echo "🧪 Removing test and old components..."
rm -f components/LogoTest.tsx
rm -f components/Header-corrected.tsx
rm -f components/HeaderFallback.tsx

# Remove unnecessary documentation
echo "📚 Removing unnecessary documentation..."
rm -f CLEANUP_STATUS.md
rm -f Attributions.md
rm -f implementation-guide.md
rm -f integration-guide-landing-page.md
rm -f managed-services-implementation-guide.md

# Move GitHub workflow to correct location
echo "⚙️ Moving GitHub workflow to correct location..."
mkdir -p .github/workflows
if [ -f workflows/deploy.yml ]; then
    mv workflows/deploy.yml .github/workflows/
    rm -rf workflows/
    echo "✅ Moved deploy.yml to .github/workflows/"
else
    echo "ℹ️ deploy.yml not found in workflows/ folder"
fi

# Clean up guidelines folder if empty
if [ -d guidelines/ ] && [ -z "$(ls -A guidelines/)" ]; then
    rm -rf guidelines/
    echo "✅ Removed empty guidelines folder"
fi

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "📊 Repository status:"
echo "✅ React application files preserved"
echo "✅ Components and pages intact"  
echo "✅ Configuration files maintained"
echo "✅ Static HTML exports removed"
echo "✅ Temporary and test files removed"
echo "✅ Workflow moved to correct location"
echo ""
echo "📁 Essential files remaining:"
echo "  ├── App.tsx (React entry point)"
echo "  ├── components/ (React components)"
echo "  ├── pages/ (Page components)"
echo "  ├── public/ (Static assets)"
echo "  ├── src/ (Main entry)"
echo "  ├── styles/ (CSS)"
echo "  ├── .github/workflows/deploy.yml"
echo "  └── Configuration files"
echo ""
echo "🚀 Ready for GitHub deployment!"
echo ""
echo "Next steps:"
echo "1. Update configuration: ./update-config.sh"
echo "2. git add ."
echo "3. git commit -m '🧹 Clean repository for deployment'"
echo "4. git push origin main"
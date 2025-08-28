#!/bin/bash

# 79Ratio Website - Configuration Update Script
# This script helps update repository-specific configuration

echo "🔧 79Ratio Configuration Update Script"
echo ""

# Get repository information
echo "Please enter your GitHub information:"
read -p "GitHub Username: " GITHUB_USERNAME
read -p "Repository Name: " REPO_NAME

echo ""
echo "Updating configuration files..."

# Update package.json
if [ -f "package.json" ]; then
    # Create backup
    cp package.json package.json.backup
    
    # Update homepage and repository fields
    sed -i.bak "s|https://79ratio.github.io/website|https://${GITHUB_USERNAME}.github.io/${REPO_NAME}|g" package.json
    sed -i.bak "s|https://github.com/79ratio/website.git|https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git|g" package.json
    
    echo "✅ Updated package.json"
else
    echo "❌ package.json not found"
fi

# Update vite.config.ts
if [ -f "vite.config.ts" ]; then
    # Create backup
    cp vite.config.ts vite.config.ts.backup
    
    # Update base path
    sed -i.bak "s|base: '/website/'|base: '/${REPO_NAME}/'|g" vite.config.ts
    
    echo "✅ Updated vite.config.ts"
else
    echo "❌ vite.config.ts not found"
fi

# Clean up backup files
rm -f *.bak package.json.bak vite.config.ts.bak

echo ""
echo "🎯 Configuration updated successfully!"
echo ""
echo "Repository Details:"
echo "📍 GitHub URL: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
echo "🌐 Live Site: https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/"
echo ""
echo "Next steps:"
echo "1. git add ."
echo "2. git commit -m 'Update repository configuration'"
echo "3. git push origin main"
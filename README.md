# ScholarSite 3.0

A fully responsive, modern single-page website template designed for academic researchers to showcase their research, publications, and accomplishments. This enhanced version features a streamlined single-page design with smooth navigation and modern visual elements perfect for creating a professional academic presence.

![GitHub Stars](https://img.shields.io/github/stars/muhammedrashidx/ScholarSite_3.0?style=social)
![GitHub Forks](https://img.shields.io/github/forks/muhammedrashidx/ScholarSite_3.0?style=social)


## 🚀 Features

- **Responsive Design**: Adapts perfectly to all screen sizes (mobile, tablet, desktop)
- **Single-Page Navigation**: Smooth scrolling between sections with fixed navigation
- **Easy Customization**: Well-organized code structure with clear placeholders
- **Modern Aesthetic**: Clean, professional design with visual section dividers
- **Lightbox Gallery**: Interactive image viewing with modal functionality
- **Mobile-Optimized**: Hamburger menu and touch-friendly interface
- **Fast Loading**: Optimized performance with lazy loading images
- **SEO Friendly**: Structured markup for better search engine visibility

## 📑 Page Sections

Your ScholarSite 3.0 includes these main sections:

1. **Header/Hero**: Profile image, name, and title with background
2. **About**: Personal introduction and academic background
3. **Research**: Detailed project showcase with images and descriptions
4. **Publications**: Journal articles and conference presentations
5. **Gallery**: Year-organized photo gallery with captions
6. **Connect**: Social media and professional profile links

## 🚀 Complete Setup Guide for Beginners

### Step 1: Install Required Software

Before we start, you need to install the following software on your computer:

#### 1.1 Install Git
- **Windows**: Download from [git-scm.com](https://git-scm.com/download/win) and run the installer
- **Mac**: Install via Homebrew: `brew install git` or download from [git-scm.com](https://git-scm.com/download/mac)
- **Linux**: Use your package manager: `sudo apt install git` (Ubuntu/Debian) or `sudo yum install git` (CentOS/RHEL)

#### 1.2 Install Visual Studio Code
- Download from [code.visualstudio.com](https://code.visualstudio.com/)
- Install the downloaded file
- Open VS Code after installation

#### 1.3 Install Live Server Extension (for VS Code)
1. Open VS Code
2. Click on the Extensions icon in the sidebar (or press `Ctrl+Shift+X`)
3. Search for "Live Server"
4. Install the extension by Ritwick Dey

### Step 2: Set Up Git (First Time Only)

If this is your first time using Git, you need to configure it with your details:

1. Open Terminal (Mac/Linux) or Command Prompt/PowerShell (Windows)
2. Run these commands (replace with your actual name and email):

```bash
git config --global user.name "Your Full Name"
git config --global user.email "your.email@example.com"
```

**Important**: Use the same email address that you use for your GitHub account.

### Step 3: Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up" and create your account
3. Verify your email address
4. Choose a username that's professional (you'll use this in your website URL)

### Step 4: Fork the ScholarSite Repository

1. Go to the [ScholarSite 3.0 repository](https://github.com/muhammedrashidx/ScholarSite_3.0)
2. Click the **Fork** button in the top-right corner
3. This creates your own copy of the repository

[![Fork the Repository](https://img.shields.io/badge/Fork%20The%20Repository-blue?style=for-the-badge)](https://github.com/muhammedrashidx/ScholarSite_3.0/fork)

### Step 5: Clone Your Repository

Now you'll download your forked repository to your computer:

#### Option A: Using VS Code (Recommended for beginners)
1. Open VS Code
2. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
3. Type "Git: Clone" and select it
4. Enter your repository URL: `https://github.com/YOUR-USERNAME/ScholarSite_3.0.git`
5. Choose a folder on your computer to save the project
6. Click "Open" when VS Code asks if you want to open the cloned repository

#### Option B: Using Command Line
1. Open Terminal/Command Prompt
2. Navigate to where you want to save the project:
   ```bash
   cd Desktop  # or wherever you want to save it
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ScholarSite_3.0.git
   ```
4. Open the project in VS Code:
   ```bash
   cd ScholarSite_3.0
   code .
   ```

### Step 6: Customize Your Website

Now comes the fun part - making it yours!

#### 6.1 Edit Your Profile Information
1. Open `index.html` in VS Code
2. Replace all placeholder text marked with `[Your Name]`, `[Your Title/Profession]`, etc.:
   - Your name in the header and title
   - Your professional title/role
   - Your institution/organization
   - Your research area and current projects
   - Your academic background and education

#### 6.2 Add Your Profile Images
1. Add your profile picture to the `images` folder and name it `profile.png`
2. Add background images for sections (`image1.png`, `image2.png`, etc.)
3. Update image paths in the HTML if you use different filenames

#### 6.3 Customize Research Projects
1. Find the research section in `index.html`
2. Replace the four placeholder projects with your actual research:
   - Project titles
   - Detailed descriptions
   - Supervisor information and links
   - Add project images to the `images` folder
   - Link to project reports in the `documents` folder

#### 6.4 Update Publications
1. Locate the publications section
2. Replace placeholder publications with your actual work:
   - Journal articles with proper citations
   - Conference presentations
   - Add direct links to your papers
   - Organize by publication type

#### 6.5 Organize Your Gallery
1. Find the gallery section
2. Add your images to the `images` folder
3. Update the gallery by year:
   - Replace `image1.png`, `image2.png`, etc. with your photos
   - Add descriptive captions
   - Organize by academic year or project

#### 6.6 Update Social Links
1. Find the Connect section
2. Replace placeholder links with your actual profiles:
   - Google Scholar profile
   - ORCID ID
   - GitHub profile
   - Twitter/X account
   - Add or remove social icons as needed

### Step 7: Customize Styling (Optional)

1. Open `styles.css` to modify:
   - Color scheme
   - Typography
   - Layout spacing
   - Background colors
2. The CSS is well-commented for easy customization

### Step 8: Preview Your Website Locally

Before publishing, test your website:

1. Right-click on `index.html` in VS Code
2. Select "Open with Live Server"
3. Your website will open in your browser
4. Test navigation between sections
5. Check mobile responsiveness by resizing the browser
6. Verify all images and links work correctly

### Step 9: Save Your Changes to GitHub

Once you're happy with your changes:

1. In VS Code, open the Terminal (`Ctrl+` ` or View > Terminal)
2. Run these commands:

```bash
# Add all your changes
git add .

# Commit your changes with a message
git commit -m "Customize ScholarSite 3.0 with my information"

# Push changes to GitHub
git push origin main
```

**Note**: The first time you push, you might be asked to authenticate with GitHub. Follow the prompts to sign in.

### Step 10: Publish Your Website with GitHub Pages

Now let's make your website live on the internet:

#### 10.1 Rename Your Repository (Recommended)
1. Go to your repository on GitHub
2. Click on "Settings" (in your repository, not your profile)
3. Scroll down to "Repository name"
4. Rename it to: `YOUR-USERNAME.github.io`
   - For example, if your username is `janedoe`, rename it to `janedoe.github.io`
5. Click "Rename"

#### 10.2 Enable GitHub Pages
1. Still in Settings, scroll down to "Pages" in the left sidebar
2. Under "Source", select "Deploy from a branch"
3. Choose "main" branch and "/ (root)" folder
4. Click "Save"

[![Enable GitHub Pages](https://img.shields.io/badge/Enable%20GitHub%20Pages-blue?style=for-the-badge)](https://docs.github.com/en/pages/getting-started-with-github-pages)

#### 10.3 Access Your Live Website
- After 5-10 minutes, your website will be live at: `https://YOUR-USERNAME.github.io`
- You can share this URL with anyone!

## 🎨 Customization Tips

### Color Scheme
- Edit CSS variables in `styles.css` to change the overall color theme
- Modify background colors for sections to match your preferences
- Update link colors and hover effects

### Background Images
- Add high-quality images (1920x1080 recommended) to the `images` folder
- Replace `image1.png`, `image2.png`, etc. with your chosen backgrounds
- Use images related to your research field or institution

### Navigation
- Modify section names in the navigation menu
- Add or remove sections as needed
- Update anchor links to match your section IDs

### Typography
- The template uses Public Sans font for a modern, professional look
- You can change fonts by updating the Google Fonts link in the HTML head
- Adjust font sizes and weights in the CSS

## 📱 Mobile Optimization Features

Your ScholarSite 3.0 includes:
- Responsive hamburger menu for mobile devices
- Touch-friendly navigation
- Optimized image sizing for different screens
- Mobile-first CSS approach
- Lazy loading for better performance on mobile

## 🔧 Advanced Customization

### Adding Google Analytics
1. Create a Google Analytics account
2. Get your tracking code
3. Add it to the `<head>` section of `index.html`

### Custom Domain (Optional)
1. Buy a domain name
2. In your repository settings, go to Pages
3. Add your custom domain in the "Custom domain" field
4. Update your domain's DNS settings to point to GitHub Pages

### Adding Contact Forms
You can integrate services like:
- Formspree for simple contact forms
- Netlify Forms (if hosting on Netlify)
- Google Forms embedded in the page

### Lightbox Functionality
The template includes lightbox functionality for images. To add more images:
1. Add images to the `images` folder
2. Create anchor tags with `class="lightbox"`
3. Link to full-size images for the lightbox effect

## 🤝 Contributing

We welcome contributions to make ScholarSite even better! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly across different devices
5. Commit: `git commit -m "Add new feature"`
6. Push: `git push origin feature-name`
7. Create a Pull Request

## 🆘 Troubleshooting

### Common Issues

**Git authentication problems**:
- GitHub now requires personal access tokens instead of passwords
- Go to GitHub Settings > Developer settings > Personal access tokens
- Generate a new token and use it as your password

**Website not updating**:
- Changes can take 5-10 minutes to appear on GitHub Pages
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)
- Check that you pushed your changes: `git status`

**Images not showing**:
- Verify image file paths are correct (case-sensitive)
- Ensure images are in the `images` folder
- Check image file extensions match what's in your HTML
- Use forward slashes (/) in paths, even on Windows

**Navigation not working**:
- Check that section IDs match the navigation links
- Ensure JavaScript file (`script.js`) is loading properly
- Test the hamburger menu on mobile devices

**CSS not applying**:
- Verify the CSS file path is correct in your HTML
- Clear browser cache
- Check for CSS syntax errors
- Ensure `styles.css` is in the same directory as `index.html`

**Lightbox not working**:
- Ensure JavaScript is enabled in the browser
- Check that images have the correct `lightbox` class
- Verify image paths in lightbox links are correct

### Getting Help

- Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
- Visit [Stack Overflow](https://stackoverflow.com) for coding questions
- Create an issue in the repository for bugs or feature requests
- Review the code comments for guidance on customization

## 📊 File Structure

```
ScholarSite_3.0/
├── index.html          # Main single-page website
├── styles.css          # All styling and responsive design
├── script.js           # Navigation and lightbox functionality
├── images/             # All images folder
│   ├── profile.png     # Your profile picture
│   ├── image1.png      # Background image 1
│   ├── image2.png      # Background image 2
│   ├── image3.png      # Background image 3
│   ├── image4.png      # Background image 4
│   ├── image5.png      # Background image 5
│   ├── project1.jpg    # Project images
│   └── project3.jpg    # Project images
├── documents/          # Research papers and reports
└── README.md           # This file
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Show Your Support

If ScholarSite 3.0 helped you create your academic website, please:

[![Star the Repository](https://img.shields.io/badge/Star%20The%20Repository-yellow?style=for-the-badge)](https://github.com/muhammedrashidx/ScholarSite_3.0/stargazers)
[![Fork the Repository](https://img.shields.io/badge/Fork%20The%20Repository-blue?style=for-the-badge)](https://github.com/muhammedrashidx/ScholarSite_3.0/fork)


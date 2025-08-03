# Vibe Games Website

A modern, responsive React website for Vibe Games - your ultimate gaming destination.

## Features

- 🎮 **Modern Design**: Beautiful, responsive design with smooth animations
- 📱 **Mobile-First**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with React and optimized for speed
- 🎨 **Styled Components**: Modern CSS-in-JS styling approach
- 🔗 **Smooth Navigation**: Seamless scrolling between sections
- 📝 **Contact Form**: Interactive contact form with validation
- 🌐 **Accessible**: Built with accessibility best practices

## Sections

1. **Hero Section**: Eye-catching landing area with call-to-action buttons
2. **Features**: Showcase of platform features with attractive cards
3. **About**: Company information and statistics
4. **Contact**: Contact form and company information
5. **Footer**: Social links and additional information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── Features.js     # Features showcase
│   ├── About.js        # About section
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── App.js              # Main App component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Technologies Used

- **React 18** - Modern React with hooks
- **Styled Components** - CSS-in-JS styling
- **Create React App** - Development environment
- **Google Fonts** - Inter font family

## Customization

### Colors
The website uses a consistent color scheme defined in the styled components:
- Primary: `#667eea` to `#764ba2` (gradient)
- Secondary: `#ff6b6b` to `#ee5a24` (gradient)
- Text: `#333` (dark), `#666` (medium), `#bdc3c7` (light)

### Content
Update the content in each component file to match your business needs:
- Company information in `About.js`
- Contact details in `Contact.js` and `Footer.js`
- Features list in `Features.js`

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, email hello@vibegames.com or create an issue in the repository.

---

Built with ❤️ by the Vibe Games team 
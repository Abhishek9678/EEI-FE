# Evolve Energy India - Web Application

## Overview
Evolve Energy India is a modern web application built with Next.js, React, and Tailwind CSS. The platform showcases sustainable energy solutions and services, featuring a responsive design with smooth animations and interactive components.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Built with Tailwind CSS and shadcn/ui components
- **Performance Optimized**: Fast page loads and smooth animations
- **Interactive Components**:
  - Animated hero section with carousel
  - Interactive green meter visualization
  - Responsive navigation
  - Dynamic content loading

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with CSS Modules
- **UI Components**: shadcn/ui (Radix UI + Tailwind)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Form Handling**: React Hook Form
- **State Management**: React Context + useState
- **Deployment**: Vercel

## 📁 Project Structure

```
.
├── app/                    # App Router pages
│   ├── about/              # About page
│   ├── blog/               # Blog section
│   ├── contact/            # Contact page
│   ├── services/           # Services overview
│   └── ...                 # Other pages
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   ├── hero.tsx            # Hero section component
│   ├── multi-header.tsx    # Responsive header
│   └── multi-footer.tsx    # Site footer
├── lib/                    # Utility functions
├── public/                 # Static assets
│   ├── images/             # Image assets
│   └── videos/             # Video assets
├── styles/                 # Global styles
├── next.config.mjs         # Next.js configuration
└── package.json            # Project dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Abhishek9678/EEI-FE.git
   cd EEI-FE
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
NEXT_PUBLIC_SITE_URL=https://your-production-url.com
# Add other environment variables as needed
```

### Customizing the Theme

Edit the `tailwind.config.js` file to customize the design system:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#0066CC',  // Your brand color
        // ... other theme customizations
      },
    },
  },
}
```

## 📝 Code Style

- **Components**: Use functional components with TypeScript
- **Styling**: Use Tailwind CSS utility classes
- **State Management**: Prefer React hooks (useState, useEffect, useContext)
- **Props**: Define prop types using TypeScript interfaces
- **Formatting**: 2-space indentation, single quotes

## 🤝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or feedback, please contact the development team at [your-email@example.com](mailto:your-email@example.com).

---

<div align="center">
  Made with ❤️ by Evolve Energy India
</div>

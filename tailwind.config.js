/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#2E7D32',
        accent: '#8BC34A',
        background: '#F9FAFB',
        'soft-bg': '#F0F2F5',
        dark: {
          // Main backgrounds
          background: '#121212',      // Dark Charcoal - Overall background
          'soft-bg': '#1A1A1A',       // Graph Background - Semi-Transparent Black
          card: '#1E1E1E',            // Dark Grey - Cards/Containers
          
          // Navigation and sidebar
          header: '#1B5E20',          // Deep Green - Navbar/Header
          sidebar: '#0D3B1C',         // Dark Forest Green - Sidebar/Menu
          
          // Text colors
          text: '#E0E0E0',            // Light Gray - Primary Text
          'text-secondary': '#A0A0A0', // Muted text
          heading: '#66BB6A',         // Vibrant Green Accent - Headings
          
          // Buttons
          'btn-primary': '#00FF66',   // Neon Green - Primary Action Buttons
          'btn-secondary': '#4CAF50', // Muted Green - Secondary Buttons
          
          // Alerts
          success: '#76FF03',         // Lime Green - Success Alerts
          error: '#FF3D00',           // Red Orange - Error Alerts
          
          // Graphs and charts
          'chart-line': '#00E676',    // Fluorescent Green - Graph Lines
          
          // Borders and effects
          border: '#333333',
          'border-hover': '#444444',
          'card-hover': '#2A2A2A',
          'gradient-start': '#388E3C', // Gradient start color
          'gradient-end': '#66BB6A',   // Gradient end color
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'neon-green': '0 0 5px #00FF66, 0 0 10px #00FF66, 0 0 15px #00FF66',
        'neon-green-sm': '0 0 2px #00FF66, 0 0 5px #00FF66',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(to right, #388E3C, #66BB6A)',
        'weed-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 20 L40 30 L30 40 L20 30 Z' fill='%231B5E20' fill-opacity='0.1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} 
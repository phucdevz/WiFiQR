# WiFiQR - QR Code Generator

A modern, responsive web application for generating QR codes with beautiful 3D design and extensive customization options.

## 📸 Project Images

### Desktop View
![Desktop View](https://via.placeholder.com/800x500/667eea/ffffff?text=WiFiQR+Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x700/667eea/ffffff?text=WiFiQR+Mobile+View)

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x500/1e293b/ffffff?text=WiFiQR+Dark+Mode)

## ✨ Features

- **Multiple QR Types**: Wi-Fi, URL, Text, Business Card (vCard)
- **Modern 3D Design**: Glassmorphism effects with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Real-time Customization**: Colors, styles, patterns, and sizes
- **High-quality Downloads**: PNG format with customizable resolution
- **Responsive Design**: Works perfectly on all devices
- **Client-side Only**: No backend required, works offline

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/phucdev/WiFiQR.git
cd WiFiQR
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Vanilla JS with modern features
- **QR Code Libraries**: 
  - `qr-code-styling` for advanced customization
  - `qrcode.js` for core QR generation
- **External Dependencies**:
  - Font Awesome for icons
  - Google Fonts (Inter) for typography

## 📱 Supported QR Types

### Wi-Fi QR Code
Generate QR codes for Wi-Fi networks with:
- SSID (Network name)
- Password
- Encryption type (WPA/WPA2, WEP, None)

### URL QR Code
Create QR codes that link to websites with URL validation.

### Text QR Code
Generate QR codes containing any text content.

### Business Card (vCard)
Create QR codes with contact information:
- Name
- Phone number
- Email
- Company

## 🎨 Customization Options

- **Colors**: Custom foreground and background colors
- **Patterns**: Square, dots, rounded styles
- **Eye Styles**: Square, circle, rounded corner patterns
- **Size**: Adjustable from 200px to 400px
- **Theme**: Light and dark mode support

## 📁 Project Structure

```
WiFiQR/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .gitignore          # Git ignore file
```

## 🎯 Key Features

### Modern UI/UX
- Glassmorphism design with backdrop blur effects
- Smooth animations and transitions
- 3D hover effects and shadows
- Responsive grid layout

### QR Code Generation
- Real-time preview
- Multiple format support
- High-quality output
- Instant download capability

### User Experience
- Form validation with helpful error messages
- Loading states and success animations
- Theme persistence across sessions
- Mobile-first responsive design

## 🌟 Design Highlights

- **Glassmorphism**: Modern glass-like effects with transparency
- **3D Elements**: Depth through shadows and gradients
- **Smooth Animations**: CSS transitions and keyframe animations
- **Color Schemes**: Beautiful gradients and theme support
- **Typography**: Clean, modern Inter font family

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Phucdev** - [GitHub](https://github.com/phucdev)

Made with ❤️ by Phucdev

## 🚀 Future Enhancements

- [ ] QR code scanning functionality
- [ ] More QR code patterns and styles
- [ ] Logo/branding overlay options
- [ ] Batch QR code generation
- [ ] QR code analytics tracking
- [ ] Export to SVG format
- [ ] Social media sharing integration

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

**Note**: This is a client-side only application. All QR code generation happens in your browser, ensuring privacy and offline functionality.

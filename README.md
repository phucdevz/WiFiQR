# WiFiQR - Ứng dụng tạo mã QR Wi-Fi hiện đại

![WiFiQR](https://img.shields.io/badge/WiFiQR-3D%20Modern-blue?style=for-the-badge&logo=wifi)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green?style=for-the-badge)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Supported-purple?style=for-the-badge)

Ứng dụng web WiFiQR cho phép tạo mã QR Wi-Fi ngay lập tức với giao diện 3D hiện đại, hỗ trợ nhiều loại QR và tùy chỉnh đa dạng.

## ✨ Tính năng chính

### 🎨 Giao diện hiện đại
- **Thiết kế 3D/Glassmorphism**: Hiệu ứng trong suốt, bóng đổ và gradient đẹp mắt
- **Responsive**: Tối ưu cho mọi thiết bị (mobile-first)
- **Dark/Light Mode**: Chuyển đổi theme tự động với localStorage
- **Animation mượt mà**: Hiệu ứng chuyển động và hover đẹp mắt

### 📱 Loại QR được hỗ trợ
- **Wi-Fi QR**: Tạo mã QR kết nối Wi-Fi tự động
- **URL QR**: Mã QR chứa đường link
- **Text QR**: Mã QR chứa văn bản
- **vCard QR**: Mã QR thông tin liên hệ

### 🎯 Tùy chỉnh nâng cao
- **Màu sắc**: Tùy chỉnh màu QR và màu nền
- **Kiểu QR**: Hình vuông, chấm tròn, bo góc
- **Kiểu mắt QR**: Hình vuông, hình tròn, bo góc
- **Kích thước**: Điều chỉnh từ 200px đến 400px

### 💾 Tính năng xuất
- **Download PNG**: Tải xuống với độ phân giải cao
- **Real-time preview**: Xem trước ngay lập tức
- **Validation**: Kiểm tra dữ liệu đầu vào

## 🚀 Cách sử dụng

### 1. Tạo mã QR Wi-Fi
1. Chọn tab **Wi-Fi**
2. Nhập tên mạng Wi-Fi (SSID)
3. Nhập mật khẩu (có thể ẩn/hiện)
4. Chọn loại mã hóa (WPA/WPA2, WEP, hoặc không mã hóa)
5. Tùy chỉnh màu sắc và kiểu QR
6. Nhấn **Tạo mã QR**

### 2. Tạo mã QR URL
1. Chọn tab **URL**
2. Nhập URL hợp lệ (ví dụ: https://example.com)
3. Tùy chỉnh theo ý muốn
4. Nhấn **Tạo mã QR**

### 3. Tạo mã QR văn bản
1. Chọn tab **Văn bản**
2. Nhập nội dung văn bản
3. Tùy chỉnh và tạo QR

### 4. Tạo mã QR thông tin liên hệ
1. Chọn tab **Card Visit**
2. Nhập thông tin: họ tên, số điện thoại, email, công ty
3. Tạo mã QR vCard

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic
- **CSS3**: 
  - CSS Variables cho theming
  - Flexbox & Grid layout
  - Animations & Transitions
  - Glassmorphism effects
- **JavaScript (ES6+)**:
  - Classes & Modules
  - Async/Await
  - Event handling
- **Thư viện bên ngoài**:
  - [QRCode.js](https://github.com/davidshimjs/qrcode) - Tạo QR cơ bản
  - [QR Code Styling](https://github.com/kozakdenys/qr-code-styling) - Tùy chỉnh QR nâng cao
  - [Font Awesome](https://fontawesome.com/) - Icons
  - [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter) - Typography

## 📁 Cấu trúc dự án

```
WiFiQR/
├── index.html          # File HTML chính
├── styles.css          # CSS với thiết kế 3D
├── script.js           # JavaScript logic
└── README.md           # Hướng dẫn sử dụng
```

## 🎨 Thiết kế

### Color Palette
- **Light Theme**: 
  - Primary: #3b82f6 (Blue)
  - Secondary: #6366f1 (Indigo)
  - Background: #f8fafc (Slate)
- **Dark Theme**:
  - Primary: #60a5fa (Light Blue)
  - Secondary: #818cf8 (Light Indigo)
  - Background: #0f172a (Dark Slate)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Tự động điều chỉnh kích thước

### Effects
- **Glassmorphism**: Backdrop blur, transparency
- **3D Shadows**: Layered shadow system
- **Gradients**: Linear gradients cho buttons và accents
- **Hover Effects**: Scale, translate, color transitions

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (2 cột layout)
- **Tablet**: 768px - 1024px (1 cột layout)
- **Mobile**: < 768px (Stacked layout, simplified tabs)

## 🔧 Cài đặt và chạy

### Cách 1: Chạy trực tiếp
1. Clone repository:
```bash
git clone https://github.com/phucdev/WiFiQR.git
cd WiFiQR
```

2. Mở file `index.html` trong trình duyệt

### Cách 2: Sử dụng Live Server (VS Code)
1. Cài đặt extension "Live Server"
2. Right-click vào `index.html`
3. Chọn "Open with Live Server"

### Cách 3: Sử dụng Python HTTP Server
```bash
python -m http.server 8000
# Hoặc
python3 -m http.server 8000
```

## 🌟 Tính năng nổi bật

### Validation thông minh
- Kiểm tra SSID không được để trống
- Validate URL format
- Required fields cho vCard
- Error notifications đẹp mắt

### Performance tối ưu
- Lazy loading cho QR libraries
- Debounced real-time updates
- Efficient DOM manipulation
- Minimal reflows/repaints

### Accessibility
- Semantic HTML structure
- ARIA labels và roles
- Keyboard navigation support
- High contrast ratios

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 🎯 Roadmap

- [ ] Thêm logo upload cho QR
- [ ] Hỗ trợ QR với logo ở giữa
- [ ] Export SVG format
- [ ] QR code scanning
- [ ] History lưu các QR đã tạo
- [ ] Share QR qua social media
- [ ] PWA support
- [ ] Offline mode

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**Phucdev** - [GitHub](https://github.com/phucdev)

Made with ❤️ by Phucdev

---

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!

// WiFiQR Application
class WiFiQR {
    constructor() {
        this.currentQRType = 'wifi';
        this.qrCode = null;
        this.qrStyling = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadTheme();
        this.setupQRStyling();
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

        // QR type tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchQRType(e.target.dataset.type));
        });

        // Password toggle
        document.getElementById('togglePassword').addEventListener('click', () => this.togglePassword());

        // Generate button
        document.getElementById('generateBtn').addEventListener('click', () => this.generateQR());

        // Download button
        document.getElementById('downloadBtn').addEventListener('click', () => this.downloadQR());

        // Size slider
        document.getElementById('qrSize').addEventListener('input', (e) => this.updateSize(e.target.value));

        // Real-time QR updates
        this.setupRealTimeUpdates();
    }

    setupQRStyling() {
        this.qrStyling = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data: "",
            dotsOptions: {
                color: "#000000",
                type: "squares"
            },
            backgroundOptions: {
                color: "#FFFFFF",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 0
            },
            cornersSquareOptions: {
                type: "square"
            },
            cornersDotOptions: {
                type: "square"
            }
        });
    }

    switchQRType(type) {
        this.currentQRType = type;
        
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-type="${type}"]`).classList.add('active');

        // Show/hide form sections
        document.querySelectorAll('.form-section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(`${type}Section`).classList.remove('hidden');

        // Clear QR display
        this.clearQRDisplay();
    }

    togglePassword() {
        const passwordInput = document.getElementById('password');
        const toggleBtn = document.getElementById('togglePassword');
        const icon = toggleBtn.querySelector('i');

        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.className = 'fas fa-eye-slash';
        } else {
            passwordInput.type = 'password';
            icon.className = 'fas fa-eye';
        }
    }

    toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');

        if (body.getAttribute('data-theme') === 'dark') {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            icon.className = 'fas fa-moon';
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.className = 'fas fa-sun';
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme');
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');

        if (savedTheme === 'dark') {
            document.body.setAttribute('data-theme', 'dark');
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    setupRealTimeUpdates() {
        // Update QR when customization options change
        const customizationInputs = [
            'foregroundColor',
            'backgroundColor',
            'qrStyle',
            'eyeStyle'
        ];

        customizationInputs.forEach(id => {
            document.getElementById(id).addEventListener('change', () => {
                if (this.qrCode) {
                    this.updateQRStyling();
                }
            });
        });
    }

    updateSize(size) {
        document.querySelector('.size-value').textContent = `${size}px`;
        
        if (this.qrStyling) {
            this.qrStyling.update({
                width: parseInt(size),
                height: parseInt(size)
            });
        }
    }

    validateForm() {
        const errors = [];

        switch (this.currentQRType) {
            case 'wifi':
                const ssid = document.getElementById('ssid').value.trim();
                if (!ssid) {
                    errors.push('Vui lòng nhập tên mạng Wi-Fi');
                }
                break;
            case 'url':
                const url = document.getElementById('url').value.trim();
                if (!url) {
                    errors.push('Vui lòng nhập URL');
                } else if (!this.isValidURL(url)) {
                    errors.push('URL không hợp lệ');
                }
                break;
            case 'text':
                const text = document.getElementById('text').value.trim();
                if (!text) {
                    errors.push('Vui lòng nhập văn bản');
                }
                break;
            case 'vcard':
                const name = document.getElementById('vcardName').value.trim();
                if (!name) {
                    errors.push('Vui lòng nhập họ tên');
                }
                break;
        }

        return errors;
    }

    isValidURL(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    showError(message) {
        // Create error notification
        const notification = document.createElement('div');
        notification.className = 'error-notification';
        notification.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ef4444;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(239, 68, 68, 0.3);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    showSuccess(message) {
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        `;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    generateQRData() {
        switch (this.currentQRType) {
            case 'wifi':
                const ssid = document.getElementById('ssid').value.trim();
                const password = document.getElementById('password').value.trim();
                const encryption = document.getElementById('encryption').value;
                return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
            
            case 'url':
                const url = document.getElementById('url').value.trim();
                return url;
            
            case 'text':
                const text = document.getElementById('text').value.trim();
                return text;
            
            case 'vcard':
                const name = document.getElementById('vcardName').value.trim();
                const phone = document.getElementById('vcardPhone').value.trim();
                const email = document.getElementById('vcardEmail').value.trim();
                const company = document.getElementById('vcardCompany').value.trim();
                
                let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}`;
                if (phone) vcard += `\nTEL:${phone}`;
                if (email) vcard += `\nEMAIL:${email}`;
                if (company) vcard += `\nORG:${company}`;
                vcard += '\nEND:VCARD';
                
                return vcard;
            
            default:
                return '';
        }
    }

    updateQRStyling() {
        const foregroundColor = document.getElementById('foregroundColor').value;
        const backgroundColor = document.getElementById('backgroundColor').value;
        const qrStyle = document.getElementById('qrStyle').value;
        const eyeStyle = document.getElementById('eyeStyle').value;
        const size = document.getElementById('qrSize').value;

        this.qrStyling.update({
            width: parseInt(size),
            height: parseInt(size),
            dotsOptions: {
                color: foregroundColor,
                type: qrStyle
            },
            backgroundOptions: {
                color: backgroundColor
            },
            cornersSquareOptions: {
                type: eyeStyle
            },
            cornersDotOptions: {
                type: eyeStyle
            }
        });
    }

    async generateQR() {
        const errors = this.validateForm();
        if (errors.length > 0) {
            this.showError(errors[0]);
            return;
        }

        const generateBtn = document.getElementById('generateBtn');
        const originalText = generateBtn.innerHTML;
        
        // Show loading state
        generateBtn.innerHTML = '<div class="loading"></div> Đang tạo...';
        generateBtn.disabled = true;

        try {
            const data = this.generateQRData();
            
            // Update QR styling
            this.updateQRStyling();
            
            // Generate QR code
            this.qrStyling.update({ data });
            
            // Display QR code
            const qrDisplay = document.getElementById('qrDisplay');
            qrDisplay.innerHTML = '';
            this.qrStyling.append(qrDisplay);
            
            // Enable download button
            document.getElementById('downloadBtn').disabled = false;
            
            // Add success animation
            qrDisplay.classList.add('success');
            setTimeout(() => qrDisplay.classList.remove('success'), 600);
            
            this.showSuccess('Mã QR đã được tạo thành công!');
            
        } catch (error) {
            console.error('Error generating QR code:', error);
            this.showError('Có lỗi xảy ra khi tạo mã QR');
        } finally {
            // Restore button state
            generateBtn.innerHTML = originalText;
            generateBtn.disabled = false;
        }
    }

    clearQRDisplay() {
        const qrDisplay = document.getElementById('qrDisplay');
        qrDisplay.innerHTML = `
            <div class="qr-placeholder">
                <i class="fas fa-qrcode"></i>
                <p>Mã QR sẽ xuất hiện ở đây</p>
            </div>
        `;
        document.getElementById('downloadBtn').disabled = true;
    }

    async downloadQR() {
        if (!this.qrStyling) {
            this.showError('Chưa có mã QR để tải xuống');
            return;
        }

        try {
            // Create download options
            const downloadOptions = {
                extension: 'png',
                name: `wifiqr-${this.currentQRType}-${Date.now()}`
            };

            // Download the QR code
            await this.qrStyling.download(downloadOptions);
            this.showSuccess('Mã QR đã được tải xuống thành công!');
            
        } catch (error) {
            console.error('Error downloading QR code:', error);
            this.showError('Có lỗi xảy ra khi tải xuống mã QR');
        }
    }
}

// Add CSS for notifications
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new WiFiQR();
});

// Add some additional utility functions
window.addEventListener('load', () => {
    // Preload QR code styling library
    if (typeof QRCodeStyling !== 'undefined') {
        console.log('WiFiQR Application loaded successfully!');
    }
});

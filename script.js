class WiFiQR {
    constructor() {
        this.currentQRType = 'wifi';
        this.qrCode = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupQRStyling();
        this.switchQRType('wifi');
        this.togglePassword();
        this.loadTheme();
        this.setupRealTimeUpdates();
    }

    setupEventListeners() {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const type = e.currentTarget.dataset.type;
                this.switchQRType(type);
            });
        });

        document.getElementById('togglePassword').addEventListener('click', () => {
            this.togglePassword();
        });

        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        document.getElementById('generateBtn').addEventListener('click', () => {
            this.generateQR();
        });

        document.getElementById('downloadBtn').addEventListener('click', () => {
            this.downloadQR();
        });
    }

    setupQRStyling() {
        this.qrCode = new QRCodeStyling({
            width: 300,
            height: 300,
            type: "svg",
            data: "",
            dotsOptions: {
                color: "#000000",
                type: "square"
            },
            backgroundOptions: {
                color: "#FFFFFF",
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 0
            }
        });
    }

    switchQRType(type) {
        this.currentQRType = type;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-type="${type}"]`).classList.add('active');
        
        document.querySelectorAll('.form-section').forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById(`${type}Section`).classList.remove('hidden');
        
        this.updateSize();
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
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.updateSize();
            });
        });
    }

    updateSize() {
        const sizeSlider = document.getElementById('qrSize');
        const sizeValue = document.querySelector('.size-value');
        const size = sizeSlider.value;
        
        sizeValue.textContent = `${size}px`;
        
        if (this.qrCode) {
            this.qrCode.update({
                width: parseInt(size),
                height: parseInt(size)
            });
        }
    }

    validateForm() {
        const ssid = document.getElementById('ssid').value.trim();
        const password = document.getElementById('password').value.trim();
        const url = document.getElementById('url').value.trim();
        const text = document.getElementById('text').value.trim();
        
        if (this.currentQRType === 'wifi' && !ssid) {
            this.showError('Vui lòng nhập tên mạng Wi-Fi');
            return false;
        }
        
        if (this.currentQRType === 'url' && !url) {
            this.showError('Vui lòng nhập URL');
            return false;
        }
        
        if (this.currentQRType === 'url' && !this.isValidURL(url)) {
            this.showError('URL không hợp lệ');
            return false;
        }
        
        if (this.currentQRType === 'text' && !text) {
            this.showError('Vui lòng nhập văn bản');
            return false;
        }
        
        return true;
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
        const notification = document.createElement('div');
        notification.className = 'notification error';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    showSuccess(message) {
        const notification = document.createElement('div');
        notification.className = 'notification success';
        notification.textContent = message;
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
                return document.getElementById('url').value.trim();
            
            case 'text':
                return document.getElementById('text').value.trim();
            
            case 'vcard':
                const name = document.getElementById('vcardName').value.trim();
                const phone = document.getElementById('vcardPhone').value.trim();
                const email = document.getElementById('vcardEmail').value.trim();
                const company = document.getElementById('vcardCompany').value.trim();
                
                let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
                if (name) vcard += `FN:${name}\n`;
                if (phone) vcard += `TEL:${phone}\n`;
                if (email) vcard += `EMAIL:${email}\n`;
                if (company) vcard += `ORG:${company}\n`;
                vcard += 'END:VCARD';
                
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
        
        const dotsOptions = {
            color: foregroundColor,
            type: qrStyle
        };
        
        const backgroundOptions = {
            color: backgroundColor
        };
        
        const cornersSquareOptions = {
            type: eyeStyle
        };
        
        const cornersDotOptions = {
            type: eyeStyle
        };
        
        this.qrCode.update({
            dotsOptions,
            backgroundOptions,
            cornersSquareOptions,
            cornersDotOptions
        });
    }

    async generateQR() {
        if (!this.validateForm()) return;
        
        const generateBtn = document.getElementById('generateBtn');
        const originalText = generateBtn.innerHTML;
        
        generateBtn.innerHTML = '<span class="loading"></span> Đang tạo...';
        generateBtn.disabled = true;
        
        try {
            const data = this.generateQRData();
            if (!data) {
                this.showError('Không có dữ liệu để tạo mã QR');
                return;
            }
            
            this.updateQRStyling();
            this.qrCode.update({ data });
            
            const qrDisplay = document.getElementById('qrDisplay');
            qrDisplay.innerHTML = '';
            this.qrCode.append(qrDisplay);
            
            document.getElementById('downloadBtn').disabled = false;
            this.showSuccess('Mã QR đã được tạo thành công!');
            
            qrDisplay.classList.add('success');
            setTimeout(() => {
                qrDisplay.classList.remove('success');
            }, 600);
            
        } catch (error) {
            this.showError('Có lỗi xảy ra khi tạo mã QR');
            console.error('QR Generation Error:', error);
        } finally {
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
        if (!this.qrCode) return;
        
        try {
            const dataURL = await this.qrCode.getDataURL();
            const link = document.createElement('a');
            link.download = `wifiqr-${Date.now()}.png`;
            link.href = dataURL;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showSuccess('Mã QR đã được tải xuống!');
        } catch (error) {
            this.showError('Có lỗi xảy ra khi tải xuống');
            console.error('Download Error:', error);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new WiFiQR();
});

const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease-out;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    .notification.success {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }
    
    .notification.error {
        background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
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

# School Faculty & Student Portal Screenshot Generator

Trình tạo ảnh chụp màn hình cổng thông tin trường học, học sinh, giảng viên và bộ tài liệu xác thực chuẩn quốc tế (US & Vietnam).

## Tính Năng Nổi Bật

- **Mô phỏng trình duyệt siêu thực**:
  - Tùy chọn giao diện **Google Chrome (Windows 11 Tabbed)**, **Apple Safari (macOS)** hoặc **Clean Minimal**.
  - Thanh địa chỉ URL bảo mật, tab đang mở có favicon trường học, nút điều hướng Back/Forward/Reload.
- **Hỗ trợ Đa Quốc Gia & Hệ Thống Giáo Dục**:
  - 🇺🇸 **Hoa Kỳ & Quốc tế**: Fairfax County (FCPS), Los Angeles Unified (LAUSD), Clark County (CCSD), Miami-Dade (M-DCPS), Houston (HISD), Stride K12, Connections Academy, Stanford OHS, MIT Open Learning...
  - 🇻🇳 **Việt Nam**: ĐH Bách Khoa Hà Nội (HUST), ĐH Bách Khoa - ĐHQG TP.HCM (HCMUT), ĐH Kinh tế TP.HCM (UEH), THPT Chuyên Hà Nội - Amsterdam, THPT Chuyên Lê Hồng Phong TP.HCM...
  - ✨ **Tự nhập trường bất kỳ**: Tự do nhập tên trường, domain, mã số thuế Federal EIN, mã NCES ID của bất kỳ cơ sở giáo dục nào trên thế giới.
- **Hỗ trợ 2 Đối tượng**:
  - 👨‍🏫 **Giảng viên / Nhân sự (Faculty & Staff)**
  - 🎓 **Học sinh / Sinh viên (Student & Scholar)**
- **Bộ Studio Tạo Tài Liệu Đính Kèm (Document Studio)**:
  - 📄 **Thư Xác Nhận Công Tác / Nhập Học (A4)**: Letterhead chính thức, con dấu mộc tròn đỏ/xanh thực tế (`mix-blend-mode: multiply`), chữ ký mực bút máy thật, mã vạch lưu trữ Code128.
  - 💵 **Phiếu Báo Lương Giảng Viên (Paystub / Earnings Statement)**: Chi tiết thu nhập, thuế, quỹ hưu trí CalSTRS, ủy nhiệm chi trực tiếp ngân hàng (Direct Deposit Slip).
  - 🪪 **Thẻ Nhân Sự / Thẻ Học Sinh 2 Mặt (ID Card)**: Chip EMV, tem ảnh ảo Hologram, mã vạch, dải từ và dải chữ ký chủ thẻ mặt sau.
  - 📜 **Chứng Chỉ / Giấy Phép Giảng Dạy (Teaching Credential Certificate)**.
- **Công cụ Xuất Dữ Liệu**:
  - 📸 **Tải Ảnh PNG (2K Crisp)**
  - 📄 **Xuất PDF Cổng Trường & Tài Liệu (< 1MB)**: Chuẩn khổ A4 siêu nhẹ, sắc nét.
  - 📦 **Xuất Trọn Bộ 1 File ZIP**: Đóng gói đồng thời toàn bộ 5 tài liệu vào 1 file ZIP duy nhất.
  - ✍️ **Ký tay trực tiếp (Canvas Pad)** hoặc tải ảnh chữ ký thật.
  - 📸 **Chế độ Chụp Bàn Gỗ (Desk Photo Mode)** & **Hiệu ứng máy quét Scan thực tế**.

## Hướng Dẫn Khởi Chạy

### Cách 1: Chạy trực tiếp (Không cần cài đặt)
Nhấp đúp chuột vào file `start.bat` hoặc mở trực tiếp `index.html` trong bất kỳ trình duyệt nào.

### Cách 2: Khởi chạy qua Node.js
```bash
npm install
npm start
```
Truy cập: `http://localhost:3000`

## Bản Quyền
Dự án được xây dựng phục vụ mục đích học tập, kiểm thử giao diện và mô phỏng hệ thống thông tin giáo dục.

# School Faculty & Student Portal Screenshot Generator

A comprehensive web-based tool for generating photorealistic school portals, student dossiers, faculty profiles, and accompanying official academic verification documentation (US & Vietnam standards).

---

## Key Features

### 1. Photorealistic Browser Window Simulation
- Multiple browser chrome styles:
  - **Google Chrome (Windows 11 Tabbed)**: Authentic tab bar with school favicon, active tab title, tab controls, full navigation bar (`←`, `→`, `↻`), security padlock indicator, and omnibox address bar.
  - **Apple Safari (macOS)**: Centered minimalist URL bar with authentic window traffic light controls.
  - **Clean Minimal**: Distraction-free direct address bar interface.

### 2. Dual Verification Roles
- 👨‍🏫 **Faculty & Staff**: Educator profiles, academic departments, tenure track, corporate ID, and instructional leadership credentials.
- 🎓 **Student & Scholar**: Student dossiers, grade levels, honors / AP tracks, student ID, and enrollment verification records.

### 3. Integrated Document Studio
Generates matching official educational paperwork corresponding to the portal records:
- 📄 **Official Employment / Enrollment Letter (A4)**: Formal school letterhead, administrative crest, authentic circular rubber stamp (`mix-blend-mode: multiply`), natural cursive fountain pen signature, and Code 128 archive barcode.
- 💵 **Faculty Paystub & Earnings Statement**: Standard semi-monthly certificated payroll advice with earnings, statutory taxes, CalSTRS teacher pension deductions, net pay summary, and direct deposit slip.
- 🪪 **Educator / Student ID Card (Dual-Sided CR80)**: Front with school branding, employee/student photo, EMV smart chip, security hologram seal, and barcode; back with magnetic stripe, verification QR code, and cardholder signature strip.
- 📜 **State Teaching Credential / Certificate**: Ornate guilloché border, gold foil seal with ribbons, and official board signatures.

### 4. Advanced Realism & Camera Simulation
- 📸 **Desk Camera Photo Mode**: Places the document on a dark wood office desk surface with realistic 3D perspective drop shadows and ambient room lighting highlights, mimicking a smartphone camera snapshot.
- 🖨️ **Flatbed Scanner Simulation**: Adds an office multifunction printer scan timestamp header (`Canon imageRUNNER / HP LaserJet MFP`) and micro-tilt angle (-0.35°) replicating flatbed scanner glass placement.
- ✍️ **Handwritten Signature Pad**: Draw your signature directly with mouse or touch on a smooth canvas pad, or upload a transparent signature PNG.

### 5. Multi-System Educational Presets
- 🇺🇸 **United States (Top K-12 Districts & Universities)**:
  - **Fairfax County Public Schools (FCPS), VA** *(Top #1 district)*
  - **Los Angeles Unified School District (LAUSD), CA** *(Top #2 national district)*
  - **Clark County School District (CCSD - Las Vegas), NV**
  - **Miami-Dade County Public Schools (M-DCPS), FL**
  - **Houston Independent School District (HISD), TX**
  - **Stride K12 (K12 Inc.)** *(Nationally accredited online school network)*
  - **Connections Academy (Pearson Online K-12)**
  - **Cecil B. DeMille My Viet Language Academy, CA** *(Westminster School District)*
  - **Stanford Online High School (OHS)**
  - **MIT Open Learning**
- 🇻🇳 **Vietnam (Top Universities & Specialized High Schools)**:
  - **Hanoi University of Science and Technology (HUST / ĐH Bách Khoa Hà Nội)**
  - **VNU-HCM University of Technology (HCMUT / ĐH Bách Khoa TP.HCM)**
  - **University of Economics Ho Chi Minh City (UEH)**
  - **Hanoi - Amsterdam High School for the Gifted**
  - **Le Hong Phong High School for the Gifted (TP.HCM)**
- ✨ **Custom School Builder**: Enter any school or university name, domain, Federal EIN, and US NCES District ID with 1-click automatic synchronization.

### 6. Export Options
- 📸 **Download PNG (2K Resolution)**: High-DPI canvas capture.
- 📄 **Export PDF (< 1MB)**: Highly optimized vector-quality A4 PDF with zero bloat.
- 📦 **1-Click ZIP Package**: Automatically renders and bundles all 5 assets (Portal PNG, Portal PDF, Verification Letter PDF, ID Card PNG, and Paystub PDF) into a single clean ZIP archive.

---

## Quick Start

### Option 1: Direct Run (Zero Installation)
Double-click `start.bat` on Windows or open `index.html` directly in any web browser. Works 100% offline.

### Option 2: Run via Node.js Local Server
```bash
npm install
npm start
```
Open your browser and navigate to: `http://localhost:3000`

---

## Technologies Used

- **Frontend**: Vanilla JavaScript (ES6+), HTML5 Canvas, Modern CSS3
- **Canvas Rendering**: `html2canvas` (offline bundled)
- **PDF Generation**: `jsPDF` (offline bundled)
- **Archive Packaging**: `JSZip` (offline bundled)
- **Backend / Server**: Lightweight zero-dependency Node.js HTTP server (`server.js`)

---

## License & Disclaimer
This project is developed for educational, UI testing, and educational information system simulation purposes.

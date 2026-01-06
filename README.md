# 🌐 Wahyu Kurnia - Personal Branding Site

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

Situs personal branding saya yang dibangun dengan **Astro** dan di-deploy secara otomatis menggunakan **GitHub Actions** ke VPS.

🔗 **Live:** [wahyukurnia.com](https://wahyukurnia.com)

---

## ✨ Fitur

- ⚡ **Blazing Fast** - Static site generation dengan Astro
- 🎨 **Multi-Theme** - 7+ tema warna dengan dark/light mode
- 📱 **Responsive** - Tampilan optimal di semua perangkat
- 🔍 **SEO Optimized** - Meta tags, structured data, sitemap
- 🖨️ **Print Friendly** - Bisa dicetak sebagai CV/Resume
- 🚀 **Auto Deploy** - CI/CD dengan GitHub Actions

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | [Astro](https://astro.build/) v5.x |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + DaisyUI |
| Icons | [Iconify](https://iconify.design/) |
| Animation | [GSAP](https://greensock.com/gsap/) |
| Language | TypeScript |
| Deployment | GitHub Actions + VPS (Nginx) |

---

## 📁 Struktur Proyek

```
branding-site/
├── src/
│   ├── components/     # Komponen UI reusable
│   ├── layouts/        # Layout templates
│   ├── pages/          # Halaman (file-based routing)
│   └── globals.css     # Design system & themes
├── public/             # Static assets
├── cv.json             # Data konten (CV/Portfolio)
├── .github/workflows/  # GitHub Actions CI/CD
└── dist/               # Build output (generated)
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x atau lebih baru
- npm atau pnpm

### Development

```bash
# Clone repository
git clone https://github.com/wahyukurniaaaa/branding-site.git
cd branding-site

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321) di browser.

### Production Build

```bash
# Build static files
npm run build

# Preview hasil build
npm run preview
```

Hasil build ada di folder `dist/`.

---

## ⚙️ Konfigurasi

### Data Konten

Edit file `cv.json` untuk mengubah:
- Informasi personal (nama, email, lokasi)
- Pengalaman kerja
- Skills & teknologi
- Projects
- Profil sosial media

### Tema

Tema dapat diubah melalui `cv.json`:
```json
{
  "basics": {
    "theme": "platinum"  // blue, red, green, cyber, sunset, pink
  }
}
```

---

## 🔄 Deployment (CI/CD)

Situs ini menggunakan **GitHub Actions** untuk auto-deploy ke VPS.

### Workflow

1. Push ke branch `master`
2. GitHub Actions otomatis:
   - Build project dengan Astro
   - Deploy ke VPS via SSH/Rsync

### Setup Secrets

Tambahkan secrets berikut di repository GitHub:

| Secret | Deskripsi |
|--------|-----------|
| `SSH_KEY` | Private key untuk SSH ke VPS |
| `HOST` | IP address atau domain VPS |
| `USER` | Username SSH di VPS |

---

## 📝 Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run astro` | Akses Astro CLI |

---

## 📄 License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

---

## 👤 Author

**Wahyu Kurnia**

- Website: [wahyukurnia.com](https://wahyukurnia.com)
- GitHub: [@wahyukurniaaaa](https://github.com/wahyukurniaaaa)
- Email: me@wahyukurnia.com

---

⭐ Jika project ini bermanfaat, berikan star di GitHub!

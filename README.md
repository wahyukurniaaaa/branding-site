# 🌐 Wahyu Kurnia - Personal Branding Site

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

Situs personal branding saya yang dibangun dengan **Astro** dan di-deploy secara otomatis menggunakan **GitHub Actions** ke VPS.

🔗 **Live:** [wahyukurnia.com](https://wahyukurnia.com)

---

## ✨ Fitur

- ⚡ **Blazing Fast** - Static site generation dengan Astro v5.x
- 🎨 **Multi-Theme** - 7 tema warna (platinum, blue, red, green, cyber, sunset, pink) dengan dark/light mode
- 📱 **Responsive** - Tampilan optimal di semua perangkat
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data (JSON-LD), sitemap otomatis
- 🖨️ **Print Friendly** - Bisa dicetak sebagai CV/Resume dengan layout khusus print
- 🚀 **Auto Deploy** - CI/CD dengan GitHub Actions ke VPS
- ⌨️ **Keyboard Shortcuts** - Command palette dengan `Ctrl+K` untuk navigasi cepat
- 🖥️ **Neovim Mode** - UI interaktif dengan tema Neovim untuk pengalaman developer
- 📝 **Blog System** - Mendukung MDX untuk penulisan blog dengan komponen interaktif
- 📡 **RSS Feed** - Feed otomatis untuk blog posts
- 🎭 **Smooth Animations** - GSAP + custom CSS animations dengan slide-enter effect
- 🎯 **Custom Cursor** - Cursor animasi khusus pada desktop
- 🌈 **Background Art** - Efek visual dinamis di background

---

## 🛠️ Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | [Astro](https://astro.build/) v5.x |
| UI Library | [React](https://react.dev/) v19.x |
| Styling | [Tailwind CSS](https://tailwindcss.com/) v3.x + [DaisyUI](https://daisyui.com/) |
| Icons | [Iconify](https://iconify.design/) (MDI, Remix Icons, Simple Icons) |
| Animation | [GSAP](https://greensock.com/gsap/) |
| Language | TypeScript |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Build | Static HTML (SSG) |
| Deployment | GitHub Actions + VPS (Nginx) |

---

## 📁 Struktur Proyek

```
branding-site/
├── src/
│   ├── components/         # Komponen UI reusable
│   │   ├── sections/       # Hero, About, Experience, Skills, Projects, Education
│   │   ├── neovim/         # Komponen Neovim-themed UI
│   │   ├── profileImage/   # Komponen profile image
│   │   ├── BackgroundArt   # Efek visual background
│   │   ├── KeyboardManager # Keyboard shortcuts (Ctrl+K)
│   │   └── ThemeSwitch     # Multi-theme switcher
│   ├── layouts/            # Layout templates
│   │   ├── Layout.astro    # Layout utama dengan SEO
│   │   ├── BlogLayout.astro# Layout untuk blog posts
│   │   └── Neovim.astro    # Layout Neovim mode
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Homepage
│   │   ├── blog/           # Blog system dengan MDX
│   │   ├── neovim/         # Neovim mode pages (about, projects, contact, help)
│   │   └── rss.xml.js      # RSS feed generator
│   ├── content/            # Content collections (blog posts)
│   ├── lib/                # Utility functions
│   ├── scripts/            # Client-side scripts
│   └── globals.css         # Design system & 7 tema warna
├── public/                 # Static assets (favicon, images)
├── cv.json                 # Data konten (CV/Portfolio)
├── astro.config.mjs        # Konfigurasi Astro
├── tailwind.config.mjs     # Konfigurasi Tailwind + DaisyUI
├── .github/workflows/      # GitHub Actions CI/CD
└── dist/                   # Build output (generated)
```

---

## 🎨 Tema Tersedia

| Tema | Mode Light | Mode Dark |
|------|------------|-----------|
| `platinum` | Ultra premium gray | Sophisticated dark |
| `blue` | Professional blue | Deep blue |
| `red` | Vibrant red | Warm red |
| `green` | Fresh green | Forest green |
| `cyber` | Yellow-red | Cyan-neon |
| `sunset` | Pink-orange gradient | Electric twilight |
| `pink` | - | Hot pink |

---

## 📄 Halaman

| Route | Deskripsi |
|-------|-----------|
| `/` | Homepage dengan Hero, About, Experience, Skills, Projects |
| `/blog` | Daftar blog posts |
| `/blog/[slug]` | Detail blog post (MDX) |
| `/neovim` | Neovim mode homepage |
| `/neovim/about` | About page (Neovim style) |
| `/neovim/projects` | Projects page (Neovim style) |
| `/neovim/contact` | Contact page (Neovim style) |
| `/neovim/help` | Help/keybindings page |
| `/rss.xml` | RSS feed untuk blog |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 22.x atau lebih baru
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

Hasil build ada di folder `dist/`, termasuk sitemap otomatis di `sitemap-index.xml`.

---

## ⚙️ Konfigurasi

### Data Konten

Edit file `cv.json` untuk mengubah:
- Informasi personal (nama, email, lokasi, summary)
- Pengalaman kerja (responsibilities, skills)
- Pendidikan
- Skills & teknologi (dengan icon Iconify)
- Projects
- Profil sosial media (GitHub, LinkedIn, dll)
- Bahasa yang dikuasai

### Tema

Tema dapat diubah melalui `cv.json`:
```json
{
  "basics": {
    "theme": "platinum"
  }
}
```

Opsi tema: `platinum`, `blue`, `red`, `green`, `cyber`, `sunset`, `pink`

### SEO

SEO dikonfigurasi otomatis di `Layout.astro`:
- Meta tags (title, description, keywords)
- Open Graph untuk Facebook/LinkedIn
- Twitter Cards
- Structured Data (JSON-LD) untuk Google
- Sitemap otomatis via `@astrojs/sitemap`
- Canonical URLs

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Aksi |
|----------|------|
| `Ctrl+K` | Buka command palette |
| `Escape` | Tutup command palette |

---

## 🔄 Deployment (CI/CD)

Situs ini menggunakan **GitHub Actions** untuk auto-deploy ke VPS.

### Workflow

1. Push ke branch `master`
2. GitHub Actions otomatis:
   - Build project dengan Astro
   - Generate sitemap
   - Deploy ke VPS via SSH/Rsync

### Setup Secrets

Tambahkan secrets berikut di repository GitHub:

| Secret | Deskripsi |
|--------|-----------|
| `SSH_KEY` | Private key untuk SSH ke VPS |
| `HOST` | IP address atau domain VPS |
| `USER` | Username SSH di VPS |

### Alternative Deployment

```bash
# Deploy ke Vercel
npm run deploy:vercel

# Deploy ke Cloudflare Pages
npm run deploy:cloudflare
```

---

## 📝 Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run astro` | Akses Astro CLI |
| `npm run deploy:vercel` | Deploy ke Vercel |
| `npm run deploy:cloudflare` | Deploy ke Cloudflare Pages |

---

## 📄 License

MIT License - Silakan gunakan dan modifikasi sesuai kebutuhan.

---

## 👤 Author

**Wahyu Kurnia Prambudi**

- Website: [wahyukurnia.com](https://wahyukurnia.com)
- GitHub: [@wahyukurniaaaa](https://github.com/wahyukurniaaaa)
- LinkedIn: [Wahyu Kurnia Prambudi](https://www.linkedin.com/in/wahyu-kurnia-prambudi/)
- Email: me@wahyukurnia.com

---

⭐ Jika project ini bermanfaat, berikan star di GitHub!

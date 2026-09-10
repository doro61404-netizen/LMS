PROJECT PLAN — PREMIUM COMPANY WEBSITE

1. Tujuan Project

Buat website perusahaan modern, premium, unik, dan profesional.

Website harus memberikan kesan:

- terpercaya
- modern
- inovatif
- profesional
- cepat
- premium
- berbeda dari website perusahaan template biasa

Website harus memiliki storytelling yang kuat dan visual hierarchy yang jelas.

Jangan menggunakan desain corporate generik.

Jangan memenuhi halaman dengan terlalu banyak card, gradient, animasi, atau dekorasi yang tidak memiliki fungsi.

---

2. Konsep Website

Gunakan konsep:

"Digital-first company experience"

Website tidak hanya memperkenalkan perusahaan, tetapi juga menjelaskan:

- siapa perusahaan
- masalah yang diselesaikan
- solusi
- produk/jasa
- cara bekerja
- hasil/proyek
- keunggulan
- tim
- kontak

Homepage harus terasa seperti sebuah perjalanan:

Attention
   ↓
   Who We Are
      ↓
      Problem
         ↓
         Solution
            ↓
            Products / Services
               ↓
               Work / Case Studies
                  ↓
                  Why Us
                     ↓
                     Team
                        ↓
                        Contact

                        ---

                        3. Target

                        Target pengguna:

                        - calon pelanggan
                        - calon partner
                        - investor
                        - kandidat karyawan
                        - masyarakat umum

                        Website harus mudah dipahami meskipun pengunjung belum mengenal perusahaan.

                        ---

                        4. Teknologi

                        Versi pertama gunakan:

                        - HTML5
                        - CSS3
                        - JavaScript ES6+
                        - Git
                        - GitHub

                        Gunakan library eksternal secara minimal.

                        Untuk animasi, boleh menggunakan:

                        - CSS animation
                        - Intersection Observer
                        - Web Animations API

                        Jangan menggunakan library besar hanya untuk animasi sederhana.

                        ---

                        5. Struktur Project

                        Gunakan struktur modular:

                        company-website/
                        │
                        ├── index.html
                        ├── about.html
                        ├── services.html
                        ├── projects.html
                        ├── careers.html
                        ├── contact.html
                        ├── privacy.html
                        ├── 404.html
                        │
                        ├── assets/
                        │   ├── css/
                        │   │   ├── reset.css
                        │   │   ├── variables.css
                        │   │   ├── global.css
                        │   │   ├── components.css
                        │   │   ├── animations.css
                        │   │   └── responsive.css
                        │   │
                        │   ├── js/
                        │   │   ├── main.js
                        │   │   ├── navigation.js
                        │   │   ├── animations.js
                        │   │   ├── cursor.js
                        │   │   └── forms.js
                        │   │
                        │   ├── images/
                        │   └── icons/
                        │
                        └── README.md

                        ---

                        6. Design Direction

                        Gunakan gaya visual:

                        Minimal + Editorial + Futuristic + Premium

                        Karakteristik:

                        - whitespace besar
                        - typography besar
                        - grid layout
                        - asymmetric composition
                        - visual hierarchy kuat
                        - subtle motion
                        - micro-interactions
                        - clean navigation

                        Hindari:

                        - terlalu banyak rounded card
                        - gradient berlebihan
                        - shadow berlebihan
                        - icon berlebihan
                        - stock-photo corporate yang terlihat generik
                        - animasi yang mengganggu readability

                        ---

                        7. Color System

                        Buat design token menggunakan CSS variables.

                        Contoh:

                        :root {
                            --bg-primary: ...;
                                --bg-secondary: ...;
                                    --text-primary: ...;
                                        --text-secondary: ...;
                                            --accent: ...;
                                                --border: ...;
                                                }

                                                Gunakan maksimal:

                                                - 1 primary background
                                                - 1 secondary background
                                                - 1 primary text
                                                - 1 secondary text
                                                - 1 accent

                                                Accent dapat digunakan untuk CTA dan elemen penting.

                                                ---

                                                8. Typography

                                                Gunakan font modern dan mudah dibaca.

                                                Hierarki:

                                                Hero Heading
                                                Very Large

                                                Section Heading
                                                Large

                                                Body
                                                Readable

                                                Caption
                                                Small

                                                Gunakan ukuran responsive menggunakan:

                                                clamp()

                                                Jangan membuat text terlalu kecil di mobile.

                                                ---

                                                9. Navbar

                                                Desktop:

                                                ┌────────────────────────────────────────────────┐
                                                │ LOGO      About Services Work Careers   Contact│
                                                └────────────────────────────────────────────────┘

                                                Navbar harus:

                                                - sticky
                                                - berubah ketika scrolling
                                                - memiliki active section
                                                - responsive
                                                - accessible

                                                Mobile:

                                                LOGO                         MENU

                                                Menu mobile menggunakan drawer/overlay.

                                                ---

                                                10. HERO SECTION

                                                Hero harus menjadi bagian paling kuat.

                                                Contoh struktur:

                                                BUILDING WHAT'S NEXT.

                                                We create digital products,
                                                experiences, and systems
                                                for ambitious organizations.

                                                [ Explore Our Work ]
                                                [ Talk to Us ]

                                                              [ Dynamic Visual ]

                                                              Gunakan visual yang unik.

                                                              Jangan menggunakan hero image generik.

                                                              Bisa menggunakan:

                                                              - abstract geometry
                                                              - animated grid
                                                              - interactive typography
                                                              - generative particles
                                                              - product visualization
                                                              - animated company mark

                                                              Animasi harus ringan.

                                                              ---

                                                              11. COMPANY INTRO

                                                              Setelah hero:

                                                              WE ARE

                                                              A digital company focused on
                                                              building meaningful technology
                                                              for real-world problems.

                                                              Gunakan text besar dengan efek reveal saat scrolling.

                                                              ---

                                                              12. VALUE / STATISTICS

                                                              Tampilkan angka penting:

                                                              10+
                                                              Years Experience

                                                              50+
                                                              Projects

                                                              20+
                                                              Clients

                                                              12
                                                              Countries

                                                              Gunakan count-up animation hanya ketika section terlihat.

                                                              Jangan mengarang data perusahaan.

                                                              Gunakan placeholder yang jelas jika data asli belum tersedia:

                                                              XX+
                                                              Projects

                                                              ---

                                                              13. SERVICES SECTION

                                                              Tampilkan layanan utama:

                                                              01
                                                              Digital Products

                                                              02
                                                              Web Development

                                                              03
                                                              Mobile Development

                                                              04
                                                              Cloud & Infrastructure

                                                              05
                                                              Cyber Security

                                                              06
                                                              Data & AI

                                                              Jangan membuat sekadar grid card.

                                                              Gunakan interactive list.

                                                              Ketika user hover:

                                                              Web Development
                                                              → visual preview berubah

                                                              Pada mobile, gunakan accordion atau stacked sections.

                                                              ---

                                                              14. UNIQUE INTERACTION

                                                              Buat satu signature interaction.

                                                              Contoh:

                                                              User hover pada daftar layanan:

                                                              Digital Products
                                                              Web Development
                                                              Cloud
                                                              Security
                                                              AI

                                                              Visual di sisi kanan berubah sesuai item.

                                                              Desktop:

                                                              ┌──────────────────────┬──────────────────────┐
                                                              │ SERVICES             │                      │
                                                              │                      │    Dynamic Visual    │
                                                              │ Digital Products     │                      │
                                                              │ Web Development  →   │                      │
                                                              │ Cloud                │                      │
                                                              │ Security             │                      │
                                                              │ AI                   │                      │
                                                              └──────────────────────┴──────────────────────┘

                                                              Jangan membuat animasi berat.

                                                              ---

                                                              15. WORK / PROJECTS

                                                              Buat bagian portfolio dengan storytelling.

                                                              Setiap project menampilkan:

                                                              Project Name
                                                              Industry
                                                              Challenge
                                                              Solution
                                                              Result

                                                              [ View Case Study ]

                                                              Gunakan layout besar:

                                                              ┌─────────────────────────────────────────┐
                                                              │                                         │
                                                              │              PROJECT IMAGE              │
                                                              │                                         │
                                                              └─────────────────────────────────────────┘

                                                              Project Name
                                                              Description

                                                              Gunakan 3–6 project.

                                                              Jangan membuat data project palsu tanpa label.

                                                              ---

                                                              16. CASE STUDY PAGE

                                                              Untuk setiap project:

                                                              Project
                                                              ↓
                                                              Challenge
                                                              ↓
                                                              Strategy
                                                              ↓
                                                              Solution
                                                              ↓
                                                              Process
                                                              ↓
                                                              Technology
                                                              ↓
                                                              Result

                                                              Tampilkan metric jika data tersedia.

                                                              Contoh:

                                                              +35%
                                                              Conversion

                                                              -42%
                                                              Load Time

                                                              Jika data belum tersedia, gunakan placeholder.

                                                              ---

                                                              17. ABOUT PAGE

                                                              Isi:

                                                              Who We Are
                                                              Mission
                                                              Vision
                                                              Values
                                                              Culture
                                                              Timeline
                                                              Leadership

                                                              Timeline:

                                                              2020 ─ Founded
                                                                    │
                                                                    2021 ─ First Product
                                                                          │
                                                                          2023 ─ Expansion
                                                                                │
                                                                                2025 ─ New Platform

                                                                                ---

                                                                                18. COMPANY VALUES

                                                                                Buat values dengan animasi halus:

                                                                                01
                                                                                Curiosity

                                                                                02
                                                                                Craft

                                                                                03
                                                                                Integrity

                                                                                04
                                                                                Impact

                                                                                Ketika user scroll, setiap value muncul satu per satu.

                                                                                ---

                                                                                19. TEAM

                                                                                Tampilkan anggota utama perusahaan.

                                                                                Card jangan terlalu template-like.

                                                                                Contoh:

                                                                                Photo

                                                                                Name
                                                                                Role

                                                                                Short description

                                                                                LinkedIn

                                                                                Hover:

                                                                                - image movement
                                                                                - metadata reveal
                                                                                - subtle overlay

                                                                                ---

                                                                                20. CAREERS

                                                                                Buat halaman lowongan:

                                                                                Careers

                                                                                Build things that matter.

                                                                                Open Positions

                                                                                Frontend Engineer
                                                                                Backend Engineer
                                                                                UI/UX Designer
                                                                                Cyber Security Engineer

                                                                                Setiap job:

                                                                                Position
                                                                                Location
                                                                                Type
                                                                                Department

                                                                                [ View Position ]

                                                                                ---

                                                                                21. CONTACT

                                                                                Buat contact section yang kuat.

                                                                                LET'S BUILD SOMETHING.

                                                                                Have a project in mind?

                                                                                [ Name ]
                                                                                [ Email ]
                                                                                [ Company ]
                                                                                [ Message ]

                                                                                [ Send Message ]

                                                                                Tampilkan juga:

                                                                                Email
                                                                                Phone
                                                                                Office
                                                                                Social Links

                                                                                Form pada versi awal dapat menggunakan frontend validation.

                                                                                Jangan berpura-pura mengirim email jika backend belum ada.

                                                                                ---

                                                                                22. FOOTER

                                                                                Footer:

                                                                                LOGO

                                                                                About
                                                                                Services
                                                                                Work
                                                                                Careers
                                                                                Contact

                                                                                Social

                                                                                Privacy
                                                                                Terms

                                                                                © 2026 Company Name

                                                                                Tambahkan miniature navigation.

                                                                                ---

                                                                                23. SCROLL ANIMATION

                                                                                Gunakan animasi:

                                                                                - fade
                                                                                - slide
                                                                                - reveal
                                                                                - image parallax ringan
                                                                                - text reveal
                                                                                - count-up

                                                                                Trigger menggunakan Intersection Observer.

                                                                                Semua animation harus memiliki:

                                                                                @media (prefers-reduced-motion: reduce)

                                                                                untuk accessibility.

                                                                                ---

                                                                                24. MICRO INTERACTION

                                                                                Tambahkan:

                                                                                - button hover
                                                                                - link underline animation
                                                                                - image scale
                                                                                - cursor feedback
                                                                                - menu transition
                                                                                - active navigation state
                                                                                - form focus
                                                                                - loading state

                                                                                Jangan menggunakan cursor custom yang menghilangkan cursor normal pada mobile.

                                                                                ---

                                                                                25. Custom Cursor

                                                                                Desktop dapat memiliki custom cursor ringan.

                                                                                Cursor:

                                                                                - mengikuti mouse
                                                                                - membesar ketika hover tombol
                                                                                - berubah ketika hover link

                                                                                Nonaktifkan pada:

                                                                                - touch device
                                                                                - reduced motion

                                                                                Jangan membuat custom cursor mengganggu usability.

                                                                                ---

                                                                                26. Page Transition

                                                                                Tambahkan transisi ringan ketika berpindah halaman.

                                                                                Jangan menggunakan animasi panjang.

                                                                                Target:

                                                                                - terasa halus
                                                                                - tidak menghambat navigasi

                                                                                ---

                                                                                27. Responsive Design

                                                                                Wajib mendukung:

                                                                                320px+
                                                                                375px
                                                                                414px
                                                                                768px
                                                                                1024px
                                                                                1280px+
                                                                                1440px+

                                                                                Prioritas:

                                                                                1. mobile
                                                                                2. tablet
                                                                                3. desktop

                                                                                Tidak boleh ada:

                                                                                - horizontal overflow
                                                                                - text terpotong
                                                                                - tombol terlalu kecil
                                                                                - navbar rusak
                                                                                - image overflow

                                                                                ---

                                                                                28. Accessibility

                                                                                Wajib:

                                                                                - semantic HTML
                                                                                - keyboard navigation
                                                                                - visible focus
                                                                                - alt text
                                                                                - labels
                                                                                - aria-label sesuai kebutuhan
                                                                                - sufficient contrast
                                                                                - reduced-motion support
                                                                                - accessible mobile menu

                                                                                Jangan menggunakan warna sebagai satu-satunya indikator.

                                                                                ---

                                                                                29. SEO

                                                                                Setiap halaman harus memiliki:

                                                                                - unique "<title>"
                                                                                - meta description
                                                                                - canonical
                                                                                - Open Graph metadata
                                                                                - semantic headings

                                                                                Tambahkan:

                                                                                robots.txt
                                                                                sitemap.xml

                                                                                Gunakan structured data jika data perusahaan nyata tersedia.

                                                                                Jangan memasukkan informasi perusahaan palsu sebagai structured data.

                                                                                ---

                                                                                30. Performance

                                                                                Target:

                                                                                - fast initial load
                                                                                - optimized images
                                                                                - lazy loading untuk gambar non-critical
                                                                                - defer JavaScript
                                                                                - minimize dependencies

                                                                                Hindari:

                                                                                - video autoplay berat
                                                                                - background image besar
                                                                                - library besar tanpa kebutuhan
                                                                                - animasi yang menghabiskan CPU

                                                                                Gunakan WebP/AVIF jika memungkinkan.

                                                                                ---

                                                                                31. Security

                                                                                Frontend:

                                                                                - jangan gunakan eval()
                                                                                - sanitasi user input
                                                                                - jangan menyimpan secrets di JavaScript
                                                                                - jangan memasukkan API key private ke frontend
                                                                                - validasi form

                                                                                Jika nanti menggunakan backend:

                                                                                - server-side validation
                                                                                - CSRF protection
                                                                                - rate limiting
                                                                                - secure headers
                                                                                - authentication yang aman

                                                                                ---

                                                                                32. 404 Page

                                                                                Buat halaman 404 yang unik.

                                                                                Contoh:

                                                                                404

                                                                                This page went somewhere else.

                                                                                [ Back Home ]

                                                                                Tetap konsisten dengan brand.

                                                                                ---

                                                                                33. Loading Experience

                                                                                Buat loading state hanya jika diperlukan.

                                                                                Jangan membuat splash screen panjang.

                                                                                User harus bisa melihat konten secepat mungkin.

                                                                                ---

                                                                                34. Content Rules

                                                                                Jangan mengarang:

                                                                                - jumlah client
                                                                                - revenue
                                                                                - tahun pengalaman
                                                                                - jumlah project
                                                                                - testimonial
                                                                                - awards
                                                                                - company history

                                                                                Gunakan placeholder yang jelas jika data asli belum tersedia.

                                                                                Semua placeholder harus mudah diganti.

                                                                                ---

                                                                                35. Configuration

                                                                                Pisahkan data perusahaan dari layout bila memungkinkan.

                                                                                Contoh:

                                                                                const company = {
                                                                                    name: "Company Name",
                                                                                        tagline: "Building What's Next",
                                                                                            email: "hello@example.com",
                                                                                            };

                                                                                            Dengan demikian nama, email, social links, dan informasi dasar mudah diganti.

                                                                                            ---

                                                                                            36. Testing

                                                                                            Uji:

                                                                                            Functional

                                                                                            - navbar
                                                                                            - mobile menu
                                                                                            - links
                                                                                            - contact form
                                                                                            - buttons
                                                                                            - scroll animation

                                                                                            Responsive

                                                                                            - 320px
                                                                                            - 375px
                                                                                            - 414px
                                                                                            - 768px
                                                                                            - 1024px
                                                                                            - 1440px

                                                                                            Accessibility

                                                                                            - keyboard
                                                                                            - screen reader semantics
                                                                                            - focus
                                                                                            - reduced motion

                                                                                            Browser

                                                                                            - Chrome
                                                                                            - Firefox
                                                                                            - Edge
                                                                                            - Safari jika tersedia

                                                                                            Performance

                                                                                            - image loading
                                                                                            - JavaScript execution
                                                                                            - layout shift
                                                                                            - animation performance

                                                                                            ---

                                                                                            37. Git Workflow

                                                                                            Gunakan commit kecil dan terstruktur.

                                                                                            Contoh:

                                                                                            chore: initialize project
                                                                                            feat: create global design system
                                                                                            feat: build responsive navigation
                                                                                            feat: create hero section
                                                                                            feat: add company introduction
                                                                                            feat: add services section
                                                                                            feat: add interactive services
                                                                                            feat: create projects section
                                                                                            feat: add case study page
                                                                                            feat: create about page
                                                                                            feat: create careers page
                                                                                            feat: create contact section
                                                                                            feat: add scroll animations
                                                                                            feat: add responsive behavior
                                                                                            fix: mobile navigation overflow
                                                                                            fix: accessibility issues
                                                                                            perf: optimize images
                                                                                            docs: update README

                                                                                            Jangan membuat satu commit besar untuk seluruh project.

                                                                                            ---

                                                                                            38. Milestone

                                                                                            Milestone 1 — Foundation

                                                                                            Buat:

                                                                                            - project structure
                                                                                            - CSS variables
                                                                                            - typography
                                                                                            - responsive system
                                                                                            - global components
                                                                                            - navbar
                                                                                            - footer

                                                                                            Milestone 2 — Homepage

                                                                                            Buat:

                                                                                            - hero
                                                                                            - company intro
                                                                                            - statistics
                                                                                            - services
                                                                                            - projects
                                                                                            - values
                                                                                            - CTA
                                                                                            - footer

                                                                                            Milestone 3 — Interactions

                                                                                            Buat:

                                                                                            - scroll reveal
                                                                                            - hover interaction
                                                                                            - services dynamic visual
                                                                                            - count-up
                                                                                            - mobile menu
                                                                                            - theme behavior jika diperlukan

                                                                                            Milestone 4 — Pages

                                                                                            Buat:

                                                                                            - About
                                                                                            - Services
                                                                                            - Projects
                                                                                            - Careers
                                                                                            - Contact
                                                                                            - 404
                                                                                            - Privacy

                                                                                            Milestone 5 — Optimization

                                                                                            - accessibility
                                                                                            - SEO
                                                                                            - performance
                                                                                            - responsive testing
                                                                                            - browser testing
                                                                                            - bug fixing

                                                                                            Milestone 6 — Deployment

                                                                                            - GitHub
                                                                                            - GitHub Pages / static hosting
                                                                                            - custom domain jika tersedia
                                                                                            - production testing

                                                                                            ---

                                                                                            39. Definition of Done

                                                                                            Project dianggap selesai ketika:

                                                                                            - Semua halaman dapat dinavigasi
                                                                                            - Responsive pada mobile dan desktop
                                                                                            - Navbar berfungsi
                                                                                            - Mobile menu berfungsi
                                                                                            - Semua CTA berfungsi
                                                                                            - Animasi berjalan dengan baik
                                                                                            - Reduced-motion didukung
                                                                                            - Tidak ada horizontal overflow
                                                                                            - Tidak ada error JavaScript pada penggunaan normal
                                                                                            - Accessibility dasar terpenuhi
                                                                                            - SEO metadata tersedia
                                                                                            - Gambar telah dioptimalkan
                                                                                            - 404 tersedia
                                                                                            - README tersedia
                                                                                            - Git history terstruktur
                                                                                            - Website dapat di-deploy sebagai static website

                                                                                            ---

                                                                                            40. Aturan untuk OpenCode

                                                                                            WAJIB:

                                                                                            1. Baca seluruh project sebelum mengubah file.
                                                                                            2. Ikuti struktur project yang sudah ada.
                                                                                            3. Kerjakan hanya milestone yang diminta.
                                                                                            4. Jangan membuat seluruh website dalam satu langkah.
                                                                                            5. Setelah setiap milestone, lakukan testing.
                                                                                            6. Jangan mengganti teknologi tanpa alasan.
                                                                                            7. Jangan menambahkan dependency besar tanpa kebutuhan.
                                                                                            8. Jangan menghapus fitur yang sudah bekerja.
                                                                                            9. Jangan membuat data perusahaan palsu.
                                                                                            10. Jangan mengklaim sesuatu sudah selesai sebelum diuji.
                                                                                            11. Prioritaskan performance dan accessibility.
                                                                                            12. Pastikan mobile experience sama seriusnya dengan desktop.
                                                                                            13. Gunakan reusable CSS/JS components bila memungkinkan.
                                                                                            14. Jangan menduplikasi kode tanpa alasan.
                                                                                            15. Jangan melakukan "git push" kecuali diminta.
                                                                                            16. Setelah menyelesaikan milestone, tampilkan:
                                                                                                - file yang dibuat/diubah
                                                                                                    - fitur yang selesai
                                                                                                        - hasil testing
                                                                                                            - masalah yang ditemukan
                                                                                                                - rekomendasi langkah berikutnya

                                                                                                                Mulai dari Milestone 1 saja.
                                                                                                                Jangan mengerjakan Milestone 2 sebelum Milestone 1 selesai dan diuji.
/**
 * Ahmad Fauzan - Web Portfolio JavaScript Engine
 * Handles project modal, category filters, dark/light theme, stats animations, and contact interactions.
 */

// Project Database - Focused on the 3 core production applications
const projectsData = [
  {
    id: "caterhub",
    title: "CaterHub — B2B Corporate Catering Marketplace Platform",
    subtitle: "Enterprise Lunch Catering & Multi-Vendor Management Platform",
    category: "laravel",
    categoryLabel: "Full-Stack Laravel",
    badge: "Featured Flagship",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "assets/img/projects/caterhub/caterhub-real-marketplace.png",
    gallery: [
      {
        url: "assets/img/projects/caterhub/caterhub-real-marketplace.png",
        caption: "Tampilan Nyata Katalog Menu Katering Kantor & Rekanan Vendor Terpopuler"
      },
      {
        url: "assets/img/projects/caterhub/caterhub-preview.svg",
        caption: "Maket Arsitektur Sistem Dual-Portal Klien Perusahaan & Merchant Katering"
      }
    ],
    shortDesc: "Platform marketplace B2B multi-vendor yang menghubungkan instansi perusahaan/kantor dengan puluhan vendor katering terverifikasi, dilengkapi kalender pengantaran, faktur invoice otomatis, dan multi-role merchant portal.",
    problemStatement: "Divisi HR & General Affair (GA) kantor sering kesulitan memesan katering harian untuk ratusan karyawan secara manual via chat, pengelolaan invoice berceceran, serta terbatasnya variasi menu makan siang.",
    solution: "Membangun ekosistem marketplace B2B dengan pemisahan portal Klien Perusahaan dan Merchant Katering. Mendukung sistem pemesanan terjadwal, keranjang pesanan kantor, cetak faktur invoice resmi otomatis, verifikasi bukti transfer, dan filter diet (Halal, Low-Calorie, Non-MSG).",
    features: [
      "Dual-Portal Architecture: Customer Portal (Kantor) & Merchant Portal (Vendor)",
      "Dynamic Cart & Office Bulk Checkout dengan kalender jadwal pengantaran",
      "Invoice Generator Otomatis (View & Thermal/PDF Print Friendly)",
      "Manajemen Menu Vendor (CRUD menu, tagging diet, foto, & status ketersediaan)",
      "Sistem Pelacakan Status Pesanan: Pending, Dikonfirmasi, Dipasak, Dikirim, Selesai",
      "Ulasan dan Rating Komprehensif per menu & per vendor",
      "Upload dan Validasi Bukti Pembayaran Digital"
    ],
    techStack: ["Laravel 11", "PHP 8.2+", "Vite", "Tailwind CSS", "MySQL", "Blade Templates", "RESTful Architecture"],
    academicImpact: "Projek web berskala enterprise dengan implementasi otentikasi role-based middleware, migrasi database relasional kompleks, dan desain UI modern berstandar B2B.",
    docUrl: null,
    githubUrl: "https://github.com/ahmdfauzann/caterhub-b2b-catering",
    liveUrl: "#"
  },
  {
    id: "zahkreasi",
    title: "Sistem Informasi Penjualan & Pemesanan Custom UMKM Zahkreasi",
    subtitle: "Web-Based Sales & Custom Handmade Order System with Waterfall Model",
    category: "pos",
    categoryLabel: "Sistem Kasir & UMKM",
    badge: "Skripsi S.Kom • Jurnal Ilmiah Terbit",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    image: "assets/img/projects/zahkreasi/zahkreasi-katalog-tudungsaji.png",
    gallery: [
      {
        url: "assets/img/projects/zahkreasi/zahkreasi-katalog-tudungsaji.png",
        caption: "Katalog Produk Jadi Kerajinan Buatan Tangan (Tudung Saji Beragam Ukuran Siap Kirim)"
      },
      {
        url: "assets/img/projects/zahkreasi/zahkreasi-custom-builder.png",
        caption: "Formulir Interaktif Kustomisasi Pesanan (Pilihan Dimensi Rangka & Motif Kain)"
      },
      {
        url: "assets/img/projects/zahkreasi/zahkreasi-dashboard-admin.png",
        caption: "Dasbor Administrator Kasir dengan Indikator Stok Menipis (< 3 Item)"
      },
      {
        url: "assets/img/projects/zahkreasi/zahkreasi-orders-qris.png",
        caption: "Daftar Riwayat Pesanan Pelanggan, Status Produksi & Pembayaran Digital QRIS"
      },
      {
        url: "assets/img/projects/zahkreasi/zahkreasi-login-custom.png",
        caption: "Halaman Masuk Pelanggan Khusus Alur Pemesanan Custom Handmade"
      },
      {
        url: "assets/img/projects/zahkreasi/zahkreasi-welcome-modal.png",
        caption: "Modal Panduan Navigasi Pengguna (Pilihan Produk Jadi vs Pesanan Custom)"
      },
      {
        url: "assets/img/projects/zahkreasi/5.png",
        caption: "Modul Transaksi Kasir Point-of-Sale (POS) Toko"
      },
      {
        url: "assets/img/projects/zahkreasi/6.png",
        caption: "Modul Rekapitulasi Laporan Penjualan Otomatis (Filter Tanggal/Bulan)"
      },
      {
        url: "assets/img/projects/zahkreasi/qris_zahkreasi.jpg",
        caption: "Integrasi Pembayaran QRIS Dinamis Toko Zahkreasi"
      }
    ],
    shortDesc: "Sistem informasi pengelolaan penjualan, kasir (POS), dan pemesanan kerajinan custom handmade pada UMKM Zahkreasi Cilegon dengan metode Waterfall. Diterbitkan dalam Jurnal Ilmiah Sistem Informasi (JSII).",
    problemStatement: "UMKM Zahkreasi sebelumnya menghadapi kendala operasional pencatatan manual penjualan, pengecekan stok fisik yang lambat, dan pemesanan produk kustom yang tidak terstruktur lewat WhatsApp sehingga menimbulkan human error dan rekap laporan makan waktu hingga 1 jam per hari.",
    solution: "Merancang sistem web terintegrasi dengan arsitektur multi-role (Admin Kasir & Customer). Menghadirkan katalog pemesanan kustom mandiri (pilihan frame, motif kain, preview biaya instan), transaksi kasir cepat (POS), integrasi pembayaran QRIS dinamis, dan generator laporan PDF/Excel otomatis.",
    features: [
      "Multi-Role System: Akses Kasir/Admin Toko & Portal Pemesanan Pelanggan",
      "Modul Pemesanan Custom Handmade (Kustomisasi ukuran bingkai, kain, tema)",
      "Sistem Kasir Point-of-Sale (POS) dengan live barcode/pencarian Ajax instan",
      "Manajemen Inventori & Notifikasi Otomatis Stok Menipis (stok <= 3)",
      "Integrasi Pembayaran Digital QRIS & Verifikasi Pembayaran",
      "Otomatisasi Laporan Penjualan (Ekspor PDF dengan DOMPDF & Spreadsheet Excel)",
      "Telah lolos pengujian menyeluruh menggunakan Black Box Testing & UAT"
    ],
    techStack: ["PHP (PDO)", "MySQL", "SB Admin 2", "Bootstrap 4", "jQuery", "DOMPDF", "QRIS Payment"],
    academicImpact: "Projek Tugas Akhir / Skripsi yang dipublikasikan dalam Jurnal Ilmiah Sistem Informasi (JSII) Universitas Serang Raya bersama dosen pembimbing.",
    docUrl: "assets/docs/jurnal_jsii_ahmad_fauzan.docx",
    pdfReportUrl: "assets/docs/laporan_penjualan_februari_maret_2026.pdf",
    githubUrl: "https://github.com/ahmdfauzann",
    liveUrl: "#"
  },
  {
    id: "mandirifm",
    title: "Sistem Informasi Presensi Digital Karyawan Mandiri FM Cilegon",
    subtitle: "Employee Digital Attendance Tracking & Automated Reporting",
    category: "presensi",
    categoryLabel: "Presensi & Kantor",
    badge: "Kerja Praktek (KKP)",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    image: "assets/img/projects/mandirifm/mandirifm-ui-preview.svg",
    gallery: [
      {
        url: "assets/img/projects/mandirifm/mandirifm-ui-preview.svg",
        caption: "Tampilan Antarmuka Portal Kehadiran Karyawan (Input NIP) & Dashboard Admin"
      },
      {
        url: "assets/img/projects/mandirifm/mandiri3.jpg",
        caption: "Ruang Siaran & Fasilitas Kerja Operasional Stasiun Radio Mandiri FM Cilegon"
      },
      {
        url: "assets/img/projects/mandirifm/mandiri2.jpg",
        caption: "Studio Siaran Utama Radio Mandiri FM 102 MHz Saat On-Air"
      },
      {
        url: "assets/img/projects/mandirifm/mandiri1.jpg",
        caption: "Dokumentasi Kegiatan Siaran Luar & Event Komunitas Mandiri FM Cilegon"
      },
      {
        url: "assets/img/projects/mandirifm/mandiri.png",
        caption: "Logo Resmi Radio Komersial Mandiri FM 102.0 MHz Cilegon"
      }
    ],
    shortDesc: "Aplikasi presensi kehadiran pegawai digital berbasis NIP di stasiun radio komersial Radio Mandiri FM Cilegon, menggantikan pencatatan absensi manual dengan pelaporan rekapitulasi terpusat.",
    problemStatement: "Presensi pegawai radio masih menggunakan lembaran kertas fisik yang rentan rusak, tercecer, dan menyulitkan bagian administrasi saat pembuatan rekap gaji bulanan.",
    solution: "Membangun sistem web presensi responsif di mana staf cukup memasukkan Nomor Induk Pegawai (NIP) untuk clock-in/clock-out, sementara administrator mendapatkan rekapitulasi kehadiran real-time dan format cetak laporan absensi terstandarisasi.",
    features: [
      "Input Presensi Cepat Berbasis Validasi NIP Karyawan",
      "Dashboard Manajemen Administrator & Validasi Kehadiran",
      "Manajemen Data Pegawai Radio (Jabatan, Divisi, Biodata)",
      "Rekapitulasi Kehadiran Harian, Mingguan, dan Bulanan",
      "Fitur Cetak Format Laporan Absensi Siap Pakai"
    ],
    techStack: ["PHP Native (MySQLi)", "MySQL", "Bootstrap 3", "JavaScript", "HTML5 & CSS3"],
    academicImpact: "Implementasi langsung pada lingkungan kerja operasional Radio Mandiri FM Cilegon sebagai laporan resmi Kerja Praktek (KKP) Sistem Informasi.",
    docUrl: null,
    githubUrl: "https://github.com/ahmdfauzann",
    liveUrl: "#"
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("all");
  initFilterTabs();
  initModal();
  initStatsCounter();
  initContactForm();
  initMobileMenu();
});

// Theme Toggle (Dark / Light Mode)
function initTheme() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const htmlEl = document.documentElement;
  
  const savedTheme = localStorage.getItem("theme") || "dark";
  if (savedTheme === "light") {
    htmlEl.classList.remove("dark");
    htmlEl.classList.add("light");
    updateThemeIcon(false);
  } else {
    htmlEl.classList.remove("light");
    htmlEl.classList.add("dark");
    updateThemeIcon(true);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isDark = htmlEl.classList.contains("dark");
      if (isDark) {
        htmlEl.classList.remove("dark");
        htmlEl.classList.add("light");
        localStorage.setItem("theme", "light");
        updateThemeIcon(false);
      } else {
        htmlEl.classList.remove("light");
        htmlEl.classList.add("dark");
        localStorage.setItem("theme", "dark");
        updateThemeIcon(true);
      }
    });
  }
}

function updateThemeIcon(isDark) {
  const icon = document.getElementById("theme-toggle-icon");
  if (!icon) return;
  if (isDark) {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
  } else {
    icon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
  }
}

// Render Projects to Grid
function renderProjects(category = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = category === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="group relative bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-3xl overflow-hidden shadow-xl card-hover flex flex-col transition-all duration-300">
      
      <!-- Project Image Preview -->
      <div class="relative h-64 w-full bg-slate-950 overflow-hidden cursor-pointer" onclick="openProjectModal('${p.id}')">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>
        
        <!-- Category & Badge -->
        <div class="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
          <span class="px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${p.badgeColor}">
            ${p.badge}
          </span>
          <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            ${p.categoryLabel}
          </span>
        </div>

        <!-- Screenshot Count Pill -->
        <div class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-700 text-[11px] font-mono text-slate-300 backdrop-blur-md flex items-center gap-1.5">
          <i class="fa-solid fa-camera text-blue-400"></i>
          <span>${p.gallery.length} Gambar Preview</span>
        </div>

        <!-- Hover Overlay Button -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300">
          <span class="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-xl shadow-blue-500/30">
            <i class="fa-solid fa-images text-sm"></i>
            Buka Galeri &amp; Detail Sistem
          </span>
        </div>
      </div>

      <!-- Card Body -->
      <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors leading-snug">
            ${p.title}
          </h3>
          <p class="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
            ${p.shortDesc}
          </p>
        </div>

        <div class="mt-6 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${p.techStack.map(t => `
              <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 dark:bg-slate-800 dark:text-slate-300 light:bg-slate-100 light:text-slate-700">
                ${t}
              </span>
            `).join('')}
          </div>

          <!-- Action Buttons -->
          <div class="flex items-center justify-between gap-3 pt-2">
            <button onclick="openProjectModal('${p.id}')" class="flex-1 px-4 py-2.5 text-xs font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 text-blue-400 border border-slate-700 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2">
              <i class="fa-solid fa-sliders text-xs"></i>
              <span>Detail &amp; Screenshot (${p.gallery.length})</span>
            </button>
            ${p.docUrl ? `
              <a href="${p.docUrl}" download title="Unduh Dokumen Publikasi/Jurnal" class="p-2.5 rounded-xl bg-slate-800/80 hover:bg-emerald-600/20 text-emerald-400 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                <i class="fa-solid fa-file-arrow-down text-sm"></i>
              </a>
            ` : ''}
            ${p.githubUrl && p.githubUrl !== '#' ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" title="Buka GitHub Repository" class="p-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-600/20 text-slate-300 hover:text-white border border-slate-700 hover:border-blue-500/50 transition-colors">
                <i class="fa-brands fa-github text-sm"></i>
              </a>
            ` : ''}
          </div>
        </div>

      </div>
    </div>
  `).join("");
}

// Category Filter Tabs
function initFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("bg-blue-600", "text-white");
        t.classList.add("bg-slate-800/80", "text-slate-400", "hover:bg-slate-800");
      });
      tab.classList.remove("bg-slate-800/80", "text-slate-400", "hover:bg-slate-800");
      tab.classList.add("bg-blue-600", "text-white");

      const category = tab.getAttribute("data-category");
      renderProjects(category);
    });
  });
}

// Modal System
function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const backdrop = document.getElementById("modal-backdrop");

  if (closeBtn) closeBtn.addEventListener("click", closeProjectModal);
  if (backdrop) backdrop.addEventListener("click", closeProjectModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProjectModal();
  });
}

function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content-wrapper");

  content.innerHTML = `
    <!-- Modal Header -->
    <div class="p-6 md:p-8 border-b border-slate-800 flex items-start justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 flex-wrap mb-2">
          <span class="px-3 py-1 text-xs font-semibold rounded-full border ${project.badgeColor}">
            ${project.badge}
          </span>
          <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-800 text-slate-300">
            ${project.categoryLabel}
          </span>
          <span class="px-2.5 py-1 text-xs font-mono rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
            <i class="fa-solid fa-camera mr-1"></i> ${project.gallery.length} Screenshot Tersedia
          </span>
        </div>
        <h2 class="text-2xl md:text-3xl font-extrabold text-white">
          ${project.title}
        </h2>
        <p class="text-sm md:text-base text-slate-400 mt-1">
          ${project.subtitle}
        </p>
      </div>
      <button onclick="closeProjectModal()" class="text-slate-400 hover:text-white p-2.5 rounded-xl hover:bg-slate-800 transition-colors">
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>
    </div>

    <!-- Modal Gallery / Preview Showcase -->
    <div class="p-6 md:p-8 bg-slate-950/70 border-b border-slate-800">
      
      <!-- Big Active Image Viewport -->
      <div class="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl flex items-center justify-center min-h-[300px] max-h-[500px]">
        <img id="modal-active-img" src="${project.gallery[0].url}" alt="${project.title}" class="max-h-[500px] w-auto max-w-full object-contain transition-all duration-300" />
      </div>
      
      <!-- Active Caption -->
      <div class="mt-3 px-1 text-center">
        <p id="modal-active-caption" class="text-xs sm:text-sm font-medium text-slate-300">
          <i class="fa-solid fa-circle-info text-blue-400 mr-1.5"></i>
          ${project.gallery[0].caption}
        </p>
      </div>

      <!-- Thumbnail Strip -->
      <div class="flex items-center gap-3 mt-4 overflow-x-auto pb-2 pt-1">
        ${project.gallery.map((item, idx) => `
          <button onclick="changeModalImage('${item.url}', '${item.caption.replace(/'/g, "\\'")}', this)" class="thumbnail-btn h-20 w-32 rounded-xl overflow-hidden border-2 ${idx === 0 ? 'border-blue-500 ring-2 ring-blue-500/30' : 'border-slate-800 opacity-60 hover:opacity-100'} flex-shrink-0 transition-all bg-slate-900">
            <img src="${item.url}" class="w-full h-full object-cover" />
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Modal Body Specs -->
    <div class="p-6 md:p-8 space-y-8">
      
      <!-- Problem & Solution Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
          <div class="flex items-center gap-2 text-rose-400 font-bold mb-2 text-sm uppercase tracking-wide">
            <i class="fa-solid fa-triangle-exclamation"></i>
            Tantangan & Masalah Lapangan
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            ${project.problemStatement}
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
          <div class="flex items-center gap-2 text-emerald-400 font-bold mb-2 text-sm uppercase tracking-wide">
            <i class="fa-solid fa-circle-check"></i>
            Solusi yang Diterapkan
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">
            ${project.solution}
          </p>
        </div>
      </div>

      <!-- Key Features List -->
      <div>
        <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <i class="fa-solid fa-layer-group text-blue-400"></i>
          Fitur Utama & Modul Fungsional
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${project.features.map(f => `
            <div class="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800">
              <span class="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
              <span class="text-sm text-slate-300">${f}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tech Stack Badges -->
      <div>
        <h4 class="text-lg font-bold text-white mb-3">Teknologi & Lingkungan Pengembangan</h4>
        <div class="flex flex-wrap gap-2">
          ${project.techStack.map(t => `
            <span class="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-slate-800 text-blue-300 border border-slate-700">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <!-- Academic & Real Impact -->
      <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between flex-wrap gap-4">
        <div>
          <span class="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">Dampak & Validasi Sistem</span>
          <p class="text-sm text-slate-300 font-medium">${project.academicImpact}</p>
        </div>
        <div class="flex items-center gap-3 flex-wrap">
          ${project.docUrl ? `
            <a href="${project.docUrl}" download class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/25">
              <i class="fa-solid fa-file-word"></i>
              Unduh Jurnal JSII (.docx)
            </a>
          ` : ''}
          ${project.pdfReportUrl ? `
            <a href="${project.pdfReportUrl}" target="_blank" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs flex items-center gap-2 transition-all">
              <i class="fa-solid fa-file-pdf text-rose-400"></i>
              Lihat Contoh Laporan (PDF)
            </a>
          ` : ''}
          ${project.githubUrl && project.githubUrl !== '#' ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold text-xs flex items-center gap-2 transition-all">
              <i class="fa-brands fa-github"></i>
              GitHub Repository
            </a>
          ` : ''}
        </div>
      </div>

    </div>
  `;

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }
}

function changeModalImage(imgUrl, caption, btnEl) {
  const activeImg = document.getElementById("modal-active-img");
  const captionEl = document.getElementById("modal-active-caption");
  
  if (activeImg) {
    activeImg.src = imgUrl;
  }
  if (captionEl) {
    captionEl.innerHTML = `<i class="fa-solid fa-circle-info text-blue-400 mr-1.5"></i> ${caption}`;
  }

  // Update thumbnail active ring
  const allThumbnails = document.querySelectorAll(".thumbnail-btn");
  allThumbnails.forEach(t => {
    t.classList.remove("border-blue-500", "ring-2", "ring-blue-500/30", "opacity-100");
    t.classList.add("border-slate-800", "opacity-60");
  });

  if (btnEl) {
    btnEl.classList.remove("border-slate-800", "opacity-60");
    btnEl.classList.add("border-blue-500", "ring-2", "ring-blue-500/30", "opacity-100");
  }
}

// Animated Statistics Counter
function initStatsCounter() {
  const counters = document.querySelectorAll(".counter-value");
  const options = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        let start = 0;
        const duration = 1000;
        const step = Math.max(1, Math.floor(target / (duration / 25)));

        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            el.textContent = target + (el.getAttribute("data-suffix") || "");
            clearInterval(timer);
          } else {
            el.textContent = start + (el.getAttribute("data-suffix") || "");
          }
        }, 25);

        obs.unobserve(el);
      }
    });
  }, options);

  counters.forEach(c => observer.observe(c));
}

// Contact Form Handler
function initContactForm() {
  const form = document.getElementById("contact-form");
  const toast = document.getElementById("form-toast");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      alert("Harap isi semua kolom formulir.");
      return;
    }

    const subject = encodeURIComponent(`Pesan Portofolio dari ${name}`);
    const body = encodeURIComponent(`Halo Ahmad Fauzan,\n\nNama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`);
    
    window.location.href = `mailto:ahmadfauzan@unsera.ac.id?subject=${subject}&body=${body}`;

    if (toast) {
      toast.classList.remove("hidden");
      setTimeout(() => {
        toast.classList.add("hidden");
      }, 5000);
    }

    form.reset();
  });
}

// Mobile Menu Navigation
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const links = mobileMenu.querySelectorAll("a");
  links.forEach(l => {
    l.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

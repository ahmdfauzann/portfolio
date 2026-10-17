/**
 * Ahmad Fauzan - Web Portfolio JavaScript Engine
 * Direct GitHub repository integration, clean presentation, theme toggle, and contact interactions.
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
    githubUrl: "https://github.com/ahmdfauzann/caterhub-b2b-catering"
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
    githubUrl: "https://github.com/ahmdfauzann/apkskripsi-zahkreasi"
  },
  {
    id: "mandirifm",
    title: "Sistem Informasi Presensi Digital Karyawan Mandiri FM Cilegon",
    subtitle: "Employee Digital Attendance Tracking & Automated Reporting",
    category: "presensi",
    categoryLabel: "Presensi & Kantor",
    badge: "Kerja Praktek (KKP)",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    image: "assets/img/projects/mandirifm/mandiri3.jpg",
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
    githubUrl: "https://github.com/ahmdfauzann/absensi-mandirifm"
  }
];

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects("all");
  initFilterTabs();
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

// Render Projects to Grid with Direct GitHub Links
function renderProjects(category = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = category === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="group relative bg-slate-900/80 dark:bg-slate-900/80 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-3xl overflow-hidden shadow-xl card-hover flex flex-col transition-all duration-300">
      
      <!-- Project Image Preview - Clicking directly opens GitHub repository -->
      <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="relative h-64 w-full bg-slate-950 overflow-hidden block">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <!-- Category & Badge -->
        <div class="absolute top-3 left-3 right-3 flex justify-between items-center gap-2">
          <span class="px-3 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${p.badgeColor}">
            ${p.badge}
          </span>
          <span class="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            ${p.categoryLabel}
          </span>
        </div>

        <!-- Clean Hover Overlay with Direct GitHub Action -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-300">
          <span class="px-5 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm flex items-center gap-2 shadow-xl shadow-blue-500/30">
            <i class="fa-brands fa-github text-base"></i>
            <span>Buka Repository GitHub</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1 text-blue-200"></i>
          </span>
        </div>
      </a>

      <!-- Card Body -->
      <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer">
            <h3 class="text-xl font-bold text-white dark:text-white light:text-slate-900 group-hover:text-blue-400 transition-colors leading-snug">
              ${p.title}
            </h3>
          </a>
          <p class="mt-2 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 line-clamp-3 leading-relaxed">
            ${p.shortDesc}
          </p>
        </div>

        <div class="mt-6 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${p.techStack.map(t => `
              <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 dark:bg-slate-800 dark:text-slate-300 light:bg-slate-100 light:text-slate-700">
                ${t}
              </span>
            `).join('')}
          </div>

          <!-- Direct GitHub Action Button -->
          <div class="flex items-center justify-between gap-3 pt-1">
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 px-4 py-3 text-xs sm:text-sm font-bold rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2">
              <i class="fa-brands fa-github text-base"></i>
              <span>Buka Kode di GitHub</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-blue-200"></i>
            </a>

            ${p.docUrl ? `
              <a href="${p.docUrl}" download title="Unduh Naskah Jurnal JSII (.docx)" class="p-3 rounded-xl bg-slate-800/80 hover:bg-emerald-600/20 text-emerald-400 border border-slate-700 hover:border-emerald-500/50 transition-colors" title="Unduh Jurnal Skripsi">
                <i class="fa-solid fa-file-arrow-down text-sm"></i>
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

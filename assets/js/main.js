/**
 * Ahmad Fauzan - Web Portfolio JavaScript Engine
 * Clean GitHub Repository Showcase for 3 Core Applications
 */

// Project Database - 3 Core Applications hosted on GitHub
const projectsData = [
  {
    id: "caterhub",
    title: "CaterHub — B2B Corporate Catering Marketplace Platform",
    repoName: "ahmdfauzann/caterhub-b2b-catering",
    category: "laravel",
    categoryLabel: "Full-Stack Laravel",
    badge: "Featured Flagship",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: "fa-solid fa-utensils",
    iconColor: "text-amber-400 bg-amber-500/10",
    shortDesc: "Platform marketplace B2B multi-vendor yang menghubungkan instansi kantor/perusahaan dengan penyedia katering makan siang terverifikasi. Dilengkapi portal ganda (Corporate Client & Merchant), keranjang pesanan kantor, jadwal pengantaran, dan generator faktur invoice otomatis.",
    techStack: ["Laravel 11", "PHP 8.2+", "Vite", "Tailwind CSS", "MySQL", "Blade Templates", "RESTful Architecture"],
    githubUrl: "https://github.com/ahmdfauzann/caterhub-b2b-catering",
    docUrl: null
  },
  {
    id: "zahkreasi",
    title: "Sistem Informasi Penjualan & Pemesanan Custom UMKM Zahkreasi",
    repoName: "ahmdfauzann/apkskripsi-zahkreasi",
    category: "pos",
    categoryLabel: "Sistem Kasir & UMKM",
    badge: "Skripsi S.Kom • Jurnal Ilmiah Terbit",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: "fa-solid fa-store",
    iconColor: "text-emerald-400 bg-emerald-500/10",
    shortDesc: "Sistem informasi manajemen penjualan, kasir (POS), dan pemesanan kerajinan custom buatan tangan UMKM Zahkreasi Cilegon dengan metode Waterfall SDLC. Mengatasi kendala pencatatan manual, rekap stok fisik otomatis, transaksi non-tunai QRIS, dan ekspor laporan penjualan PDF/Excel.",
    techStack: ["PHP (PDO)", "MySQL", "SB Admin 2", "Bootstrap 4", "jQuery", "DOMPDF", "QRIS Payment"],
    githubUrl: "https://github.com/ahmdfauzann/apkskripsi-zahkreasi",
    docUrl: "assets/docs/jurnal_jsii_ahmad_fauzan.docx",
    pdfReportUrl: "assets/docs/laporan_penjualan_februari_maret_2026.pdf"
  },
  {
    id: "mandirifm",
    title: "Sistem Informasi Presensi Digital Karyawan Mandiri FM Cilegon",
    repoName: "ahmdfauzann/absensi-mandirifm",
    category: "presensi",
    categoryLabel: "Presensi & Kantor",
    badge: "Kerja Praktek (KKP)",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "fa-solid fa-id-card-clip",
    iconColor: "text-blue-400 bg-blue-500/10",
    shortDesc: "Aplikasi presensi kehadiran pegawai digital berbasis Nomor Induk Pegawai (NIP) di stasiun radio komersial Radio Mandiri FM Cilegon. Menggantikan absensi manual berbasis kertas dengan pencatatan digital cepat, dashboard rekapitulasi kehadiran, dan fitur cetak laporan kehadiran.",
    techStack: ["PHP Native (MySQLi)", "MySQL", "Bootstrap 3", "JavaScript", "HTML5 & CSS3"],
    githubUrl: "https://github.com/ahmdfauzann/absensi-mandirifm",
    docUrl: null
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

// Render Clean Projects Cards with Direct GitHub Links (No Screenshots)
function renderProjects(category = "all") {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  const filtered = category === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === category);

  container.innerHTML = filtered.map(p => `
    <div class="group relative bg-slate-900/90 dark:bg-slate-900/90 light:bg-white border border-slate-800 dark:border-slate-800 light:border-slate-200 rounded-3xl p-7 shadow-xl card-hover flex flex-col justify-between transition-all duration-300">
      
      <!-- Top Card Header: Repo Badge & Category -->
      <div>
        <div class="flex items-center justify-between gap-3 mb-5">
          <div class="flex items-center gap-2.5">
            <div class="w-10 h-10 rounded-2xl ${p.iconColor} flex items-center justify-center text-lg">
              <i class="${p.icon}"></i>
            </div>
            <div>
              <span class="text-xs font-mono font-bold text-slate-400 block">${p.categoryLabel}</span>
              <span class="px-2 py-0.5 text-[11px] font-semibold rounded-md border ${p.badgeColor} inline-block mt-0.5">
                ${p.badge}
              </span>
            </div>
          </div>

          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" title="Buka di GitHub" class="w-10 h-10 rounded-2xl bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/80 shadow-md">
            <i class="fa-brands fa-github text-lg"></i>
          </a>
        </div>

        <!-- Project Title -->
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="block group/link">
          <h3 class="text-xl font-extrabold text-white dark:text-white light:text-slate-900 group-hover/link:text-blue-400 transition-colors leading-snug">
            ${p.title}
          </h3>
        </a>

        <!-- Description -->
        <p class="mt-3 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed">
          ${p.shortDesc}
        </p>

        <!-- Direct GitHub Link Box -->
        <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="mt-5 p-3 rounded-2xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between gap-2 text-xs font-mono text-slate-300 transition-all group/repo">
          <div class="flex items-center gap-2 truncate">
            <i class="fa-brands fa-github text-blue-400 text-sm flex-shrink-0"></i>
            <span class="truncate text-slate-300 group-hover/repo:text-blue-300">${p.repoName}</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-bold uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
            <span>Repo</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </span>
        </a>
      </div>

      <!-- Bottom Card Section: Tech Tags & Action Button -->
      <div class="mt-6 pt-5 border-t border-slate-800/80 dark:border-slate-800/80 light:border-slate-200">
        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 mb-5">
          ${p.techStack.map(t => `
            <span class="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 dark:bg-slate-800 dark:text-slate-300 light:bg-slate-100 light:text-slate-700">
              ${t}
            </span>
          `).join('')}
        </div>

        <!-- Primary Action Buttons -->
        <div class="flex items-center gap-3">
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2">
            <i class="fa-brands fa-github text-base"></i>
            <span>Buka Kode di GitHub</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-blue-200"></i>
          </a>

          ${p.docUrl ? `
            <a href="${p.docUrl}" download title="Unduh Naskah Jurnal JSII (.docx)" class="py-3 px-3.5 rounded-xl bg-slate-800 hover:bg-emerald-600/20 text-emerald-400 border border-slate-700 hover:border-emerald-500/50 transition-colors" title="Unduh Jurnal Skripsi">
              <i class="fa-solid fa-file-arrow-down text-sm"></i>
            </a>
          ` : ''}
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

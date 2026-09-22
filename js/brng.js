// ==========================================================================
// 1. ANIMASI SCROLL REVEAL (INTERSECTION OBSERVER)
// ==========================================================================
const scrollOptions = {
  threshold: 0.1, // Elemen aktif saat 10% masuk viewport
  rootMargin: "0px 0px -50px 0px", // Offset batas bawah
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    } else {
      entry.target.classList.remove("in-view");
    }
  });
}, scrollOptions);

// Daftarkan semua elemen dengan class 'reveal-element'
const revealElements = document.querySelectorAll(".reveal-element");
revealElements.forEach((el) => observer.observe(el));

// ==========================================================================
// 2. PENGALIH BAHASA (BILINGUAL SWITCHER)
// ==========================================================================
const toggleBtn = document.getElementById("toggleBtn");
let currentLang = "id";

if (toggleBtn) {
  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Toggle status bahasa
    currentLang = currentLang === "id" ? "en" : "id";

    // Ambil seluruh elemen yang memiliki atribut data-id dan data-en
    const translatableElements =
      document.querySelectorAll("[data-id][data-en]");

    translatableElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transition = "opacity 0.25s ease";

      setTimeout(() => {
        el.innerHTML = el.getAttribute(`data-${currentLang}`);
        el.style.opacity = "1";
      }, 250);
    });

    // Perbarui label tombol
    toggleBtn.innerText = currentLang === "id" ? "English" : "Indonesia";
  });
}

// ==========================================================================
// 3. MENU KONTAK DROPDOWN
// ==========================================================================
function toggleContactMenu() {
  const contactMenu = document.getElementById("contactMenu");
  if (contactMenu) {
    contactMenu.classList.toggle("show");
  }
}

// Tutup dropdown otomatis jika klik dilakukan di luar wrapper kontak
window.addEventListener("click", (event) => {
  if (!event.target.closest(".contact-wrapper")) {
    const contactMenu = document.getElementById("contactMenu");
    if (contactMenu && contactMenu.classList.contains("show")) {
      contactMenu.classList.remove("show");
    }
  }
});

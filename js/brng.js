
        const options = {
            threshold: 0.1, // Elemen dianggap "terlihat" jika 10% masuk layar
            rootMargin: "0px 0px -50px 0px" // Offset sedikit dari bawah
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Jika masuk layar -> Tambah class 'in-view'
                    entry.target.classList.add('in-view');
                } else {
                    // Jika keluar layar -> Hapus class 'in-view'
                    // Ini yang bikin efek hilang saat di-scroll menjauh (atas/bawah)
                    entry.target.classList.remove('in-view');
                }
            });
        }, options);

        // Targetkan semua elemen dengan class 'reveal-element'
        const elements = document.querySelectorAll('.reveal-element');
        elements.forEach(el => observer.observe(el));
        // END OF LOGIC ANIMASI SCROLL (IN & OUT)
        const toggleBtn = document.getElementById('toggleBtn');
let currentLang = 'id'; 

if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        // Ganti status bahasa
        currentLang = (currentLang === 'id') ? 'en' : 'id';

        // Cari semua elemen yang punya data-id dan data-en
        const translatableElements = document.querySelectorAll('[data-id][data-en]');
        
        translatableElements.forEach(el => {
            // Animasi fade out sederhana saat teks berubah
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.3s ease';
            
            setTimeout(() => {
                el.innerHTML = el.getAttribute(`data-${currentLang}`);
                el.style.opacity = '1';
            }, 300);
        });

        // Ubah teks tombol
        toggleBtn.innerText = (currentLang === 'id') ? 'English' : 'Indonesia';
    });
}

function toggleContactMenu() {
    document.getElementById('contactMenu').classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.matches('.contact-btn')){
        var dropdowns = document.GetElementByClassName("contact-menu");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')){
                 openDropdown.classList.remove('show');
            }
        }
    }
}
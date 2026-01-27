        // LOGIC ANIMASI SCROLL (IN & OUT)
        // Kita menggunakan IntersectionObserver untuk mendeteksi elemen
        
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
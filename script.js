document.addEventListener('DOMContentLoaded', function () {
    // 1. Smooth Scrolling untuk semua tautan navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Memastikan link adalah link section dan bukan hanya '#'
            if (this.getAttribute('href').length > 1) { 
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Fungsionalitas Form Contact (Menampilkan Modal)
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Mencegah form melakukan submit dan refresh halaman
            event.preventDefault();

            // Tampilkan modal notifikasi
            const myModal = new bootstrap.Modal(document.getElementById('successModal'));
            myModal.show();
            
            // Reset form setelah sedikit delay agar modal sempat terlihat
            setTimeout(() => {
                event.target.reset();
            }, 500); 
        });
    }

    console.log("Portofolio Vincent siap! Start Grid sudah menyala.");
});
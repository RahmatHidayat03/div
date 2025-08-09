// document.addEventListener('DOMContentLoaded', function() {
//     const introOverlay = document.getElementById('introOverlay');
//     const mainContent = document.getElementById('mainContent');
//     const backgroundMusic = document.getElementById('backgroundMusic'); // Dapatkan elemen audio

//     // Menampilkan overlay saat halaman dimuat
//     introOverlay.style.display = 'flex';
//     mainContent.classList.add('hidden'); // Pastikan main content tersembunyi

//     // Sembunyikan overlay dan tampilkan konten utama saat diklik
//     introOverlay.addEventListener('click', function() {
//         introOverlay.style.opacity = '0'; // Buat overlay memudar
        
//         // Mainkan musik saat overlay diklik
//         if (backgroundMusic) {
//             backgroundMusic.play().catch(e => {
//                 console.log("Autoplay prevented:", e);
//                 // Tambahkan UI untuk memungkinkan pengguna memutar musik secara manual jika autoplay dicegah
//             });
//         }

//         setTimeout(() => {
//             introOverlay.style.display = 'none'; // Sembunyikan overlay sepenuhnya setelah memudar
//             mainContent.classList.remove('hidden'); // Tampilkan konten utama
//             // Optional: Trigger a scroll to top in case user scrolled during overlay
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         }, 1000); // Sesuaikan dengan durasi transisi opacity di CSS (1000ms = 1 detik)
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const introOverlay = document.getElementById('introOverlay');
    const mainContent = document.getElementById('mainContent');
    const backgroundMusic = document.getElementById('backgroundMusic'); // Dapatkan elemen audio
    const birthdayVideo = document.getElementById('birthdayVideo'); // Dapatkan elemen video

    // Menampilkan overlay saat halaman dimuat
    introOverlay.style.display = 'flex';
    mainContent.classList.add('hidden'); // Pastikan main content tersembunyi

    // Sembunyikan overlay dan tampilkan konten utama saat diklik
    introOverlay.addEventListener('click', function() {
        introOverlay.style.opacity = '0'; // Buat overlay memudar
        
        // Mainkan musik saat overlay diklik
        if (backgroundMusic) {
            backgroundMusic.play().catch(e => {
                console.log("Autoplay prevented:", e);
                // Tambahkan UI untuk memungkinkan pengguna memutar musik secara manual jika autoplay dicegah
            });
        }

        setTimeout(() => {
            introOverlay.style.display = 'none'; // Sembunyikan overlay sepenuhnya setelah memudar
            mainContent.classList.remove('hidden'); // Tampilkan konten utama
            // Optional: Trigger a scroll to top in case user scrolled during overlay
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1000); // Sesuaikan dengan durasi transisi opacity di CSS (1000ms = 1 detik)
    });

    // Tambahkan event listener untuk video
    if (birthdayVideo) {
        // Saat video diputar, hentikan musik
        birthdayVideo.addEventListener('play', () => {
            if (backgroundMusic) {
                backgroundMusic.pause();
            }
        });

        // Saat video dijeda atau selesai, lanjutkan musik
        birthdayVideo.addEventListener('pause', () => {
            if (backgroundMusic) {
                backgroundMusic.play();
            }
        });

        birthdayVideo.addEventListener('ended', () => {
            if (backgroundMusic) {
                backgroundMusic.play();
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const container = document.querySelector('.container');
    const feedbackForm = document.getElementById('feedback-form');
    const feedbackStatus = document.getElementById('feedback-status');

    // Handle overlay click to hide it
    overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        // Make the main content visible after overlay hides
        setTimeout(() => {
            container.classList.add('visible');
        }, 500); // Match this duration with the CSS transition duration
    });

    // Example of dynamically adding photos (you can hardcode them in HTML as well)
    const photos = [
        'https://via.placeholder.com/300x200/FF5733/FFFFFF?text=Kenangan+Indah',
        'https://via.placeholder.com/300x200/33FF57/FFFFFF?text=Momen+Ceria',
        'https://via.placeholder.com/300x200/3357FF/FFFFFF?text=Pesta+Seru',
        'https://via.placeholder.com/300x200/FF33CC/FFFFFF?text=Kue+Ultah',
        'https://via.placeholder.com/300x200/FFFF33/333333?text=Hadiah+Menarik',
        'https://via.placeholder.com/300x200/8A2BE2/FFFFFF?text=Bersama+Teman',
    ];

    const photoGrid = document.querySelector('.photo-grid');
    if (photoGrid) {
        // Clear existing placeholders if you want to use only JS-added photos
        photoGrid.innerHTML = '';
        photos.forEach(src => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Foto Ulang Tahun';
            photoItem.appendChild(img);
            photoGrid.appendChild(photoItem);
        });
    }

    // Handle developer feedback form submission
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // In a real application, you would send this data to a server (e.g., using fetch API)
            // For this example, we'll just simulate a successful submission.
            console.log('Feedback Submitted:');
            console.log('Nama:', name);
            console.log('Email:', email);
            console.log('Pesan:', message);

            // Simulate API call delay
            feedbackStatus.textContent = 'Mengirim pesan...';
            feedbackStatus.classList.remove('success', 'error');

            setTimeout(() => {
                feedbackStatus.textContent = 'Terima kasih atas balasannya!';
                feedbackStatus.classList.add('success');
                feedbackForm.reset(); // Clear the form
            }, 2000); // Simulate 2-second delay
        });
    }
});
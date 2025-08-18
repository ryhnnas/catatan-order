// Cek apakah ada tombol dengan id 'kirimWa' di halaman ini
const tombolKirim = document.getElementById('kirimWa');

if (tombolKirim) {
    // Jika tombolnya ada, tambahkan event listener 'click'
    tombolKirim.addEventListener('click', function() {
        // 1. Ambil nomor WA dari input yang disembunyikan
        const nomorTujuan = document.getElementById('nomorWa').value;

        // 2. Ambil teks pesan dari textarea
        const pesan = document.getElementById('pesanOrder').value;

        // Jika pesan kosong, jangan lakukan apa-apa
        if (pesan.trim() === "") {
            alert("Mohon tulis pesanan Anda terlebih dahulu!");
            return;
        }

        // --- BAGIAN YANG DIUBAH ---
        // Tampilkan pop-up konfirmasi sebelum melanjutkan
        const konfirmasi = confirm("Anda akan dialihkan ke WhatsApp untuk mengirim pesan ini.\n\nKlik 'OK' untuk melanjutkan.");

        // Hanya jika pengguna menekan "OK", maka buka WhatsApp
        if (konfirmasi) {
            // 3. Format pesan agar sesuai dengan standar URL
            const pesanTerkode = encodeURIComponent(pesan);

            // 4. Buat URL lengkap untuk WhatsApp
            const urlWhatsApp = `https://wa.me/${nomorTujuan}?text=${pesanTerkode}`;

            // 5. Buka URL di tab baru
            window.open(urlWhatsApp, '_blank');
        }
        // Jika pengguna menekan "Cancel", maka tidak terjadi apa-apa.
    });
}
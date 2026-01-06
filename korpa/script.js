let kontainerJudul = document.querySelector('#kontainerJudul');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerCopyFormatPria').classList.toggle('none');
  document.querySelector('#kontainerCopyFormatWanita').classList.toggle('none');
  document.querySelector('#kontainerCopyEdukasi').classList.toggle('none');
  document.querySelector('#kontainerAiEdukasi').classList.add('none');
  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

// COPY FORMAT PRIA
// Memilih elemen kontainer
let kontainerCopyFormatPria = document.querySelector('#kontainerCopyFormatPria');

// Menambahkan event listener klik
kontainerCopyFormatPria.addEventListener('click', () => {
    // Teks yang ingin disalin
    const teksObj = `Riwayat alergi disangkal
    Pasien diperiksa dr. Alfi`;

    // Proses menyalin ke clipboard
    navigator.clipboard.writeText(teksObj).then(() => {
        // Memberikan efek visual seperti tombol lainnya (opsional)
        kontainerCopyFormatPria.style.backgroundColor = '#06aeb4';
        setTimeout(() => {
            kontainerCopyFormatPria.style.backgroundColor = '#08cad1';
        }, 200);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});

// COPY FORMAT WANITA
// Memilih elemen kontainer
let kontainerCopyFormatWanita = document.querySelector('#kontainerCopyFormatWanita');

// Menambahkan event listener klik
kontainerCopyFormatWanita.addEventListener('click', () => {
    // Teks yang ingin disalin
    const teksObj = `Riwayat alergi disangkal
Tidak sedang hamil
Tidak sedang menyusui
Pasien diperiksa dr. Alfi`;

    // Proses menyalin ke clipboard
    navigator.clipboard.writeText(teksObj).then(() => {
        // Memberikan efek visual seperti tombol lainnya (opsional)
        kontainerCopyFormatWanita.style.backgroundColor = '#06aeb4';
        setTimeout(() => {
            kontainerCopyFormatWanita.style.backgroundColor = '#08cad1';
        }, 200);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});

// COPY EDUKASI
// Memilih elemen kontainer
let kontainerCopyEdukasi = document.querySelector('#kontainerCopyEdukasi');

// Menambahkan event listener klik
kontainerCopyEdukasi.addEventListener('click', () => {
    // Teks yang ingin disalin
    const teksObj = `Minum obat sesuai petunjuk
Kontrol bila ada perberatan
Makan makanan yang bergizi
Aktivitas fisik teratur
Tidur cukup`;

    // Proses menyalin ke clipboard
    navigator.clipboard.writeText(teksObj).then(() => {
        // Memberikan efek visual seperti tombol lainnya (opsional)
        kontainerCopyEdukasi.style.backgroundColor = '#06aeb4';
        setTimeout(() => {
            kontainerCopyEdukasi.style.backgroundColor = '#08cad1';
        }, 200);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});


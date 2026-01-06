// HTML INPUT
let kasus = document.querySelector('#kasus');
let rekomendasiJika = document.querySelector('#rekomendasiJika');
let rekomendasiMaka = document.querySelector('#rekomendasiMaka');
let catatan = document.querySelector('#catatan');
let tombolKetikanKasusLapangan = document.querySelector('#tombolKetikanKasusLapangan');
let tombolReset = document.querySelector('#tombolReset');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanKasusLapangan.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilKasus = fungsiRapi(kasus.value);
    let hasilRekomendasiJika = fungsiRapi(rekomendasiJika.value);
    let hasilRekomendasiMaka = fungsiRapi(rekomendasiMaka.value);
    let hasilCatatan = fungsiRapi(catatan.value);

    // 1. VERSI UNTUK DISPLAY (Web)
    let teksHTML = `<b># KASUS</b><br>${hasilKasus}<br><br>` +
    `<b># REKOMENDASI</b><br>Jika: ${hasilRekomendasiJika}<br>Maka: ${hasilRekomendasiMaka}<br><br>` +
    `<b># CATATAN</b><br>${hasilCatatan}`;

    kontainerKetikan.innerHTML = '';
    let ketikan = document.createElement('p');
    ketikan.innerHTML = teksHTML;
    kontainerKetikan.appendChild(ketikan);

    // 2. VERSI UNTUK CLIPBOARD (Mendukung Bold di OneNote/Word/WA)

    // Versi HTML agar bisa Bold di OneNote/Word
    let htmlCopy = `<b># KASUS</b><br>${hasilKasus}<br><br>` +
                   `<b># REKOMENDASI</b><br>Jika: ${hasilRekomendasiJika}<br>Maka: ${hasilRekomendasiMaka}<br><br>` +
                   `<b># CATATAN</b><br>${hasilCatatan}`;

    // Versi Plain Text sebagai cadangan (fallback) atau untuk Notepad
    const keTeksDatar = (html) => html.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
    let plainCopy = `# KASUS\n${keTeksDatar(hasilKasus)}\n\n# REKOMENDASI\nJika: ${keTeksDatar(hasilRekomendasiJika)}\nMaka: ${keTeksDatar(hasilRekomendasiMaka)}\n\n# CATATAN\n${keTeksDatar(hasilCatatan)}`;

    // Proses menyalin dua format sekaligus (HTML dan Plain Text)
    const blobHtml = new Blob([htmlCopy], { type: "text/html" });
    const blobText = new Blob([plainCopy], { type: "text/plain" });
    const data = [new ClipboardItem({
        ["text/html"]: blobHtml,
        ["text/plain"]: blobText
    })];

    navigator.clipboard.write(data).then(() => {
        alert("Berhasil disalin! Format bold akan muncul di OneNote.");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });

    // RESET INPUT
    kasus.value = '';
    rekomendasiJika.value = '';
    rekomendasiMaka.value = '';
    catatan.value = '';
});

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerForm').classList.toggle('none');
  document.querySelector('#kontainerKetikan').classList.add('none');
  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

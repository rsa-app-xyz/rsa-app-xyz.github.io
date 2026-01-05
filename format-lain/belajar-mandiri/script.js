// HTML INPUT
let latarBelakang = document.querySelector('#latarBelakang');
let pertanyaan = document.querySelector('#pertanyaan');
let catatan = document.querySelector('#catatan');
let tombolKetikanBelajarMandiri = document.querySelector('#tombolKetikanBelajarMandiri');
let tombolReset = document.querySelector('#tombolReset');
let tombolHome = document.querySelector('#tombolHome');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanBelajarMandiri.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilLatarBelakang = fungsiRapi(latarBelakang.value);
    let hasilPertanyaan = fungsiRapi(pertanyaan.value);
    let hasilCatatan = fungsiRapi(catatan.value);

    // 1. VERSI UNTUK DISPLAY (Web)
    let teksHTML = `<b># LATAR BELAKANG</b><br>${hasilLatarBelakang}<br><br>` +
    `<b># PERTANYAAN</b><br>${hasilPertanyaan}<br><br>` +
    `<b># CATATAN</b><br>${hasilCatatan}`;

    kontainerKetikan.innerHTML = '';
    let ketikan = document.createElement('p');
    ketikan.innerHTML = teksHTML;
    kontainerKetikan.appendChild(ketikan);

    // 2. VERSI UNTUK CLIPBOARD (Mendukung Bold di OneNote/Word/WA)

    // Versi HTML agar bisa Bold di OneNote/Word
    let htmlCopy = `<b># LATAR BELAKANG</b><br>${hasilLatarBelakang}<br><br>` +
                   `<b># PERTANYAAN</b><br>${hasilPertanyaan}<br><br>` +
                   `<b># CATATAN</b><br>${hasilCatatan}`;

    // Versi Plain Text sebagai cadangan (fallback) atau untuk Notepad
    const keTeksDatar = (html) => html.replace(/<br\s*\/?>/gi, '\n').replace(/<[^>]+>/g, '');
    let plainCopy = `# LATAR BELAKANG\n${keTeksDatar(hasilLatarBelakang)}\n\n# PERTANYAAN\n${keTeksDatar(hasilPertanyaan)}\n\n# CATATAN\n${keTeksDatar(hasilCatatan)}`;

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
    latarBelakang.value = '';
    pertanyaan.value = '';
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

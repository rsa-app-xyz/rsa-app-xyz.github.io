// HTML INPUT
let pssom = document.querySelector('#pssom');
let nama = document.querySelector('#nama');
let kelamin = document.querySelector('#kelamin');
let umur = document.querySelector('#umur');
let keluhan = document.querySelector('#keluhan');
let ttv = document.querySelector('#ttv');
let pemfis = document.querySelector('#pemfis');
let diagnosis = document.querySelector('#diagnosis');
let plan = document.querySelector('#plan');
let tombolKetikanIgd = document.querySelector('#tombolKetikanIgd');
let tombolReset = document.querySelector('#tombolReset');
let tombolHome = document.querySelector('#tombolHome');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

// HTML OUTPUT
let kontainerKetikan = document.querySelector('#kontainerKetikan');

// TOMBOL
tombolKetikanIgd.addEventListener('click', () => {

    document.querySelector('#kontainerKetikan').classList.remove('none');

    // RUNNING FUNCTION
    let hasilPssom = fungsiPssom(pssom.value);
    let hasilNama = fungsiNama(nama.value);
    let hasilKelamin = kelamin.value.toUpperCase();
    let hasilUmur = umur.value;

    // Kita ambil versi teks bersih dari fungsi global
    let hasilKeluhan = fungsiRapi(keluhan.value);
    let hasilTtv = fungsiRapi(ttv.value);
    let hasilPemfis = fungsiRapi(pemfis.value);
    let hasilDiagnosis = fungsiDiagnosis(diagnosis.value);
    let hasilPlan = fungsiPlanIgd(plan.value);

    // 1. VERSI UNTUK DISPLAY (Web)
    let teksHTML = `Selamat ${hasilPssom} dokter, mohon maaf mengganggu waktunya. Izin melaporkan pasien baru ED:<br><br>` +
    `*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th*<br><br>` +
    `*S:*<br>${hasilKeluhan}<br><br>` +
    `*O:*<br>${hasilTtv}<br><br>${hasilPemfis}<br><br>` +
    `*A:*<br>${hasilDiagnosis}<br><br>` +
    `*P:*<br>Terapi IGD:<br>${hasilPlan}<br><br>` +
    `Mohon advice dan arahan selanjutnya dokter<br>Maturnuwun dokter`;

    kontainerKetikan.innerHTML = '';
    let ketikan = document.createElement('p');
    ketikan.innerHTML = teksHTML;
    kontainerKetikan.appendChild(ketikan);

    // 2. VERSI UNTUK CLIPBOARD (Murni Teks)
    // Fungsi bantuan untuk mengubah <br> kembali ke \n agar spasi konsisten
    const keTeksDatar = (html) => html.replace(/<br\s*\/?>/gi, '\n');

    // Susun ulang string tanpa indentasi kode sama sekali
    let teksCopy = `Selamat ${hasilPssom} dokter, mohon maaf mengganggu waktunya. Izin melaporkan pasien baru ED:

*${hasilNama}, ${hasilKelamin}, ${hasilUmur} th*

*S:*
${keTeksDatar(hasilKeluhan)}

*O:*
${keTeksDatar(hasilTtv)}

${keTeksDatar(hasilPemfis)}

*A:*
${keTeksDatar(hasilDiagnosis)}

*P:*
Terapi IGD:
${keTeksDatar(hasilPlan)}

Mohon advice dan arahan selanjutnya dokter
Maturnuwun dokter`;

    // Salin ke Clipboard
    navigator.clipboard.writeText(teksCopy).then(() => {
        // Pop up sederhana bawaan browser
        alert("Berhasil disalin ke clipboard!");
    }).catch(err => {
        console.error('Gagal menyalin: ', err);
    });

    // RESET INPUT
    pssom.value = '';
    nama.value = '';
    kelamin.value = '';
    umur.value = '';
    keluhan.value = '';
    ttv.value = '';
    pemfis.value = '';
    diagnosis.value = '';
    plan.value = '';
});

tombolReset.addEventListener('click', () => {

  document.querySelector('#kontainerKetikan').classList.add('none');
  kontainerKetikan.innerHTML = '';

})

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerCopyPemfis').classList.toggle('none');
  document.querySelector('#kontainerCopyObj').classList.toggle('none');
  document.querySelector('#kontainerForm').classList.toggle('none');
  document.querySelector('#kontainerKetikan').classList.add('none');
  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

// Mengambil semua elemen yang memiliki class 'copy-text'
const listCopyText = document.querySelectorAll('.copy-text');

listCopyText.forEach(item => {
  item.addEventListener('click', () => {
    // Ambil teks dari elemen yang diklik
    const textToCopy = item.innerText;

    // Fungsi copy ke clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Memberi sedikit feedback visual (opsional)
      console.log('Tersalin: ' + textToCopy);

      // Opsional: Beri alert singkat atau efek warna
      item.style.color = 'white';
      setTimeout(() => {
        item.style.color = 'black';
      }, 200);
    }).catch(err => {
      console.error('Gagal menyalin: ', err);
    });
  });
});

// Memilih elemen kontainer Copy Obj
let kontainerCopyObj = document.querySelector('#kontainerCopyObj');

// Menambahkan event listener klik
kontainerCopyObj.addEventListener('click', () => {
    // Teks yang ingin disalin
    const teksObj = `Preventif: anamnesis, pemeriksaan fisik, pemeriksaan penunjang
Kuratif: medikamentosa
Rehabilitatif: -
Paliatif: -`;

    // Proses menyalin ke clipboard
    navigator.clipboard.writeText(teksObj).then(() => {
        // Memberikan efek visual seperti tombol lainnya (opsional)
        kontainerCopyObj.style.backgroundColor = '#06aeb4';
        setTimeout(() => {
            kontainerCopyObj.style.backgroundColor = '#08cad1';
        }, 200);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});

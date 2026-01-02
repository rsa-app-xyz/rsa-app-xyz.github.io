// HTML INPUT
let tombolHome = document.querySelector('#tombolHome');

// OTHER
let kontainerJudul = document.querySelector('#kontainerJudul');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerCopyPlan').classList.toggle('none');
  document.querySelector('#kontainerDischarge').classList.toggle('none');
  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

// Memilih elemen kontainer Copy Obj
let kontainerCopyPlan = document.querySelector('#kontainerCopyPlan');

// Menambahkan event listener klik
kontainerCopyPlan.addEventListener('click', () => {
    // Teks yang ingin disalin
    const teksObj = `Perbaikan klinis
TTV stabil`;

    // Proses menyalin ke clipboard
    navigator.clipboard.writeText(teksObj).then(() => {
        // Memberikan efek visual seperti tombol lainnya (opsional)
        kontainerCopyPlan.style.backgroundColor = '#06aeb4';
        setTimeout(() => {
            kontainerCopyPlan.style.backgroundColor = '#08cad1';
        }, 200);
    }).catch(err => {
        console.error('Gagal menyalin teks: ', err);
    });
});

let kontainerJudul = document.querySelector('#kontainerJudul');
let setPlaceholder = document.querySelector('#setPlaceholder');

let kontainerPemfis = document.querySelector('#kontainerPemfis');
let kontainerSpreadsheet = document.querySelector('#kontainerSpreadsheet');
let kontainerIgd = document.querySelector('#kontainerIgd');
let kontainerBangsal = document.querySelector('#kontainerBangsal');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerPemfis').classList.toggle('none');
  document.querySelector('#kontainerSpreadsheet').classList.toggle('none');
  document.querySelector('#kontainerIgd').classList.toggle('none');
  document.querySelector('#kontainerBangsal').classList.toggle('none');

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

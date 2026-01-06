let kontainerJudul = document.querySelector('#kontainerJudul');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerAiMedis').classList.toggle('none');
  document.querySelector('#kontainerAiReviewPenyakitSingkat').classList.toggle('none');
  document.querySelector('#kontainerAiReviewPenyakitLengkap').classList.toggle('none');
  document.querySelector('#kontainerAiObat').classList.toggle('none');
  document.querySelector('#kontainerFormatKasusLapangan').classList.toggle('none');
  document.querySelector('#kontainerFormatBelajarMandiri').classList.toggle('none');

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

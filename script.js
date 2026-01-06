let kontainerJudul = document.querySelector('#kontainerJudul');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerIgd').classList.toggle('none');
  document.querySelector('#kontainerBangsal').classList.toggle('none');
  document.querySelector('#kontainerKorpa').classList.toggle('none');
  document.querySelector('#kontainerNotes').classList.toggle('none');
  document.querySelector('#kontainerOther').classList.toggle('none');

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

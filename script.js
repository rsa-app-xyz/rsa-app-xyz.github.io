let kontainerJudul = document.querySelector('#kontainerJudul');
let setPlaceholder = document.querySelector('#setPlaceholder');

let kontainerSpreadsheet = document.querySelector('#kontainerSpreadsheet');
let kontainerIgd = document.querySelector('#kontainerIgd');
let kontainerBangsal = document.querySelector('#kontainerBangsal');
let kontainerAi = document.querySelector('#kontainerAi');

kontainerJudul.addEventListener('click', () => {

  document.querySelector('#kontainerSpreadsheet').classList.toggle('none');
  document.querySelector('#kontainerIgd').classList.toggle('none');
  document.querySelector('#kontainerBangsal').classList.toggle('none');
  document.querySelector('#kontainerAi').classList.toggle('none');

  document.querySelector('#kontainerTextarea').classList.toggle('none');

})

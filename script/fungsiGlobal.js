// PSSOM
let fungsiPssom = (x) => {
  if (x === "p" || x === "P") {
    return "pagi"
  }
  else if (x === "s" || x === "S") {
    return "siang"
  }
  else if (x === "so" || x === "SO") {
    return "sore"
  }
  else if (x === "m" || x === "M") {
    return "malam"
  }
  return "pagi"
}

// NAMA KAPITAL
let fungsiNama = (namaLengkap) => {
  let namaPerKata = namaLengkap.toLowerCase().split(" ");
  return namaPerKata.map((nama) => {
    return nama[0].toUpperCase() + nama.substring(1);
  }).join(" ");
}

// DIAGNOSIS RAPI
let fungsiDiagnosis = (dx) => {
    const arrayBarisMentah = dx.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const arrayBerstrip = arrayBarisBersih.map(baris => {
        return `- ${baris.trim()}`;
    });
    const diagnosisHTML = arrayBerstrip.join('<br>');
    return diagnosisHTML
}

// RAPI
let fungsiRapi = (rapi) => {
  if (rapi !== "") {
    const arrayBarisMentah = rapi.split('\n');
    const arrayBarisBersih = arrayBarisMentah.filter(baris => {
        return baris.trim() !== '';
    });
    const rapiHTML = arrayBarisBersih.join('<br>');
    return rapiHTML
  }
  return "-"
}

// PLAN IGD
const toTitleCase = (str) => {
  if (!str || str.trim() === '') {
    return '';
  }
  return str.split(/\s+/)
    .map(word => {
      if (word.length === 0) return '';
      if (word.toLowerCase() === 'po') return 'PO';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
};

let fungsiPlanIgd = (plan) => {
  if (!plan) return '';
  const arrayBarisMentah = plan.split('\n');
  const arrayBarisBersih = arrayBarisMentah.filter(baris => baris.trim() !== '');
  const arrayBarisDiformat = arrayBarisBersih.map(baris => {
    const kataKata = baris.trim().split(/\s+/);
    let hasilKata = [];
    for (let i = 0; i < kataKata.length; i++) {
      let kata = kataKata[i];
      if (kata.length === 0) continue;
      if (i < 2) {
        if (kata.toLowerCase() === 'po') {
           hasilKata.push('PO');
        } else {
           hasilKata.push(kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase());
        }
      } else {
        if (kata.toLowerCase() === 'po') {
          hasilKata.push('PO');
        } else {
          hasilKata.push(kata);
        }
      }
    }
    let barisDiformat = hasilKata.join(' ');
    barisDiformat = barisDiformat.replace(/\bpo\b/gi, 'PO');
    let kataPertama = kataKata[0] ? kataKata[0].replace(/\bpo\b/gi, 'PO') : '';
    let kataKedua = kataKata[1] ? kataKata[1].replace(/\bpo\b/gi, 'PO') : '';
    let sisaKata = kataKata.slice(2).join(' ').replace(/\bpo\b/gi, 'PO');
    let kataPertamaCapital = kataPertama.length > 0 ? kataPertama.charAt(0).toUpperCase() + kataPertama.slice(1).toLowerCase() : '';
    if (kataPertama.toUpperCase() === 'PO') kataPertamaCapital = 'PO';
    let kataKeduaCapital = kataKedua.length > 0 ? kataKedua.charAt(0).toUpperCase() + kataKedua.slice(1).toLowerCase() : '';
    if (kataKedua.toUpperCase() === 'PO') kataKeduaCapital = 'PO';
    let barisAkhir = [kataPertamaCapital, kataKeduaCapital, sisaKata].filter(Boolean).join(' ');
    return barisAkhir;
  });

  const arrayBerstrip = arrayBarisDiformat.map(baris => {
    return baris ? `- ${baris}` : '';
  });

  const planHTML = arrayBerstrip.join('<br>');
  return planHTML;
}

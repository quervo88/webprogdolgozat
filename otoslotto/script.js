function otoslotto() {
    const lottoSzamok = [];

    while (lottoSzamok.length < 5) {
        const veletlenSzam = Math.floor(Math.random() * 90) + 1;

        if (!lottoSzamok.includes(veletlenSzam)) {
            lottoSzamok.push(veletlenSzam);
        }
    }

    lottoSzamok.sort((a, b) => a - b);

    return lottoSzamok;
}

function generaltSzamok() {
    const eredmenyElem = document.getElementById('eredmeny');
    
    // Ötös lottó számok generálása
    const otoslottoEredmeny = otoslotto();

    // Eredmény megjelenítése
    eredmenyElem.innerHTML = 'Generált számok: ' + otoslottoEredmeny.join(', ');
}
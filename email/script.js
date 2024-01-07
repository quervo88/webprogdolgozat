function emailCimetGeneral(teljesNev, szuletesiEv = 1970) {
    const nevek = teljesNev.split(' ');

    // Az első 3 karakter az összes név első három karaktere (vagy kevesebb, ha rövidebb)
    const azonosito = nevek.map(n => n.slice(0, 3).toLowerCase()).join('');

    // Születési év utolsó számjegye
    const evAzonosito = szuletesiEv.toString().slice(-1);

    // Teljes email cím generálása
    const emailCim = azonosito + evAzonosito + '@duck.com';
    return emailCim;
}

function generateEmail() {
    const teljesNevInput = document.getElementById('teljesNevInput').value;
    const szuletesiEvInput = document.getElementById('szuletesiEvInput').value;

    // E-mail cím generálása
    const generaltEmail = emailCimetGeneral(teljesNevInput, parseInt(szuletesiEvInput));

    // Eredmény megjelenítése
    const eredmenyElem = document.getElementById('eredmeny');
    eredmenyElem.innerHTML = 'Generált E-mail cím: ' + generaltEmail;
}

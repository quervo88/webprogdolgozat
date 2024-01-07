function hatvanyoz(szamok, hatvany) {
    if (!Array.isArray(szamok) || isNaN(hatvany) || szamok.some(isNaN)) {
        return [];
    }

    const eredmeny = szamok.map(szam => Math.pow(szam, hatvany));
    return eredmeny;
}

function szamokatHatvanyoz() {
    const szamokInput = document.getElementById('szamokInput').value;
    const hatvanyInput = document.getElementById('hatvanyInput').value;

    const szamok = szamokInput.split(',').map(Number);

    const eredmenyTomb = hatvanyoz(szamok, parseFloat(hatvanyInput));

    const eredmenyElem = document.getElementById('eredmeny');

    if (eredmenyTomb.length === 0) {
        eredmenyElem.innerHTML = 'Hibás bemenet, kérlek ellenőrizd a számokat és a hatványt!';
    } else {
        eredmenyElem.innerHTML = 'Eredmény: ' + eredmenyTomb.join(', ');
    }
}

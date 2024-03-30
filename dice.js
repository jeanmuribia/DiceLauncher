let selectedDice = [];

function addDie(sides) {
    selectedDice.push(sides);
    document.getElementById('selected-dice').innerText = `Dés sélectionnés: ${selectedDice.join(', ')}`;
}

function rollDice() {
    let results = selectedDice.map(sides => Math.ceil(Math.random() * sides));
    document.getElementById('results').innerText = `Résultats: ${results.join(', ')}`;

    calculateOutcome(results);
    selectedDice = []; // Reset après le lancement
    document.getElementById('selected-dice').innerText = `Dés sélectionnés:`;
}

function calculateOutcome(results) {
    let successes = results.filter(result => result >= 7).length;
    let failures = results.filter(result => result <= 3).length;

    let summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = ''; // Efface le contenu précédent

    // Ajoute les pictogrammes pour les réussites
    for (let i = 0; i < successes; i++) {
        let img = document.createElement('img');
        img.src = 'dés/coche.png'; // Chemin vers l'image de réussite
        img.alt = 'Réussite';
        summaryElement.appendChild(img);
    }

    // Ajoute les pictogrammes pour les échecs
    for (let i = 0; i < failures; i++) {
        let img = document.createElement('img');
        img.src = 'dés/fermer.png'; // Chemin vers l'image d'échec
        img.alt = 'Échec';
        summaryElement.appendChild(img);
    }
}


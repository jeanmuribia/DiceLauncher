let selectedDice = [];

function addDie(sides) {
    selectedDice.push(sides);
    document.getElementById('selected-dice').innerText = `Dés sélectionnés: ${selectedDice.join(', ')}`;
}

function rollDice() {
    let results = selectedDice.map(sides => Math.ceil(Math.random() * sides));
    document.getElementById('results').innerText = `Résultats: ${results.join(', ')}`;

    calculateOutcome(results);
   
}

function resetDice() {
    selectedDice = []; // Efface la sélection de dés
    document.getElementById('selected-dice').innerText = 'Dés sélectionnés:';
    document.getElementById('results').innerText = '';
    document.getElementById('summary').innerText = '';
}


function calculateOutcome(results) {
    let successes = results.filter(result => result >= 7).length;
    let failures = results.filter(result => result <= 3).length;

    let summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = ''; // Efface le contenu précédent

    // Ajoute les pictogrammes pour les réussites
    for (let i = 0; i < successes; i++) {
        let imgSuccess = document.createElement('img');
        imgSuccess.src = 'dés/coche.png'; // Chemin vers l'image de réussite
        imgSuccess.alt = 'Réussite';
        imgSuccess.className = 'success-icon';
        summaryElement.appendChild(imgSuccess);
    }

    // Ajoute les pictogrammes pour les échecs
    for (let i = 0; i < failures; i++) {
        let imgFailure = document.createElement('img');
        imgFailure.src = 'dés/fermer.png'; // Chemin vers l'image d'échec
        imgFailure.alt = 'Échec';
        imgFailure.className = 'failure-icon'
        summaryElement.appendChild(imgFailure);
    }
}


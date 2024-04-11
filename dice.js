let selectedDice = [];

function addDie(sides) {
    if (selectedDice.length >= 3) {
        let container = document.querySelector('.container');
        container.classList.add('shake-error');
        
        setTimeout(() => {
            container.classList.remove('shake-error');
        }, 1000);

        return;
    }

    let dieName;
    switch (sides) {
        case 6:
            dieName = 'Malus';
            break;
        case 8:
            dieName = 'Neutre';
            break;
        case 10:
            dieName = 'Bonus';
            break;
        case 12:
            dieName = 'Critique';
            break;
        default:
            dieName = 'Inconnu'; // Au cas où
            break;
    }

    selectedDice.push(dieName);
    document.getElementById('selected-dice').innerText = `Dés sélectionnés: ${selectedDice.join(', ')}`;
}

function rollDice() {
    let results = selectedDice.map(dieName => {
        switch (dieName) {
            case 'Malus':
                return Math.ceil(Math.random() * 6);
            case 'Neutre':
                return Math.ceil(Math.random() * 8);
            case 'Bonus':
                return Math.ceil(Math.random() * 10);
            case 'Critique':
                return Math.ceil(Math.random() * 12);
            default:
                return 0; // Cas par défaut si nécessaire
        }
    });

    document.getElementById('results').innerText = `Résultats: ${results.join(', ')}`;

    calculateOutcome(results);
}

function resetDice() {
    selectedDice = [];
    document.getElementById('selected-dice').innerText = 'Dés sélectionnés:';
    document.getElementById('results').innerText = '';
    document.getElementById('summary').innerText = '';
}


function calculateOutcome(results) {
    let successes = results.filter((result, index) => {
        return selectedDice[index] === 'Malus' ? result === 6 : result >= 7;
    }).length;

    let failures = results.filter(result => result <= 3).length;

    let summaryElement = document.getElementById('summary');
    summaryElement.innerHTML = ''; // Efface le contenu précédent

    // Ajoute les pictogrammes pour les réussites
    for (let i = 0; i < successes; i++) {
        let imgSuccess = document.createElement('img');
        imgSuccess.src = 'dés/coche.png';
        imgSuccess.alt = 'Réussite';
        imgSuccess.className = 'success-icon';
        summaryElement.appendChild(imgSuccess);
    }

    // Ajoute les pictogrammes pour les échecs
    for (let i = 0; i < failures; i++) {
        let imgFailure = document.createElement('img');
        imgFailure.src = 'dés/fermer.png';
        imgFailure.alt = 'Échec';
        imgFailure.className = 'failure-icon';
        summaryElement.appendChild(imgFailure);
    }

    document.getElementById('results').innerText = `Réussites: ${successes}, Échecs: ${failures}`;
}


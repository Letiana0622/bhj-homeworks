let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }
        if (counterDead == 10) {
            alert ('Вы победили!');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
            lost.textContent = counterLost;
            }
        if (counterLost == 5) {
             alert ('Вы проиграли!');
                counterDead = 0;
                counterLost = 0;
                dead.textContent = counterDead;
                lost.textContent = counterLost;
                }
        });
    }

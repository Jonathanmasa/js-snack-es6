// Snack 1
// Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

// creo l'array di oggetti
const bici = [
    {
        'nome': 'atala',
        'peso': 6,
    },

    {
        'nome': 'carrera',
        'peso': 4,
    },

    {
        'nome': 'bianchi',
        'peso': 8,
    },

    {
        'nome': 'ktm',
        'peso': 10,
    },

    {
        'nome': 'focus',
        'peso': 5,
    },
];
console.table(bici);

// creo variabile peso  minore
let biciLeggera = bici[0];

// ciclo for per trovare la bici con il peso minore
for (let i = 1; i < bici.length; i++) {

    if (bici[i].peso < biciLeggera.peso) {
        biciLeggera = bici[i];

    }
}

// stampo il risultato
console.log("la bici con il peso minore è:", biciLeggera);



// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// creo l'array delle squadre di calcio
const squadre = [
    {
        'nome': 'atalanta',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },

    {
        'nome': 'roma',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },

    {
        'nome': 'milan',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },

    {
        'nome': 'inter',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },

    {
        'nome': 'juventus',
        'puntiFatti': 0,
        'falliSubiti': 0,
    },
];
console.table(squadre);

// genero numeri casuali per i punti e per i falli con una funzione
squadre.forEach(squadra => {
    squadra.puntiFatti = Math.floor(Math.random() * 51);
    squadra.falliSubiti = Math.floor(Math.random() * 51);
});

// stampo array con i falli e punti generati casualmente
console.table(squadre);



// creo array con solo i nomi delle squadre e i falli subiti
const nuovaLista = squadre.map(squadra => {
    return { nome: squadra.nome, falliSubiti: squadra.falliSubiti};
});

// stampo il nuovo array
console.table(nuovaLista);
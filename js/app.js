const btn = document.getElementById('btn')
const quote = document.getElementById('quote')

const QUOTES =['Chuck Norris ne ment pas, c\'est la vérité qui se trompe.',
'Chuck Norris est en couleur sur les photos Noir et Blanc.',
'Chuck Norris a déjà compté jusqu\'à l\'infini. Deux fois.',
'Un jour Chuck Norris a dit "Va voir la-bas si j\'y suis"... et il y était...',
'Chuck Norris est contre les radars automatiques : ça l\'éblouit lorsqu\'il fait du vélo.',
'Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.',
'Chuck Norris est mort depuis 10 ans, mais la Mort n\'a pas encore trouvé le courage d\'aller lui dire.',
'Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.',
'Certains disent : "La violence ne résout rien". Chuck Norris leur répond : "C\'est que t\'as pas tapé assez fort".',
'Chuck Norris va régulièrement voir des matchs du PSG pour ne pas oublier ce qu\'est la défaite.',
'Chuck Norris peut encercler ses ennemis. Tout seul.',
'Chuck Norris peut t\'étrangler avec un téléphone sans fil.',
'Chuck Norris sait parler le braille.',
'Un jour Chuck Norris a eu un zéro en latin, depuis c\'est une langue morte.',
'En France, on dit aux enfants que s\'ils ne veulent pas manger, le grand méchant loup les bouffera tout crus. Aux Etats-Unis, c\'est de Chuck Norris qu\'on leur parle. C\'est pour ça qu\'il y a tant d\'obèses.',
'Quand Chuck Norris marche sur un râteau, le rateau se prend Chuck Norris dans la gueule.']
                                        // fonction RandomInt
const getRandomInt = (max = 255) => {   // créer une fonction qui retourne un entier aléatoire entre 0 et max 
    return Math.floor(Math.random() * max)
}

// fonctions changeColor
const changeColors = () => {
    const red = getRandomInt(255)
    const blue = getRandomInt(255)
    const green = getRandomInt(255)
    document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
    btn.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
    quote.style.color = `rgb(${red}, ${blue}, ${green})`
}

// function getQuote
const getQuote = () => {
    changeColors() 
    const selectedQuote = QUOTES[getRandomInt(QUOTES.length)] // RÉCUPER UNE QUOTE ALÉATOIRE ET LIMITER LA VALEUR DE L'ENTIER A QUOTE.LENGTH
    quote.innerText = selectedQuote
}

btn.addEventListener('click', getQuote)
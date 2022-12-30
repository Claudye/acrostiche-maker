/**
 * Transforme la première lettre en majuscule
 * @param {string} text
 * @returns {string}
 */
var ucFirst = (text) => {
  return text.trim().charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Les citations et phrases
 * @type {Object}
 */
const bases = {
  love: [
    "Aime celui qui t'aime",
    "Bonheur",
    "Combats le mensonge et ta relation sera prospère",
    "Donne tout ce tu peux, le ciel te le rendra",
    "Epargne tes grains d'amour, tu ne sais qui en aurait besoin 😎",
    "Fais de toi le centre de ton amour",
    "Guéris tes anciennes blessures et acroches toi au présent",
    "Honnore ta relation et ton couple sera honoré",
    "Ignore le passé de ton ex, c'est son présent qui compte" ,
    "Je t'aime est un mot que tu entends, sois prudent",
    "Kyrielles sont tes atouts, ne te laisse pas humilier",
    "L'amitié double tes joies et réduit de moitié tes peines.",
    "Mieux vaut donner que recevoir",
    "Ne juge jamais un livre par son film",
    "On n'aime vraiment quand on a été déçu une fois",
    "Peau contre peau, nez contre nez, fais le reste",
    "Qu'on aime, ou qu'on n'aime pas on n'est aimé par quelqu'un",
    "Refléchir avant de dire oui est un acte d'un responsable",
    "Se donner de la valeur, vous fait respecter",
    "Tout commence un jour, tout finit un autre",
    "Une vie sans amour, est comme une sauce sans sel",
    "Vois les choses autrement",
    "What ? 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣 j'sais pas",
    "Xx e siècle 🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣",
    "Y a-t-il, un autre paradis outre l'amour ? Non !...",
    "Zeus est le père d'Hercule point"
  ],
};

/**
 * Liste, paragraphe de l'acrostiche
 */
const liste = document.getElementById("liste");
liste.innerHTML ="<p style='margin:1rem 0;'>Votre acrostiche s'affiche ici</p>";

/**
 * @type {String[]}
 */
var results = [];

let category = "love";


/**
 * @type {Array}
 */
const categories = Object.keys(bases);

if (categories.includes(category)) {
  /**
   * @type {String []}
   */
  var loves_sentences = bases[category];
}

/*
* Lorsqu'on clique sur géner
*/

document.getElementById("submit").onclick = (e) => {

  /**
   * @type {string}
   */
  let input = document.querySelector("#name").value;

  if (input.length>0) {
      liste.innerHTML=""
  }
  document.querySelector("#name").placeholder = input;

  for (let i = 0; i < input.length; i++) {
    var c = input.charAt(i).toUpperCase();

    const acr = loves_sentences.map((text) => ucFirst(text));
    acr.forEach(function (text, index) {
      if (text.startsWith(c)) {
        results.push(text);
      }
    });
  }

  results.forEach(function (text, ind) {
    let li = document.createElement("li");
    li.innerHTML =
      '<span class="first-caract">' +
      text.charAt(0) +
      "</span>" +
      text.slice(1) +
      " <b>;</b>";
    liste.append(li);
   
  });
  results= [];
};

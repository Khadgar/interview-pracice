var topNbuzzword = function(numToys, topToys, toys, quotes) {
  const map = {};
  for (let i = 0; i < toys.length; i++) {
    let sumOfToy = 0;
    let appearance = 0;
    for (let j = 0; j < quotes.length; j++) {
      const sumInQuote = quotes[j]
        .toLowerCase()
        .replace(/[^a-zA-Z ]/g, '')
        .split(' ')
        .filter(el => el === toys[i].toLowerCase()).length;
      if (sumInQuote > 0) {
        appearance++;
      }
      sumOfToy += sumInQuote;
    }
    map[toys[i]] = { sumOfToy, appearance, word: toys[i] };
  }
  return Object.values(map)
    .sort((a, b) => {
      if (a.sumOfToy === b.sumOfToy) {
        return b.appearance - a.appearance;
      }
      return b.frq - a.frq;
    })
    .slice(0, topToys)
    .map(e => e.word);
};

const numToys = 6;
const topToys = 2;
const toys = ['elmo', 'elsa', 'legos', 'drone', 'tablet', 'warcraft'];
const quotes = [
  "Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
  'The new Elmo dolls are super high quality',
  'Expect the Elsa dolls to be very popular this year, Elsa!',
  "Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
  'For parents of older kids, look into buying them a drone',
  'Warcraft is slowly rising in popularity ahead of the holiday season',
];

console.log(topNbuzzword(numToys, topToys, toys, quotes));

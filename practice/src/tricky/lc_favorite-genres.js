// https://leetcode.com/discuss/interview-question/373006

var favoriteGenres = function(userSongs, songGenres) {
  const output = {};

  if (Object.keys(songGenres).length === 0) {
    for (let user in userSongs) {
      output[user] = [];
    }
    return output;
  }

  if (Object.keys(userSongs).length === 0) {
    return {};
  }

  const songMap = {};

  for (let genre in songGenres) {
    songGenres[genre].forEach(el => {
      songMap[el] = genre;
    });
  }

  for (let user in userSongs) {
    output[user] = [];
    const userMap = new Set();
    userSongs[user].forEach(el => {
      if (userMap.has(songMap[el])) {
        output[user].push(songMap[el]);
      } else {
        userMap.add(songMap[el]);
      }
    });
  }
  return output;
};

const userSongs = {
  David: ['song1', 'song2', 'song3', 'song4', 'song8'],
  Emma: ['song5', 'song6', 'song7'],
};

const songGenres = {
  Rock: ['song1', 'song3'],
  Dubstep: ['song7'],
  Techno: ['song2', 'song4'],
  Pop: ['song5', 'song6'],
  Jazz: ['song8', 'song9'],
};
console.log(favoriteGenres(userSongs, songGenres));

// Output: {
//   "David": ["Rock", "Techno"],
//   "Emma":  ["Pop"]
// }

const userSongs2 = {
  David: ['song1', 'song2'],
  Emma: ['song3', 'song4'],
};
const songGenres2 = {};

console.log(favoriteGenres(userSongs2, songGenres2));

// Output: {
//   "David": [],
//   "Emma":  []
// }
//

import { SUBMIT_INPUT } from "../actions";
import { eValues } from '../abjad-keys/earthly'

const initialState = {
  total: null,
  wordSums: [],
  letters: null,
  spaced: null
}

const earthly = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INPUT:
      let input = action.text
      let totalSum = 0
      let words = []
      let letters = []
      let spaced = []

      // total sum
      const splitString = input.trim().split('')
      splitString.map(letter => {
        if (eValues[letter]) {
          totalSum += eValues[letter];
        }
        return null;
      });

      // word sums
      const splitStringSpaced = input.trim().split(' ');
      splitStringSpaced.map(word => {
        if (word !== '') {
          let currentWord = {}
          let eWordSum = 0;
          const splitWord = word.split('');
          splitWord.map(letter => {
            eWordSum += eValues[letter];
            return null
          });
          currentWord['key'] = word
          currentWord['value'] = eWordSum
          words.push(currentWord)
        }
        return null;
      });

      // letter sums
      splitString.map(letter => {
        if (eValues[letter]) {
          letters.push(eValues[letter]);
          spaced.push(eValues[letter]);
        } else if (letter === ' ') {
          letters.push('   ');
          spaced.push('   ')
        }
        return null;
      })
      letters = letters.join('')
      spaced = spaced.join(' ')


      return {
        ...state,
        total: totalSum,
        wordSums: words,
        letters,
        spaced
      }

    default:
      return state
  }
}

export default earthly
import { SUBMIT_INPUT } from "../actions";
import { hValues } from '../abjad-keys/heavenly'

const initialState = {
  total: null,
  wordSums: [],
  letters: null,
  spaced: null,
}

const heavenly = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INPUT:

      let input = action.text
      let totalSum = 0
      let words = []
      let letters = []
      let spaced = []

      // total and letter sums
      const splitString = input.trim().split('')
      
      splitString.forEach(letter => {
        if (hValues[letter]) {
          totalSum += hValues[letter];
          letters.push(hValues[letter]);
          spaced.push(hValues[letter])
        } else if (letter === ' ') {
          letters.push('   ');
          spaced.push('   ')
        }
      })
      letters = letters.join('')
      spaced = spaced.join(' ')

      // word sums
      const splitStringSpaced = input.trim().split(' ');
      splitStringSpaced.forEach(word => {
        if (word !== '') {
          let currentWord = {}
          let hWordSum = 0;
          const splitWord = word.split('');
          splitWord.forEach(letter => {
            hWordSum += hValues[letter];
          });
          currentWord['key'] = word
          currentWord['value'] = hWordSum
          words.push(currentWord)
        }
      });

      return {
        ...state,
        total: totalSum,
        wordSums: words,
        letters,
        spaced,
      }

    default:
      return state
  }
}

export default heavenly
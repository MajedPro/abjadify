import { SUBMIT_INPUT } from "../actions";
import { hValues } from '../abjad-keys/heavenly'

const initialState = {
  total: null,
  wordSums: [],
  letters: null
}

const heavenly = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INPUT:

      let input = action.text
      let totalSum = 0
      let words = []
      let letters = []

      // total sum
      const splitString = input.trim().split('')
      splitString.map(letter => {
        if (hValues[letter]) {
          totalSum += hValues[letter];
        }
      });

      // word sums
      const splitStringSpaced = input.trim().split(' ');
      splitStringSpaced.map(word => {
        let currentWord = {}
        let hWordSum = 0;
        const splitWord = word.split('');
        const reversedWord = splitWord.reverse().join('')
        splitWord.map(letter => {
          hWordSum += hValues[letter];
        });
        currentWord['key'] = word
        currentWord['value'] = hWordSum
        words.push(currentWord)
      });

      // letter sums
      const splitStringReversed = input.trim().split('').reverse();
      splitStringReversed.map(letter => {
        if (hValues[letter]) {
          letters.push(hValues[letter]);
        } else {
          letters.push(' ');
        }
      })
      letters = letters.join('')

      return {
        ...state,
        total: totalSum,
        wordSums: words,
        letters: letters
      }

    default:
      return state
  }
}

export default heavenly
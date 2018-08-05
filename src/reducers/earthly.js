import { SUBMIT_INPUT } from "../actions";
import { eValues } from '../abjad-keys/earthly'

const initialState = {
  total: null,
  wordSums: [],
  letters: null
}

const earthly = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INPUT:
      let input = action.text
      let totalSum = 0
      let words = []
      let letters = []

      // total sum
      const splitString = input.split('')
      splitString.map(letter => {
        if (eValues[letter]) {
          totalSum += eValues[letter];
        }
      });

      // word sums
      const splitStringSpaced = input.split(' ');
      splitStringSpaced.map(word => {
        let currentWord = {}
        let eWordSum = 0;
        const splitWord = word.split('');
        const reversedWord = splitWord.reverse().join('')
        splitWord.map(letter => {
          eWordSum += eValues[letter];
        });
        currentWord['key'] = word
        currentWord['value'] = eWordSum
        words.push(currentWord)
      });

      // letter sums
      const splitStringReversed = input.split('').reverse();
      splitStringReversed.map(letter => {
        if (eValues[letter]) {
          letters.push(eValues[letter]);
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

export default earthly
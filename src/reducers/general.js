import { CHANGE_UNUSED, COUNT_LETTERS } from "../actions";
import { neutral, key } from '../abjad-keys/neutral'

const initialState = {
  letterCount: null,
  unused: null,
}

const general = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_UNUSED:
      const input = action.text
      const splitString = input.trim().split('')
      let unused = neutral.slice()
      splitString.forEach(letter => {
        const index = unused.indexOf(letter)
        if (index > -1) {
          unused.splice(index, 1)
        }
      })
      return {
        ...state,
        unused
      }

    case COUNT_LETTERS:
      const input2 = action.text
      const splitString2 = input2.trim().split('')
      let letterCount = 0;
      splitString2.forEach(letter => {
        if (key[letter]) {
          letterCount += 1
        }
      })
      return {
        ...state,
        letterCount
      }

    default:
      return state
  }
}

export default general
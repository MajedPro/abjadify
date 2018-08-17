import { SUBMIT_INPUT } from "../actions";
import { neutral, key } from '../abjad-keys/neutral'

const initialState = {
  letterCount: null,
  unused: null,
}

const general = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_INPUT:
      const input = action.text
      const splitString = input.trim().split('')
      let unused = neutral.slice()
      let letterCount = 0;
      splitString.forEach(letter => {
        const index = unused.indexOf(letter)
        if (index > -1) {
          unused.splice(index, 1)
        }
        if (key[letter]) {
          letterCount += 1
        }
      })
      return {
        ...state,
        unused,
        letterCount
      }

    default:
      return state
  }
}

export default general
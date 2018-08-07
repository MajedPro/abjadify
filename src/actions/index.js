export const SUBMIT_INPUT = 'SUBMIT_INPUT';
export const submitInput = text => ({
  type: SUBMIT_INPUT,
  text
})

export const CHANGE_UNUSED = 'CHANGE_UNUSED';
export const changeUnused = text => ({
  type: CHANGE_UNUSED,
  text
})

export const COUNT_LETTERS = 'COUNT_LETTERS';
export const countLetters = text => ({
  type: COUNT_LETTERS,
  text
})
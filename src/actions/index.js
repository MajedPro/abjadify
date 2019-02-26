import { API_BASE_URL } from '../config';

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

export const GET_SUMS_REQUEST = 'GET_SUMS_REQUEST';
export const getSumsRequest = () => ({
  type: GET_SUMS_REQUEST
})

export const GET_SUMS_SUCCESS = 'GET_SUMS_SUCCESS';
export const getSumsSuccess = sums => ({
  type: GET_SUMS_SUCCESS,
  sums
})

export const CREATE_SUM_SUCCESS = 'CREATE_SUM_SUCCESS';
export const createSumSuccess = sum => ({
  type: CREATE_SUM_SUCCESS,
  sum
})

export const DOWNLOAD_SUCCESS = 'DOWNLOAD_SUCCESS';
export const downloadSuccess = text => ({
  type: DOWNLOAD_SUCCESS,
  text
})

export const downloadText = (data, dest) => (dispatch) => {
  fetch(`${API_BASE_URL}/download/${data}/${dest}`, {
    method: 'GET',
    // headers: {
      
    // }
    // body: JSON.stringify({data, dest})
  })
    .then(res => res.json())
    .catch(err => console.log(err))
}
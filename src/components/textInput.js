import React from 'react';
import {connect} from 'react-redux'
import { submitInput } from '../actions';
import './textInput.css'

export class TextInput extends React.Component {
  onSubmit(event) {
    event.preventDefault()
    const textArea = document.getElementById('userInput')
    const split = textArea.value.split('\n')
    console.log(split.join(''))
    this.props.dispatch(submitInput(split.join('')))
    this.input.value = ''
    // console.log(value)
  }

  render() {
    return (
      <form className='input-form' onSubmit={e => this.onSubmit(e)}>
        <label htmlFor='userInput' className='input-label'>:Enter arabic text here</label>
        <textarea
          type='text'
          name='userInput'
          id='userInput'
          className='userInput'
          autoComplete='off'
          placeholder='الله أكبر...'
          rows='10'
          cols='30'
          ref={input => (this.input = input)}
        />
        <button
          type='submit'
          name='submit'
          id='submitButton'
          className='submitButton'
        >
          Submit
        </button>
      </form>
    )
  }
}

export default connect()(TextInput)
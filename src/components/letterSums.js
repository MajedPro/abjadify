import React from 'react';
import { connect } from 'react-redux';
import './letterSums.css'

export function LetterSums(props) {
  return (
    <p>{props.letters}</p>
  )
}

const mapStateToProps = (state) => ({
  letters: state.heavenly.letters
})

export default connect(mapStateToProps)(LetterSums)
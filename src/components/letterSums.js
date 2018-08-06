import React from 'react';
import { connect } from 'react-redux';
import './letterSums.css'

export function LetterSums(props) {

  const output = props.heavenly ? <div className='letters-container'>
    <p>Toggle Spacing</p>
    <label className="switch">
      <input
        type="checkbox"
        id='checkbox'
        onClick={() => props.toggle()} />
      <span className="slider round"></span>
    </label>
    <div className='letters compressed' id='h-compressed'>
      <h2>Heavenly</h2>
      <p className='letter-values'>{props.heavenly}</p>
    </div>
    <div className='letters spaced hidden' id='h-spaced'>
      <h2>Heavenly</h2>
      <p className='letter-values'>{props.hspaced}</p>
    </div>
    <div className='letters compressed' id='e-compressed'>
      <h2>Earthly</h2>
      <p className='letter-values'>{props.earthly}</p>
    </div>
    <div className='letters spaced hidden' id='e-spaced'>
      <h2>Earthly</h2>
      <p className='letter-values'>{props.espaced}</p>
    </div>
  </div> : null
  return (
    <div>
      {output}
    </div>
  )
}

const mapStateToProps = (state) => ({
  heavenly: state.heavenly.letters,
  earthly: state.earthly.letters,
  hspaced: state.heavenly.spaced,
  espaced: state.earthly.spaced
})

export default connect(mapStateToProps)(LetterSums)
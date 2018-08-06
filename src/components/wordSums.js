import React from 'react';
import { connect } from 'react-redux';
import './wordSums.css'

export class WordSums extends React.Component {

  render() {
    let heavenly = this.props.heavenly.map((word, index) => {
      return (
        <li key={index} className='hpair'>
          <p className='word'>{word.key}</p>
          <p>{word.value}</p>
        </li>
      )
    })

    let earthly = this.props.earthly.map((word, index) => {
      return (
        <li key={index} className='epair'>
          <p className='word'>{word.key}</p>
          <p>{word.value}</p>
        </li>
      )
    })
    const output = this.props.heavenly.length > 0 ? <div className='list-container'>
      <h2>Heavenly Word Sums</h2>
      <ul className='heavenly-list'>
        {heavenly}
      </ul>
      <h2>Earthly Word Sums</h2>
      <ul className='earthly-list'>
        {earthly}
      </ul>
    </div> : null
    return (
      <div>
        {output}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  heavenly: state.heavenly.wordSums,
  earthly: state.earthly.wordSums
})

export default connect(mapStateToProps)(WordSums)
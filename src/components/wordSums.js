import React from 'react';
import { connect } from 'react-redux';
import './wordSums.css'

export class WordSums extends React.Component {

  render() {
    let heavenly = this.props.heavenly.map((word, index) => {
      return (
        <li key={index} className='hpair'>
          <p>{word.key}</p>
          <p>{word.value}</p>
        </li>
      )
    })

    let earthly = this.props.earthly.map((word, index) => {
      return (
        <li key={index} className='epair'>
          <p>{word.key}</p>
          <p>{word.value}</p>
        </li>
      )
    })
    return (
      <div>
        <ul className='heavenly-list'>
          {heavenly}
        </ul>
        <ul className='earthly-list'>
          {earthly}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  heavenly: state.heavenly.wordSums,
  earthly: state.earthly.wordSums
})

export default connect(mapStateToProps)(WordSums)
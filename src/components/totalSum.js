import React from 'react';
import { connect } from 'react-redux';
import './totalSum.css'

export function TotalSum(props) {
  const heavenly = props.heavenly ? <p>Heavenly: {props.heavenly}</p> : null
  const earthly = props.earthly ?  <p>Earthly: {props.earthly}</p> : null
  return (
      <div className='totals'>
        {heavenly}
        {earthly}
      </div>
    )
  }


const mapStateToProps = (state) => ({
  heavenly: state.heavenly.total,
  earthly: state.earthly.total
})

export default connect(mapStateToProps)(TotalSum)
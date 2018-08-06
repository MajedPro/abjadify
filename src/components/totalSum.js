import React from 'react';
import { connect } from 'react-redux';
import './totalSum.css'

export function TotalSum(props) {
  const heavenly = props.heavenly ? <p>Heavenly: {props.heavenly}</p> : null
  const earthly = props.earthly ?  <p>Earthly: {props.earthly}</p> : null
  let hdivis9;
  let hdivis7;
  let edivis9;
  let edivis7;
  let mod9;
  if (props.heavenly) {
    hdivis9 = props.heavenly % 9 === 0 ? <p>divided by 9 = {props.heavenly / 9}</p> : null
    hdivis7 = props.heavenly % 7 === 0 ? <p>divided by 7 = {props.heavenly / 7}</p> : null
    edivis9 = props.heavenly % 9 === 0 ? <p>divided by 9 = {props.heavenly / 9}</p> : null
    edivis7 = props.heavenly % 7 === 0 ? <p>divided by 7 = {props.heavenly / 7}</p> : null
    mod9 = <p>mod9: {props.heavenly % 9}</p>
  }
  return (
      <div className='totals'>
        {heavenly}
        {hdivis9}
        {hdivis7}
        {earthly}
        {edivis9}
        {edivis9}
        {mod9}
      </div>
    )
  }


const mapStateToProps = (state) => ({
  heavenly: state.heavenly.total,
  earthly: state.earthly.total
})

export default connect(mapStateToProps)(TotalSum)
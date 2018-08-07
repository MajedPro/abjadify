import React from 'react';
import { connect } from 'react-redux';
import './totalSum.css'

export function TotalSum(props) {
  let hdivis9, hdivis7, edivis9, edivis7, hmod9, emod9, hsum, esum;
  if (props.heavenly) {
    hdivis9 = props.heavenly % 9 === 0 ? <p>divided by 9 = {props.heavenly / 9}</p> : null
    hdivis7 = props.heavenly % 7 === 0 ? <p>divided by 7 = {props.heavenly / 7}</p> : null
    edivis9 = props.earthly % 9 === 0 ? <p>divided by 9 = {props.earthly / 9}</p> : null
    edivis7 = props.earthly % 7 === 0 ? <p>divided by 7 = {props.earthly / 7}</p> : null
    hmod9 = <p>mod 9: {props.heavenly % 9}</p>
    emod9 = <p>mod 9: {props.earthly % 9}</p>
    hsum = <p>Sum: {props.heavenly}</p>
    esum = <p>Sum: {props.earthly}</p>
  }
  const heavenly = props.heavenly ? <div className='heavenly-totals'>
    <h2>Heavenly Values</h2>
    {hsum}
    {hdivis9}
    {hdivis7}
    {hmod9}
  </div> : null

  const earthly = props.earthly ? <div className='earthly-totals'>
    <h2>Earthly Values</h2>
    {esum}
    {edivis9}
    {edivis7}
    {emod9}
  </div> : null
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
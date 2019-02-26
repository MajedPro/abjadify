import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch } from 'react-router-dom';

import TotalSum from './totalSum'
import WordSums from './wordSums'
import LetterSums from './letterSums'
import TextInput from './textInput';

export class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Route path='/' component= {TextInput}/>
                <Route exact path='/general' component={ TotalSum }/>
                <Route exact path='/words' component={ WordSums }/>
                {/* <TotalSum />
                <WordSums />
                <LetterSums toggle={() => this.toggle()} /> */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // auth not yet implemented
  });

export default withRouter(connect(mapStateToProps)(Dashboard));
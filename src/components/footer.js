import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="main-footer">
        <p>
          &copy; 2018 Created by <a className="site-creator-link" 
            href="https://www.sayedkhan.work/"
            target="_blank" 
            rel="noopener noreferrer"> Sayed Khan</a>.
        </p>
      </footer>
    );
  }
}
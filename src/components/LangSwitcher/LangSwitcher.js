import React from 'react';

class LangSwitcher extends React.Component {
  render() {
    return (
      <div id="langswitcher">
        <span className={(this.props.selectedLang === 'eng') ? 'lang selected' : 'lang'} onClick={() => this.props.handleLang('eng')}>ENG</span> 
        / <span className={(this.props.selectedLang === 'fr') ? 'lang selected' : 'lang'} onClick={() => this.props.handleLang('fr')}>FR</span>
      </div>
    );
  }
}

export default LangSwitcher;


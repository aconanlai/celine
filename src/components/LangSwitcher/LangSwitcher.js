import React from 'react';

class LangSwitcher extends React.Component {
  render() {
    return (
      <div id="langswitcher">
        <span className={(this.props.selectedLang === 'en') ? 'lang selected' : 'lang'} onClick={() => this.props.handleLang('en')}>EN</span> 
        / <span className={(this.props.selectedLang === 'fr') ? 'lang selected' : 'lang'} onClick={() => this.props.handleLang('fr')}>FR</span>
      </div>
    );
  }
}

export default LangSwitcher;


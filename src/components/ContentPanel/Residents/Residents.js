import React from 'react';

class Residents extends React.Component {
  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.residents : this.props.residentsFr;
    return (
      <div className="residents" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

Residents.propTypes = {
  selectedLang: React.PropTypes.string,
  residents: React.PropTypes.string,
  residentsFr: React.PropTypes.string,
};

export default Residents;

import React from 'react';

class Residents extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = (this.props.selectedLang === 'eng') ? this.props.residents : this.props.residentsFr;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    );
  }
}

export default Residents;

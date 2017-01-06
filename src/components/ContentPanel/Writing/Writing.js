import React from 'react';

class Writing extends React.Component {
  render() {
    const text = (this.props.selectedLang === 'eng') ? this.props.writing : this.props.writingFr;
    return (
      <div className="writing" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

Writing.propTypes = {
  selectedLang: React.PropTypes.string,
  writing: React.PropTypes.string,
  writingFr: React.PropTypes.string,
};

export default Writing;

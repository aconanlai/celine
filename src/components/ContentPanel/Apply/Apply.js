import React from 'react';

class Apply extends React.Component {
  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.apply : this.props.applyFr;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

Apply.propTypes = {
  selectedLang: React.PropTypes.string,
  apply: React.PropTypes.string,
  applyFr: React.PropTypes.string,
};

export default Apply;

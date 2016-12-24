import React from 'react';

class Apply extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.apply : this.props.applyFr;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    );
  }
}

export default Apply;

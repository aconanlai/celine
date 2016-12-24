import React from 'react';

class Writing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = (this.props.selectedLang === 'eng') ? this.props.writing : this.props.writingFr;
    return (
      <div className="writing" dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    );
  }
}

export default Writing;

import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.about : this.props.aboutFr;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    );
  }
}

export default About;

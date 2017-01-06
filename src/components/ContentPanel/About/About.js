import React from 'react';

class About extends React.Component {
  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.about : this.props.aboutFr;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

About.propTypes = {
  selectedLang: React.PropTypes.string,
  about: React.PropTypes.string,
  aboutFr: React.PropTypes.string,
};

export default About;

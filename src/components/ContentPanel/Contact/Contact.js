import React from 'react';

class Contact extends React.Component {
  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.contact : this.props.contactFr;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

Contact.propTypes = {
  selectedLang: React.PropTypes.string,
  contact: React.PropTypes.string,
  contactFr: React.PropTypes.string,
};

export default Contact;

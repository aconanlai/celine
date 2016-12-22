import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const text = (this.props.selectedLang === 'eng') ? this.props.contact : this.props.contactFr;
    const text = this.props.contact;
    return (
      <div dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    );
  }
}

export default Contact;

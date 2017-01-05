import React from 'react';
import Residents from './Residents/Residents';
import About from './About/About';
import Apply from './Apply/Apply';
import Contact from './Contact/Contact';
import Writing from './Writing/Writing';
import News from './News/News';

class ContentPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.path);
    let contentTitle = '';
    switch (this.props.path) {
      case 'residents':
        (this.props.selectedLang === 'en') ? contentTitle = 'residents' : contentTitle = 'résidents';
        break;
      case 'about':
        (this.props.selectedLang === 'en') ? contentTitle = 'about' : contentTitle = 'à propos';
        break;
      case 'apply':
        (this.props.selectedLang === 'en') ? contentTitle = 'apply' : contentTitle = 'postuler';
        break;
      case 'contact':
        (this.props.selectedLang === 'en') ? contentTitle = 'contact' : contentTitle = 'contact';
        break;
      case 'writing':
        (this.props.selectedLang === 'en') ? contentTitle = 'writing' : contentTitle = 'textes';
        break;
      case 'news':
        (this.props.selectedLang === 'en') ? contentTitle = 'news' : contentTitle = 'news';
        break;
      default:
        break;
    }
    return (
      <div className="contentpanel">
        <div className="contenttitlecontainer"><span className="contenttitle">{contentTitle}</span></div>
        <div className="contenttext">{this.props.children}</div>
      </div>
    );
  }
}

ContentPanel.propTypes = {
  selectedContent: React.PropTypes.string,
};

export default ContentPanel;

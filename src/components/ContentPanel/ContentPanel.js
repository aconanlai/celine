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
        (this.props.selectedLang === 'en') ? contentTitle = 'residents' : contentTitle = 'resident';
        break;
      case 'about':
        (this.props.selectedLang === 'en') ? contentTitle = 'about' : contentTitle = 'a propos';
        break;
      case 'apply':
        (this.props.selectedLang === 'en') ? contentTitle = 'apply' : contentTitle = 'appliquer';
        break;
      case 'contact':
        (this.props.selectedLang === 'en') ? contentTitle = 'contact' : contentTitle = 'contacter';
        break;
      case 'writing':
        (this.props.selectedLang === 'en') ? contentTitle = 'writing' : contentTitle = 'ecriture';
        break;
      case 'news':
        (this.props.selectedLang === 'en') ? contentTitle = 'news' : contentTitle = 'news';
        break;
      default:
        break;
    }
    return (
      <div className="contentpanel">
        <div className="contenttitlecontainer"><span className="contentceline">- Celine Bureau -</span><br /><span className="contenttitle">{contentTitle}</span></div>
        <div className="contenttext">{this.props.children}</div>
      </div>
    );
  }
}

ContentPanel.propTypes = {
  selectedContent: React.PropTypes.string,
};

export default ContentPanel;

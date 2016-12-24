import React from 'react';
import Residents from './Residents/Residents';
import About from './About/About';
import Apply from './Apply/Apply';
import Contact from './Contact/Contact';
import Writing from './Writing/Writing';

class ContentPanel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let panelContent = '';
    let contentTitle = '';
    switch (this.props.selectedContent) {
      case 'residents':
        panelContent = <Residents {...this.props} />;
        (this.props.selectedLang === 'end') ? contentTitle = 'residents' : contentTitle = 'resident';
        break;
      case 'about':
        panelContent = <About {...this.props} />;
        (this.props.selectedLang === 'end') ? contentTitle = 'about' : contentTitle = 'a propos';
        break;
      case 'apply':
        panelContent = <Apply {...this.props} />;
        (this.props.selectedLang === 'end') ? contentTitle = 'apply' : contentTitle = 'appliquer';
        break;
      case 'contact':
        panelContent = <Contact {...this.props} />;
        (this.props.selectedLang === 'end') ? contentTitle = 'contact' : contentTitle = 'contacter';
        break;
      case 'writing':
        panelContent = <Writing {...this.props} />;
        (this.props.selectedLang === 'end') ? contentTitle = 'writing' : contentTitle = 'ecriture';
        break;
      default:
        panelContent = <About {...this.props} />;
        contentTitle = 'about';
    }
    return (
      <div className="contentpanel">
        <div className="contenttitlecontainer"><span className="contentceline">- Celine Bureau -</span><br /><span className="contenttitle">{contentTitle}</span></div>
        <div className="contenttext">{panelContent}</div>
      </div>
    );
  }
}

ContentPanel.propTypes = {
  selectedContent: React.PropTypes.string,
};

export default ContentPanel;

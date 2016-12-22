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
        panelContent = <Residents />;
        contentTitle = 'current residents';
        break;
      case 'about':
        panelContent = <About />;
        contentTitle = 'about';
        break;
      case 'apply':
        panelContent = <Apply />;
        contentTitle = 'apply';
        break;
      case 'contact':
        panelContent = <Contact />;
        contentTitle = 'contact';
        break;
      case 'writing':
        panelContent = <Writing />;
        contentTitle = 'writing';
        break;
      default:
        panelContent = <About />;
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

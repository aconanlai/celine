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
    switch (this.props.selectedContent) {
      case 'residents':
        panelContent = <Residents />;
        break;
      case 'about':
        panelContent = <About />;
        break;
      case 'apply':
        panelContent = <Apply />;
        break;
      case 'contact':
        panelContent = <Contact />;
        break;
      case 'writing':
        panelContent = <Writing />;
        break;
      default:
        panelContent = <About />;
    }
    return (
      <div className="contentpanel">{panelContent}</div>
    );
  }
}

ContentPanel.propTypes = {
  selectedContent: React.PropTypes.string,
};

export default ContentPanel;

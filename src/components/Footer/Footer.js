import React from 'react';

class Footer extends React.Component {

  componentDidUpdate() {
    const els = document.querySelectorAll('.footer p a');
    for (let i = 0; i < els.length; i++) {
      els[i].setAttribute('target', 'blank');
    }
  }

  render() {
    return (
      <div className="footer">
        <marquee id="movingtext" dangerouslySetInnerHTML={{ __html: this.props.links }}></marquee>
      </div>
    );
  }
}

export default Footer;


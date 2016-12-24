import React from 'react';
import ReactDOM from 'react-dom';
import Marquee from 'react-marquee';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidUpdate() {
    const els = document.querySelectorAll('.footer p a');
    for (let i = 0; i < els.length; i++) {
      els[i].setAttribute('target', 'blank');
    }
  }

  start() {
    const node = this.node;
    node.start();
  }

  stop() {
    const node = this.node;
    node.stop();
  }

  render() {
    return (
      <div className="footer">
        <marquee ref={node => this.node = node} onMouseOver={this.stop} onMouseOut={this.start} id="movingtext" dangerouslySetInnerHTML={{ __html: this.props.links }}></marquee>
      </div>
    );
  }
}

export default Footer;

// <marquee id="movingtext" dangerouslySetInnerHTML={{ __html: this.props.links }}></marquee>

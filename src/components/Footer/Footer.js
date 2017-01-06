import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
  }

  componentDidUpdate() {
    // add target=blank to each link
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
        <marquee 
          ref={node => this.node = node}
          onMouseOver={this.stop}
          onMouseOut={this.start}
          id="movingtext"
          dangerouslySetInnerHTML={{ __html: this.props.links }}
        ></marquee>
      </div>
    );
  }
}

Footer.propTypes = {
  links: React.PropTypes.string,
};

export default Footer;

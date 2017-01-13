import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul className="navlist">
          <li>
            <Link to={'/'} className="navlink" style={{ fontWeight: 600 }}>
              Celine Bureau
            </Link>
          </li>
          {this.props.sections.map((link, i) => {
            return (
              <li key={i}>
                <Link
                  to={`/${link.component}`}
                  className="navlink"
                  activeStyle={{ borderBottom: '2px solid #bf9450' }}
                >
                  {(this.props.selectedLang === 'en') ? link.name : link.namefr}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Nav.propTypes = {
  selectedLang: React.PropTypes.string,
  sections: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default Nav;

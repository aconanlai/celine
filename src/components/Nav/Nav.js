import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const links = [
      { name: 'Current Residents', component: 'residents' },
      { name: 'About', component: 'about' },
      { name: 'Apply', component: 'apply' },
      { name: 'Contact', component: 'contact' },
      { name: 'Writing', component: 'writing' },
    ];
    return (
      <div className="nav">
        <ul className="navlist">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <span className={(this.props.selectedContent === link.component) ? 'navlink selected' : 'navlink'} onClick={() => this.props.handleNav(link.component)}>{link.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;

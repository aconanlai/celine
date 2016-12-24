import React, { Component } from 'react';

class Nav extends Component {
  render() {
    const links = [
      { name: 'about', namefr: 'a propos', component: 'about' },
      { name: 'apply', namefr: 'appliquer', component: 'apply' },
      { name: 'contact', namefr: 'contacter', component: 'contact' },
      { name: 'residents', namefr: 'residents', component: 'residents' },
      { name: 'writing', namefr: 'ecriture', component: 'writing' },
    ];
    return (
      <div className="nav">
        <ul className="navlist">
          {links.map((link, i) => {
            return (
              <li key={i}>
                <span className={(this.props.selectedContent === link.component) ? 'navlink selected' : 'navlink'} onClick={() => this.props.handleNav(link.component)}>
                  {(this.props.selectedLang === 'en') ? link.name : link.namefr}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Nav;

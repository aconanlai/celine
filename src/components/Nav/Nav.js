import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    const links = [
      { name: 'about', namefr: 'a propos', component: 'about' },
      { name: 'apply', namefr: 'appliquer', component: 'apply' },
      { name: 'contact', namefr: 'contacter', component: 'contact' },
      { name: 'residents', namefr: 'residents', component: 'residents' },
      { name: 'writing', namefr: 'ecriture', component: 'writing' },
      { name: 'news', namefr: 'news', component: 'news' },
    ];
    return (
      <div className="nav">
        <ul className="navlist">
          {links.map((link, i) => {
            return (
              <li key={i}>
               <Link to={`/${link.component}`} className="navlink" activeStyle={{ textDecoration: 'underline' }}>
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

export default Nav;

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import Residents from './components/ContentPanel/Residents/Residents';
import About from './components/ContentPanel/About/About';
import Apply from './components/ContentPanel/Apply/Apply';
import Contact from './components/ContentPanel/Contact/Contact';
import Writing from './components/ContentPanel/Writing/Writing';
import News from './components/ContentPanel/News/News';
import PageNotFound from './components/PageNotFound';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="residents" component={Residents} />
      <Route path="about" component={About} />
      <Route path="apply" component={Apply} />
      <Route path="contact" component={Contact} />
      <Route path="writing" component={Writing} />
      <Route path="news" component={News} />
    </Route>
    <Route path="*" component={PageNotFound} />
  </Router>,
  document.getElementById('root')
);

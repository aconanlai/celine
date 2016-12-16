import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import ContentPanel from './components/ContentPanel/ContentPanel';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContent: '',
    };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(content) {
    this.setState({
      selectedContent: content,
    });
  }

  render() {
    return (
      <div style={{ backgroundImage: 'url(celine.png)' }} className="App">
        <ContentPanel selectedContent={this.state.selectedContent} />
        <Nav handleNav={this.handleNav} />
      </div>
    );
  }
}

export default App;
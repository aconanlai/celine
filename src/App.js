import React, { Component } from 'react';
import Nav from './components/Nav/Nav';
import ContentPanel from './components/ContentPanel/ContentPanel';
import Footer from './components/Footer/Footer';
import LangSwitcher from './components/LangSwitcher/LangSwitcher';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedContent: '',
      residents: '',
      residentsFr: '',
      about: '',
      aboutFr: '',
      apply: '',
      applyFr: '',
      writing: '',
      writingFr: '',
      contact: '',
    };
    this.handleNav = this.handleNav.bind(this);
  }

  handleNav(content) {
    this.setState({
      selectedContent: content,
    });
  }

  componentDidMount() {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((json) => {
      const data = json.data
      let selectedContent= '',
      residents= '',
      residentsFr= '',
      about= '',
      aboutFr= '',
      apply= '',
      applyFr= '',
      writing= '',
      writingFr= '',
      contact= '';
      
      for (let i = 0; i < data.length ; i ++) {
        console.log(data[i].title);
      }
    });
  }

  render() {
    return (
      <div style={{ backgroundImage: 'url(celine.png)' }} className="App">
        <ContentPanel selectedContent={this.state.selectedContent} />
        <Nav handleNav={this.handleNav} />
        <Footer />
        <LangSwitcher />
      </div>
    );
  }
}

export default App;

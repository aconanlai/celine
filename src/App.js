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
      links: '',
    };
    this.handleNav = this.handleNav.bind(this);
  }

  componentDidMount() {
    fetch('data.json').then((response) => {
      return response.json();
    }).then((json) => {
      const data = json.data
      console.log(data);
      let selectedContent= '',
        residents = '',
        residentsFr = '',
        about = '',
        aboutFr = '',
        apply = '',
        applyFr = '',
        writing = '',
        writingFr = '',
        links = '',
        contact = '';
      console.log(data.length);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].text);
        switch (data[i].title) {
          case 'Current Residents French':
            residentsFr = data[i].text;
            break;
          case 'Current Residents':
            residents = data[i].text;
            break;
          case 'About English':
            about = data[i].text;
            break;
          case 'About French':
            aboutFr = data[i].text;
            break;
          case 'Apply English':
            apply = data[i].text;
            break;
          case 'Apply French':
            applyFr = data[i].text;
            break;
          case 'Writing':
            writing = data[i].text;
            break;
          case 'Writing French':
            writingFr = data[i].text;
            break;
          case 'Links':
            links = data[i].text;
            break;
          case 'Contact':
            contact = data[i].text;
            break;
          default:
            break;
        }
      }
      this.setState({
        residents,
        residentsFr,
        about,
        aboutFr,
        apply,
        applyFr,
        writing,
        writingFr,
        contact,
        links,
      });
    });
  }

  handleNav(content) {
    this.setState({
      selectedContent: content,
    });
  }

  render() {
    const bg = Math.floor((Math.random() * 6) + 1);
    const content = (this.state.selectedContent === '') ? null : <ContentPanel selectedContent={this.state.selectedContent} />;
    return (
      <div style={{ backgroundImage: `url(bg${bg}.jpg)` }} className="App">
        {content}
        <Nav handleNav={this.handleNav} />
        <Footer />
        <LangSwitcher />
      </div>
    );
  }
}

export default App;

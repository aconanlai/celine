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
      selectedLang: 'en',
      selectedBg: '',
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
      contactFr: '',
      news: '',
      newsFr: '',
      links: '',
    };
    this.handleNav = this.handleNav.bind(this);
    this.handleLang = this.handleLang.bind(this);
  }

  componentDidMount() {
    const bg = Math.floor((Math.random() * 6) + 1);
    this.setState({
      selectedBg: `url(bg${bg}.jpg)`,
    });
    fetch('cms/api').then((response) => {
    // fetch('data.json').then((response) => {
      return response.json();
    }).then((json) => {
      const data = json.data;
      let residents = '';
      let residentsFr = '';
      let about = '';
      let aboutFr = '';
      let apply = '';
      let applyFr = '';
      let writing = '';
      let writingFr = '';
      let links = '';
      let contact = '';
      let contactFr = '';
      let news = '';
      let newsFr = '';
      for (let i = 0; i < data.length; i++) {
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
          case 'Contact French':
            contactFr = data[i].text;
            break;
          case 'News':
            news = data[i].text;
            break;
          case 'News French':
            newsFr = data[i].text;
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
        contactFr,
        news,
        newsFr,
        links,
        selectedContent: this.props.location.pathname.slice(1),
      });
    });
  }

  handleNav(content) {
    this.setState({
      selectedContent: content,
    });
  }

  handleLang(lang) {
    this.setState({
      selectedLang: lang,
    });
  }

  render() {
    // const content = (this.state.selectedContent === '') ? null : <ContentPanel {...this.state}>{this.props.children}</ContentPanel>;
    const content = (this.props.location.pathname.slice(1) === '') ? null : <ContentPanel path={this.props.location.pathname.slice(1)} {...this.state}>
      {this.props.children && React.cloneElement(this.props.children, {
        residents: this.state.residents,
        residentsFr: this.state.residentsFr,
        about: this.state.about,
        aboutFr: this.state.aboutFr,
        apply: this.state.apply,
        applyFr: this.state.applyFr,
        writing: this.state.writing,
        writingFr: this.state.writingFr,
        contact: this.state.contact,
        contactFr: this.state.contactFr,
        news: this.state.news,
        newsFr: this.state.newsFr,
        links: this.state.links,
        selectedLang: this.state.selectedLang,
      })}</ContentPanel>;
    return (
      <div style={{ backgroundImage: this.state.selectedBg }} className="App">
        {content}
        <Nav handleNav={this.handleNav} selectedLang={this.state.selectedLang} selectedContent={this.state.selectedContent} />
        <Footer links={this.state.links} />
        <LangSwitcher handleLang={this.handleLang} selectedLang={this.state.selectedLang} />
      </div>
    );
  }
}

export default App;

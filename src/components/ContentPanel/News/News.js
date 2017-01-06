import React from 'react';

class News extends React.Component {
  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.news : this.props.newsFr;
    return (
      <div className="news" dangerouslySetInnerHTML={{ __html: text }} />
    );
  }
}

News.propTypes = {
  selectedLang: React.PropTypes.string,
  news: React.PropTypes.string,
  newsFr: React.PropTypes.string,
};

export default News;

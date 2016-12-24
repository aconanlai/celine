import React from 'react';

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = (this.props.selectedLang === 'en') ? this.props.news : this.props.newsFr;
    return (
      <div className="news" dangerouslySetInnerHTML={{ __html: text }}>
      </div>
    );
  }
}

export default News;

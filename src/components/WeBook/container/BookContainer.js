import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import BookView from '../view/BookView';

@inject('ArticleStore')
@observer
class BookContainer extends Component {
  componentDidMount() {
    this.props.ArticleStore.selectAll();
  }

  onSetArticleProp = (name, value) => {
    this.props.ArticleStore.setArticleProp(name, value);
  };

  onAddArticle = () => {
    this.props.ArticleStore.addArticle();
  };

  onRemoveArticle = () => {
    this.props.ArticleStore.removeArticle();
  };

  onModifyArticle = () => {
    this.props.ArticleStore.modifyArticle();
  };

  onsetIndexProp = (id) => {
    this.props.ArticleStore.setIndexProp(id);
  }

  render() {
    const { articles } = this.props.ArticleStore;
    const id = this.props.ArticleStore.index;

    return (
        <div>
          {console.log('first article_id' + id)}
          <BookView
              articles={articles}
              id={id}
              onSetArticleProp={this.onSetArticleProp}
              onAddArticle={this.onAddArticle}
              onRemoveArticle={this.onRemoveArticle}
              onModifyArticle={this.onModifyArticle}
              setIndexProp={this.onsetIndexProp}
          />
          {console.log('last article_id' + id)}
          {/* {console.log('last book_id' + bookId)} */}
        </div>

    );
  }
}

export default BookContainer;

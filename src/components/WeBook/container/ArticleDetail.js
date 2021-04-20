import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ArticleView from '../view/ArticleView';
import ArticleDeatilView from '../view/ArticleDeatilView';

@inject('ArticleStore')
@observer
class ArticleDetail extends Component {
  componentDidMount() {
    this.props.ArticleStore.selectArticle(this.props.ArticleStore.index);
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

    onArticleDetail = (id) => {
      this.props.ArticleStore.selectArticle(id);
    }

    render() {
      const {articles, article} = this.props.ArticleStore;
      const id = this.props.ArticleStore.index;
      return (
            <div>
                {console.log('article detail container에서 ' + this.props.ArticleStore.index)}
                <ArticleDeatilView
                    articles={articles}
                    article={article}
                    id={id}
                    onSetArticleProp={this.onSetArticleProp}
                    onAddArticle={this.onAddArticle}
                    onRemoveArticle={this.onRemoveArticle}
                    onModifyArticle={this.onModifyArticle}
                    setIndexProp={this.onsetIndexProp}
                    onArticleDetail={this.onArticleDetail}
                />
            </div>
      );
    }
}

export default ArticleDetail;

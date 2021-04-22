import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ArticleDeatilView from '../view/ArticleDeatilView';
import ArticleListView from '../view/ArticleListView';

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

    onViewState = (e) => {
      this.props.ArticleStore.setViewState(e.target.value);
    }

    render() {
      const {articles, article} = this.props.ArticleStore;
      const id = this.props.ArticleStore.index;
      const viewState = this.props.ArticleStore.viewState;

      return (
          <div className='articleContainer' style={{display: 'flex'}}>
            {
              viewState === '' ? (
                  <>
                      <div className='beforeMenu' style={{width: '90%'}}>
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
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <button onClick={this.onViewState} value='menu'>목차다</button>
                      <button onClick={this.onViewState} value='qna'>큐앤에이</button>
                      <button onClick={this.onViewState} value='memo'>메모</button>
                    </div>
                  </>
              ) : (
                  <>
                    <div className='afterMenu' style={{width: '50%'}}>
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
                    <div style={{width: '40%'}}>
                      <ArticleListView
                      viewState={viewState}
                      articles={articles}
                      article={article}
                      id={id}
                      setIndexProp={this.onsetIndexProp}
                      onArticleDetail={this.onArticleDetail}
                      />
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                      <button onClick={this.onViewState} value=''>목차</button>
                      <button onClick={this.onViewState} value=''>큐앤에이</button>
                      <button onClick={this.onViewState} value=''>메모</button>
                    </div>
              </>
              )
            }
          </div>
      );
    }
}

export default ArticleDetail;

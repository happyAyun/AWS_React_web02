import { makeObservable, action, observable, runInAction } from 'mobx';
import ArticleApi from '../api/ArticleApi';

class ArticleStore {
    @observable articles = [];

    @observable article = { article_id: '', article_title: ''};

    @observable Message = '';

    articleApi = new ArticleApi();

    constructor() {
      makeObservable(this);
    }

    @action
    setArticleProp(name, value) {
      this.article = {
        ...this.article,
        [name]: value,
      };
    }

    @action
    async addArticle() {
      const result = await this.articleApi.articleCreate(this.article);
      if (result == null) {
        this.message = '추가되지 않았습니다.';
      }
      this.articles = this.articles.concat(this.article);
    }

    @action
    async removeArticle() {
      await this.articleApi.articleDelete(this.article.communication_id);
      const result = await this.articleApi.articleList();
      runInAction(() => {
        this.articles = article;
      });
      runInAction(() => {
        this.article = {};
      });
    }

    @action
    async modifyArticle() {
      await this.articleApi.articleUpdate(this.article.communication_id, this.article);
      const result = await this.articleApi.articleList();
      runInAction(() => {
        this.articles = result;
      });
      runInAction(() => {
        this.article = {};
      });
    }

    @action
    async selectArticle(id) {
      const result = await this.articleApi.articleDetail(id);
      runInAction(() => {
        this.article = result;
      });
    }

    @action
    async selectAll() {
      const result = await this.articleApi.articleList();
      runInAction(()=>{
        this.articles = result;
      });
    }
}
export default new ArticleStore();

import React, {Component} from 'react';
import { inject, observer } from 'mobx-react';
import BookView from '../view/BookView';

@inject('ArticleStore')
@observer
class BookContainer extends Component {
  componentDidMount() {
    this.props.ArticleStore.selectAll();
  }

    onSelectArticle =(id)=>{
      this.props.ArticleStore.selectArticle(id);
    }

    render() {
      return (
            <div>
                <BookView comm={this.props.ArticleStore.articles}
                          onSelectCom={this.onSelectArticle}/>
            </div>
      );
    }
}

export default BookContainer;

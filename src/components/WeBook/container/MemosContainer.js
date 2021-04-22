import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import MemoEditor from '../view/MemoEditor';
import jwtDecode from 'jwt-decode';

@inject('MemoStore')
@observer
class MemosContainer extends Component {
  componentDidMount() {
    this.props.MemoStore.selectAll();
  }

    onSetMemoProp = (name, value) => {
      this.props.MemoStore.setMemoProp(name, value);
    };

    onAddMemo = () => {
      this.props.MemoStore.addMemo();
    };

    onRemoveMemo = () => {
      this.props.MemoStore.removeMemo();
    };

    onModifyMemo = () => {
      this.props.MemoStore.modifyMemo();
    };

    onMemoContent = (content) => {
      this.props.MemoStore.setMemoState(content);
    }

    render() {
      // 추후 이벤트 정리해야됩니다
      const { memos } = this.props.MemoStore;
      const memo = this.props.MemoStore.memo.memoContent;
      const UserId = jwtDecode(localStorage.token);
      const ccc = this.props.MemoStore.selectMyMemo(UserId.user_id);
      const memoContent = this.props.MemoStore.memo.memoContent;
      // console.log('bookId 전달확인 ' + this.props.bookId);
      // console.log('bookId 전달확인 ' + this.props.MemoStore.memo.memoContent);

      // 생성
      this.onSetMemoProp('bookId', this.props.bookId);
      // this.onSetMemoProp('userId', UserId.user_id);
      this.onAddMemo();
      console.log('생성되었는가' + this.props.MemoStore.memo.memoContent);

      return (
          <div>
          {memo === null
            ? (
                <>
                <div>아무것도 없습니다</div>
                <div>
                  <button onClick={memoCrete}>메모 생성</button>
                </div>
                </>
            )
            : (<div>
                  <MemoEditor
                      memos={memos}
                      memoContent = {memoContent}
                  />
                </div>)
          }
          </div>
      );
    }
}

export default MemosContainer;

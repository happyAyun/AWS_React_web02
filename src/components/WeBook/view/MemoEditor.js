import React, {useEffect, useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import jwtDecode from 'jwt-decode';

// convertToRaw: editorState 객체가 주어지면 원시 JS 구조로 변환.
import { EditorState, convertToRaw, ContentState } from 'draft-js';
// convertToRaw로 변환시켜준 원시 JS 구조를 HTML로 변환.
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import axios from 'axios';

const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
  }
  .editor {
    height: 500px !important;
    border: 1px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;

const IntroduceContent = styled.div`
  position: relative;
  border: 0.0625rem solid #d7e2eb;
  border-radius: 0.75rem;
  overflow: hidden;
  padding: 1.5rem;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

function MemoEditor(props) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const UserId = jwtDecode(localStorage.token);
  let m = '';

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  const memoContent = props.memoContent;
  const htmlToEditor = memoContent;

  useEffect(() => {
    // 에디터 초기값 설정
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const {contentBlocks, entityMap} = blocksFromHtml;
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      // ContentState를 EditorState기반으로 새 개체를 반환한다고 하더군요
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  return (
      <div>
        <MyBlock>
          <Editor
              // 에디터와 툴바 모두에 적용되는 클래스
              wrapperClassName="wrapper-class"
              // 에디터 주변에 적용된 클래스
              editorClassName="editor"
              // 툴바 주위에 적용된 클래스
              toolbarClassName="toolbar-class"
              // 툴바 설정
              toolbar={{
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: false },
              }}
              placeholder="내용을 작성해주세요."
              localization={{
                locale: 'ko',
              }}
              value='123'
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
          />
        </MyBlock>
          <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} onChange={(e)=>{
            console.log(e.target.dangerouslySetInnerHTML);
          }
          } />
        <div>
          <button
              onClick={() => {
                console.log({ __html: editorToHtml });
                // props.onSetMemoProp('memoContent', { __html: editorToHtml });
                // console.log(props.memoContent);
              }}
          >
            로그 확인용 버튼
          </button>
        </div>
      </div>
  );
}

export default MemoEditor;

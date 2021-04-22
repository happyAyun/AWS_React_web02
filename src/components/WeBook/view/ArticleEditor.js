import React, {useEffect, useState} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';

// convertToRaw: editorState 객체가 주어지면 원시 JS 구조로 변환.
import { EditorState, convertToRaw } from 'draft-js';
// convertToRaw로 변환시켜준 원시 JS 구조를 HTML로 변환.
import draftToHtml from 'draftjs-to-html';

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
  width: 50%;
  margin: 0 auto;
  margin-bottom: 4rem;
`;

const ArticleEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

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
              editorState={editorState}
              onEditorStateChange={onEditorStateChange}
          />
        </MyBlock>
        <IntroduceContent dangerouslySetInnerHTML={{ __html: editorToHtml }} />
        <div>
          <button
              onClick={() => {
                console.log({ __html: editorToHtml });
              }}
          >
            로그 확인용 버튼
          </button>
        </div>
      </div>
  );
};

export default ArticleEditor;

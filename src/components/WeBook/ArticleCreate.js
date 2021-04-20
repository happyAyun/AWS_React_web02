import React, {useState} from 'react';
import AriticleCategory from './AriticleCategory';
import Control from './Control';
import ReadContent from './ReadContent';
import CreateContent from './CreateContent';
import axios from 'axios';

function AriticleCreate() {
  const [ArticleTitle, setArticleTitle] = useState('');
  const [mode, setMode] = useState('read');

  console.log(mode);
  let title = null;
  let content = null;
  let article = null;

  if (mode === 'read') {
    article = <ReadContent></ReadContent>;
  } else if (mode === 'create') {
    article = <CreateContent onSubmit={function (title, content) {
      console.log(title, content);
    }.bind()
    }></CreateContent>;
  }

  return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="inputsm" >책 제목:</label>

                </div>

                <AriticleCategory></AriticleCategory>

            </form>
            <Control onChangeMode={function (_mode) {
              setMode(_mode);
            }.bind()}>

            </Control>
            {article}
            <span>
                <button type="button" className="btn btn-primary">완성하기</button>
            </span>
        </div>
  );
}

export default AriticleCreate;

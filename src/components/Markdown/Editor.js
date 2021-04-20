import React, {useState, useRef} from 'react';
import JoditEditor from 'jodit-react';
import { Button } from 'semantic-ui-react';

// eslint-disable-next-line no-empty-pattern
const Editor = ({}) => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const config = {
    readonly: false // all options from https://xdsoft.net/jodit/doc/
  };

  return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => setContent(newContent)}
            onChange={newContent => {}}
        />
  );
};

export default Editor;

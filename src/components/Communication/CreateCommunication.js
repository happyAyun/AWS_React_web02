import React, {useState} from 'react';

function CreateCommunication(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [writer, setWriter] = useState('');

  return (
        <div>
            <div>
                <label>제목 :</label>
                <input/>
            </div>

        </div>
  );
}

export default CreateCommunication;

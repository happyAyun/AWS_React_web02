import React from 'react';
import './MyProfile.css';
import { Button } from '@material-ui/core';
import { Form, TextArea } from 'semantic-ui-react';

function EditProfile(props) {
  return (
        <div className="containers">
            <div className="section1">
                <div className="box">
                    <img className="profile" src="" />
                </div>
                <div>
                    <div className="name">
                        마라렛트
                    </div>
                    <div className="content">
                        설명
                        <Form>
                            <TextArea rows={2} style={{ Height: '500px', width: '500px' }} />
                        </Form>
                    </div>
                </div>
            </div>
            <div className="section2">
                <div className="imageBtn">
                    <Button variant="contained" style={{marginBottom: '10px'}}>이미지 제거</Button>
                    <Button variant="contained" color="primary">
                        이미지 업로드
                    </Button>
                </div>
                <div className="explainText"><div>소개글</div>
                    <div>
                    <Form>
                        <TextArea rows={7} style={{ Height: '500px', width: '500px' }} />
                    </Form>
                </div>
                    <div className="saveBtn">
                        <Button variant="contained" color="secondary">
                        저장하기
                    </Button>
                    </div>
                </div>
            </div>
        </div>

  );
}

export default EditProfile;

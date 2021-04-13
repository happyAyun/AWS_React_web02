import React from 'react';
import './MyProfile.css';
import { Button } from '@material-ui/core';

function EditProfile(props) {
  return (
        <div className="container">
            <div className="section1">
                <div className="box">
                    <img className="profile" src="" />
                </div>
                <div>
                    <div>
                        마라렛트
                    </div>
                    <div>
                        설명
                    </div>
                </div>
            </div>
            <div className="section2">
                <div>
                    <Button variant="contained">Default</Button>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </div>
                <div><div>소개글</div><div>소개글 내용</div><div>버튼</div></div>
            </div>
        </div>

  );
}

export default EditProfile;

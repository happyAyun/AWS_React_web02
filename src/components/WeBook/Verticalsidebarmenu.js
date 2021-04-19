import {Menu, Sidebar} from 'semantic-ui-react';
import React, {useState} from 'react';
import './VerticalSidebar.css';
import MenuDetail from './MenuDetail';

const Verticalsidebarmenu = (props) => (
    <Sidebar
        as={Menu}
        animation={props.animation}
        direction={props.direction}
        icon='labeled'
        inverted
        vertical
        visible={props.visible}
        width='wide'
    >
        <Menu>
             <MenuDetail id={props.bookId}/>
            {/* asdam,sdas */}
        </Menu>
    </Sidebar>
);

export default Verticalsidebarmenu;

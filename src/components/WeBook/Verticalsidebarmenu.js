import {Menu, Sidebar} from 'semantic-ui-react';
import React from 'react';
import './VerticalSidebar.css';

const Verticalsidebarmenu = ({ animation, direction, visible}) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='wide'
    >
        <Menu>
            1
        </Menu>
    </Sidebar>
);

export default Verticalsidebarmenu;

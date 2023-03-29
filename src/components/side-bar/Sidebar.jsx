import React, { useState } from 'react';
import Chats from './Chats';
import Search from './Search';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Search />
            <Chats />
        </div>
    );
};

export default Sidebar;
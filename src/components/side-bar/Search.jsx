
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {

    const [searchKey, setSearchKey] = useState('');
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        if (!searchKey) setFriends([]);
        else {
            handleSearch();
        }
        // console.log("use Effect"); 
    }, [searchKey]);

    const handleKeyDown = (e) => {
        e.code === 'Enter' && handleSearch();
    };

    const users = useSelector(state => state.users.users);
    // console.log(users);

    const handleSearch = async () => {
        try {
            const withSearchKey = users.filter(user => user.displayName.match(searchKey));
            setFriends(withSearchKey);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='search-bar'>
            <input
                className='search-input'
                type="text"
                placeholder='search contact'
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            {
                friends.length > 0 &&
                friends.map(user => <div key={user._id} className="chat">
                    <img src={user.pp} alt='' />
                    <div className='username-n-last-message'>
                        <span className='username'>{user.displayName}</span>
                        <p className='last-message'>Hello</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Search;
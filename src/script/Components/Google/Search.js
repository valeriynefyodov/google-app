import React, { Component } from 'react';

class Search extends Component {
    render () {
        return (
            <form className='search'>
                <input type="text" className='search__input' placeholder='Введите поисковый запрос или URL'/>
                <div className='search__voice-search' />
            </form>
        );
    }
}

export default Search;

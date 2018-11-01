import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtRz7tuY0VHfs73B_af3eKE1YTTl12hbI';



//create  a component

const App = () => {
	return (
        <div>
            <SearchBar />
        </div>
    );
}


//shove it on to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
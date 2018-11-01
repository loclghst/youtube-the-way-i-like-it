import React from 'react';
import ReactDOM from 'react-dom';



//create  a component

const App = () => {
	return <div>Hello</div> ;
}


//shove it on to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
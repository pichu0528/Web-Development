// Import React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component using the "function keyword"
// const App = function(){
//     return <div>Hi there!</div>;
// }
// Create a React component using the ES2015 arrow
const App = () =>{
    return <div>Hi, there!</div>
};

// Take the React component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
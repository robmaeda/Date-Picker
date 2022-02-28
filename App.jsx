import React from 'react';
import ReactDom from 'react-dom';
import '/styles.css';

const App = () => {
    return (
        <div id='app'>
            start
        </div>
    )
}

ReactDom.render(<App />, document.getElementById('root'));
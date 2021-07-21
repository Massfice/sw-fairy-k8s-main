import React from 'react';
import ReactDom from 'react-dom';

const App = () => (
    <div>
        <div>My awsome App</div>
    </div>
);

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);

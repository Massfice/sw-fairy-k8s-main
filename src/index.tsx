import React, { useState } from 'react';
import ReactDom from 'react-dom';
import SampleComponent from './components/SampleComponent';

const App = (): JSX.Element => {
    const [test, setTest] = useState(false);

    const click = () => {
        setTest(true);
    };

    return (
        <div>
            {test && <div>My awsome App!</div>}
            <button onClick={click}>Button</button>
            <SampleComponent />
        </div>
    );
};

ReactDom.render(<App />, document.getElementById('app') as HTMLElement);

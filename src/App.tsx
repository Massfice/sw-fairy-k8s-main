import React from 'react';
/* eslint @typescript-eslint/ban-ts-comment: "off" */
//@ts-ignore
import CounterAppOne from 'app1/CounterAppOne';

const App = () => (
    <div style={{ margin: '20px' }}>
        <React.Suspense fallback='Loading header...'>
            <div
                style={{
                    border: '1px dashed black',
                    height: '50vh',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <h1>CONTAINER</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}>
                    <div
                        style={{
                            marginRight: '2rem',
                            padding: '2rem',
                            border: '1px dashed black',
                        }}>
                        <h2>APP-1</h2>
                        <CounterAppOne />
                    </div>
                </div>
            </div>
        </React.Suspense>
    </div>
);

export default App;

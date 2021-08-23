import React from 'react';

// @ts-ignore
import CallbackPage from 'authui/CallbackPage';

// @ts-ignore
import useAuth from 'authui/useAuth';

const App = (): JSX.Element => {
    console.log(CallbackPage);
    console.log(useAuth);
    return (
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
                        </div>
                    </div>
                </div>
            </React.Suspense>
        </div>
    );
};

export default App;

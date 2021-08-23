import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import CallbackPage from './pages/CallbackPage';

const App = (): JSX.Element => {
    return (
        <div style={{ margin: '20px' }}>
            <React.Suspense fallback='Loading...'>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact>
                            <LoginPage />
                        </Route>
                        <Route path='/callback'>
                            <CallbackPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </React.Suspense>
        </div>
    );
};

export default App;

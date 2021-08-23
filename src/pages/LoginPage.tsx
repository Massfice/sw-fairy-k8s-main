import React, { useState } from 'react';
import User from '../types/User';

// @ts-ignore
import useAuth from 'authui/useAuth';

const LoginPage = (): JSX.Element => {
    const [user, setUser] = useState<User>({ isLogged: false });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { login, logout } = useAuth({
        onUserChange: (user: User) => setUser(user),
        onLoadingChange: (isLoading: boolean) => setIsLoading(isLoading),
    });

    return (
        <React.Fragment>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            {user.isLogged && user.data && (
                <div>
                    {user.data.nick} [{user.data.email}] [code: {user.token}]
                </div>
            )}
            {isLoading && <div>Loading...</div>}
        </React.Fragment>
    );
};

export default LoginPage;

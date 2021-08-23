import React from 'react';
import { useLocation } from 'react-router';

// @ts-ignore
import { default as ExtCallbackPage } from 'authui/CallbackPage';

const CallbackPage = (): JSX.Element => {
    const query = new URLSearchParams(useLocation().search);

    return <ExtCallbackPage query={query} />;
};

export default CallbackPage;

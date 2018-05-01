import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';

const Root = (): JSX.Element => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Root;
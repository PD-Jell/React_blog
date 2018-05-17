import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';


const Root = (): JSX.Element => {
  return (
    <BrowserRouter>
      <App history={history}/>
    </BrowserRouter>
  );
};

export default Root;

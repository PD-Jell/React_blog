import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import { AppContainer } from 'react-hot-loader';
import Root from './client/Root';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//   <Root />,
//   document.getElementById('root') as HTMLElement
// );

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Root)

if ((module as any).hot) {
  (module as any).hot.accept('./client/Root', () => { render(Root) })
}

registerServiceWorker();

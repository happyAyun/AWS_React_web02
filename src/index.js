import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import CommunityStore from './components/Communication/store/CommunityStore';
import {Provider} from 'mobx-react';

ReactDOM.render(
    <Provider CommunityStore={CommunityStore}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();

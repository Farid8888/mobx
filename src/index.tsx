import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {spy} from 'mobx'
import {StoreContext} from '../src/store/contextStore'
import {RootStore} from '../src/store/rootStore'

// spy(ev=>{
//   if(ev.type === 'action'){
//     console.log(ev)
//   }
// })
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreContext.Provider value={new RootStore()}>
             <App/>
    </StoreContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

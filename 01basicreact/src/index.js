import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//react apna khud  ka dom bnata hai phir usse browser se compare krta hai
//react itself is a spa i.e it does not reload the dom for other page
//but uses javascript and routing to change the ui according to page
const root = ReactDOM.createRoot(document.getElementById('root'));
//index.html mei jo root hai usse access kr rhein hai

root.render(
  
    <App />   
  
  // root jahan pr hai vahan jaa kr render krna hai
  //hmara app render krna hai in react.strictmode
);



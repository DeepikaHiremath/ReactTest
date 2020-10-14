import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App1';
import PropertyType from './PropertyType';
import InsuranceType from './InsuranceType';
import InsuranceType_old from './InsuranceType_old';
import Protection from './ProtectionSystem';
import { BrowserRouter as Router } from 'react-router-dom';
//import * as serviceWorker from '.ServiceWorker';
//ReactDOM.render(<App/>, document.getElementById('root'));
//serviceWorker();
//ReactDOM.render( <Router> <App /></Router>, document.getElementById('root'));
//ReactDOM.render(<PropertyType />, document.getElementById('root2'));
//ReactDOM.render(<InsuranceType />, document.getElementById('root'));
//ReactDOM.render(<Protection />, document.getElementById('root'));
//ReactDOM.render(<InsuranceType_old />, document.getElementById('root1'));

import App1 from './InsuranceType';

ReactDOM.render(    
    <Router> 
        <App1 />
    </Router>,    document.getElementById('root')
    );

 
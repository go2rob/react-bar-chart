import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Visualize from './components/visualize'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Visualize />, document.getElementById('root'));
registerServiceWorker();

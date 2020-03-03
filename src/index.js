import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import './css/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import 'jquery'
import 'popper.js'

ReactDOM.render(<App />, document.getElementById('root'))
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ContextProvider } from './components/ContextProvider'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <ContextProvider>
        <Router>
                <App/>
        </Router>
    </ContextProvider>,
    document.getElementById('root')
)

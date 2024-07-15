import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Hotjar from "./helpers/Hotjar.jsx";
import * as Sentry from '@sentry/browser'

// GlitchTip monitoring integration
// Sentry.init({
//     dsn: 'https://648c70cd67624732b088946e0337f81c@app.glitchtip.com/7069',
// })

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <Hotjar /> */}
        <App />
    </React.StrictMode>
)

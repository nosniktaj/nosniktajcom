import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Construction from './construction.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Construction/>
    </StrictMode>,
)

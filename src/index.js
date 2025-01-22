import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Construciton from './construciton.js'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Construciton />
    </StrictMode>,
)

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Construction from './construction.js'
import BinarySpotlight from "./BinarySpotlight";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BinarySpotlight/>
        <Construction/>
    </StrictMode>,
)

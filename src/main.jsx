import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Renderizar a aplicação React no elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)

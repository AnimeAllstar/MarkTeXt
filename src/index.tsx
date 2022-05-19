import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'katex/dist/katex.min.css'
import { AppCtxProvider } from './contexts/DataContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <AppCtxProvider>
            <App />
        </AppCtxProvider>
    </React.StrictMode>
);


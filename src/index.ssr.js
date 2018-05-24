import React from 'react';
import {renderToString} from 'react-dom/server';
import './index.css';
import App from './App';

export function renderApp() {
    return renderToString(<App />);
}


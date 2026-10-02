
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 빌드 때 사전 렌더링된 HTML이 있으면 이어받고(hydrate), 개발 서버처럼 비어 있으면 새로 그린다.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app, { onRecoverableError: () => {} });
} else {
  ReactDOM.createRoot(rootElement).render(app);
}

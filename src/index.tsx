import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './components/App/App';
import 'normalize.css';

const rootEl = document.getElementById('root');

if (!rootEl) throw new Error('Root element is not defined in your index.html');

const root = createRoot(rootEl);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

// == Import : npm
import { createRoot } from 'react-dom/client';

// == Import : local
import App from 'src/components/App';

// == Render
const rootReactElement = <App />;
const root = createRoot(document.getElementById('root'));
root.render(rootReactElement);

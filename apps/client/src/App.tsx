import { AppProvider, Todos } from './components';
import './App.css';

function App() {
  console.log(import.meta.env);
  return (
    <AppProvider>
      <h1 style={{ textAlign: 'center' }}>
        Running app in
        <pre style={{ textTransform: 'uppercase' }}>{import.meta.env.MODE}</pre>
        mode!
      </h1>
      <Todos />
    </AppProvider>
  );
}

export default App;

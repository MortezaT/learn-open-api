function App() {
  return (
    <h1 style={{ width: '100vw', display: 'flex', alignItems: 'center' }}>
      Running app in {import.meta.env.MODE} mode!
    </h1>
  );
}

export default App;

import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return <div className="app">
    <Routers>
      <Route path="/" />
      <Route path="/auth" />
      <Route path="/checkout" />
    </Routers>
  </div>;
}

export default App;

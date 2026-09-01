import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';

import AuthProvider from './context/AuthContext';
import Auth from './pages/Auth';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;

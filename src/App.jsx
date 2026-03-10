import React, { useState, useEffect } from 'react';
import './App.css'
import Nav from './components/Nav/Nav';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sayt resurslari yuklanishini simulyatsiya qilamiz
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 3.5 soniyadan keyin sayt ochiladi

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="animate-in fade-in duration-1000">
      <Nav />
      
    </div>
  );
}

export default App;
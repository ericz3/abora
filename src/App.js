import React from 'react';
import Header from './components/Header';
import MacTitleBar from './components/MacTitleBar';
import './App.css';

function App() {
  return (
    <body className="App">
      <MacTitleBar />
      <Header />
    </body>
  );
}

export default App;

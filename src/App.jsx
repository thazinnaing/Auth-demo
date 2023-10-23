import React from 'react';
import AuthProvider from './Provider/AuthProvider';
import Routes from './routes/Routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes/>
    </AuthProvider>
  );
}

export default App;

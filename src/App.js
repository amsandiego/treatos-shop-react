import React from 'react';

import Header from './components/Layout/Header';
import Treats from './components/Treats/Treats';

function App() {
  return (
    <>
      <Header />
      <main>
        <Treats />
      </main>
    </>
  );
}

export default App;

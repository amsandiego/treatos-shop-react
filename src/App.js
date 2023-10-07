import React from 'react';

import Header from './components/Layout/Header';
import Treats from './components/Treats/Treats';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Treats />
      </main>
    </>
  );
}

export default App;

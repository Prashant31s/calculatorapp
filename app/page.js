// App.js
"use client"
import React from 'react';
import { Provider } from 'react-redux';


import store from './store';
import Calculator from './Calculator';
import Link from 'next/link';




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Calculator</h1>
        <Calculator/>
        <Link href="/History" >
        <button className='rounded-lg  w-1/4 bg-green-500 hover:bg-green-700 text-white font-semibold m-2 p-3 shadow-m'> check history</button>
        </Link>
        
      </div>
    </Provider>
  );
}

export default App;

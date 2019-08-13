import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import RelatedMovie from './components/RelatedMovie';
import SearchBar from './components/SearchBar'
function App() {
  return (<Provider store={store}>
    <div className="App">
      <SearchBar />
      <RelatedMovie />
    </div>
  </Provider>
  );
}

export default App;

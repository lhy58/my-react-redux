import React from 'react';
import { Provider } from 'react-redux';
import RouterIndex from './routers'
import configStore from './store'
import './App.css';

const store = configStore();
function App() {
  return (
    <div className="App">
    	<Provider store={ store }>
				<RouterIndex />
			</Provider>
    </div>
  );
}

export default App;

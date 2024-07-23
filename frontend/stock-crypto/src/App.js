import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar';
import StockTable from './components/table_component';
import { fetchData } from './redux/action';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/global.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <div className="container">
          <h1>Real-Time Stock Tracker</h1>
          <StockTable />
        </div>
      </div>
    </Provider>
  );
};

export default App;

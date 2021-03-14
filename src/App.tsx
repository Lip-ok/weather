import React from 'react';
import { SearchCity } from './components/SearchCity';
import { TableWeather } from "./components/Table";
import {useSelector} from "react-redux";
import './App.css';

const  App = () =>  {
    // @ts-ignore
    const products = useSelector( state => state.weatherReducer.products)
  return (
    <div className="app">
        <div className="container">
            <SearchCity/>
            <TableWeather products={products}/>
        </div>
    </div>
  );
}

export default App;

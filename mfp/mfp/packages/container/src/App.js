import React from "react";
import Marketing from './components/Marketing';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";

export default ()=>{
    return (
        <BrowserRouter>
          <div>
              <Header />
              <Marketing />
          </div>
        </BrowserRouter>
    );
};

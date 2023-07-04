import React from "react";
import Marketing from './components/Marketing';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { StylesProvider,createGenerateClassName } from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default ()=>{
    return (
        <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
          <div>
              <Header />
              <Marketing />
          </div>
          </StylesProvider>
        </BrowserRouter>
    );
};

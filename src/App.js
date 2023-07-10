
import React from "react";
import MainRouter from './main_router/MainRouter';
import {ShopContextProvider} from "../src/Context/context"
// import { createContext, useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <header className="App-header">
      <div>
        <MainRouter />
      </div>

      </header>
      </ShopContextProvider>
      
    </div>
  );
}

export default App;

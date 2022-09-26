import React from 'react';
import ReactDOM from "react-dom";
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SearchContextProvider } from './context/SearchContext';
import { DarkModeContextProvider } from "./context/darkModeContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// "https://raj-hotel-api.herokuapp.com/api"
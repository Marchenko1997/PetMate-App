import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store.js";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./index.css";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

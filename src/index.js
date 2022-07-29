import React from "react";
import { createRoot } from "react-dom/client"
import App from "./components/app/app";
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux";
import { BookProvider } from "./components/bookservice-context/context"
import BookStoreService from "./service"
import { BrowserRouter as Router } from "react-router-dom"
import store from "./store";
import ErrorBoundry from "./components/error-boundry/error-boundry";

const bookstoreService = new BookStoreService();

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BookProvider value={bookstoreService}>
          <Router>
            <App />
          </Router>
        </BookProvider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

reportWebVitals()
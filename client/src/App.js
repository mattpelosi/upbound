import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux-store/reducers.js";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  }
}

export default App;

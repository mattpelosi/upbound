import React, { Component } from "react";
import Navbar from "./components/Navbar.js";
import CardContainer from "./components/CardContainer.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./redux-store/reducers.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDatabase,
  faUserFriends,
  faEye,
  faPencilAlt,
  faCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(faDatabase, faUserFriends, faEye, faPencilAlt, faCircle);

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Navbar />
          <CardContainer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
